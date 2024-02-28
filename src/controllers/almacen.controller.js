import { where } from 'sequelize';
import {
	findShopById,
	findStoreById,
	findStoreByName,
	findUserById,
} from '../middlewares/finders/index.js';
import { StoreModel } from '../models/almacen.model.js';

const findAll = async (req, res) => {
	try {
		const data = await StoreModel.findAll({
			attributes: ['AlmacenId', 'SucursalId', 'NombreAlmacen', 'CreadoEn'],
			where: {
				Borrado: 0,
			},
		});

		if (data.length < 1) {
			return res.status(404).json({ error: 'No hay datos disponibles' });
		}

		return res.status(200).json({ response: data });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			error: 'Error interno del servidor',
		});
	}
};

const create = async (req, res) => {
	try {
		const data = req.body;

		const userFound = await findUserById(data.CreadoPor);
		const shopFound = await findShopById(data.SucursalId);
		const storeFound = await findStoreByName(
			data.NombreAlmacen,
			data.SucursalId,
		);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!shopFound.exist) {
			return res.status(404).json({ error: 'Sucursal no encontrada' });
		}
		if (storeFound.exist) {
			return res
				.status(409)
				.json({ error: 'El nombre del almacen ya esta en uso' });
		}

		const createStore = await StoreModel.create(data);

		return res.status(200).json({
			message: 'Se ha creado el Almacén',
			response: [{ AlmacenId: createStore.dataValues.AlmacenId }],
		});
	} catch (error) {
		console.log(error);
	}
};

const update = async (req, res) => {
	try {
		const storeId = req.params.id;

		const data = req.body;

		const userFound = await findUserById(data.ActualizadoPor);
		const shopFound = await findShopById(data.SucursalId);
		const storeNameFound = await findStoreByName(
			data.NombreAlmacen,
			data.SucursalId,
		);

		const storeFound = await findStoreById(storeId);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!shopFound.exist) {
			return res.status(404).json({ error: 'Sucursal no encontrada' });
		}

		if (!storeFound.exist) {
			return res.status(404).json({ error: 'Almacen no encontrado' });
		}
		if (storeNameFound.exist) {
			return res
				.status(409)
				.json({ error: 'El nombre del almacen ya esta en uso' });
		}

		await StoreModel.update(
			Object.assign(data, {
				ActualizadoPor: data.ActualizadoPor,
				ActualizadoEn: new Date(),
			}),
			{
				where: {
					AlmacenId: storeId,
				},
			},
		);

		return res.status(200).json({
			message: 'Se ha actualizado el Almacén',
		});
	} catch (error) {
		console.log(error);
	}
};

export const methods = {
	findAll,
	create,
	update,
};
