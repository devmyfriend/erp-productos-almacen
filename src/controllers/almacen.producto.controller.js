import {
	findAllItemByCode,
	findStoreProductById,
	findUserById,
} from '../middlewares/finders/index.js';
import { StoreProductModel } from '../models/almacen.producto.model.js';

const findAll = async (req, res) => {
	try {
		const data = await StoreProductModel.findAll({
			attributes: [
				'ProductoAlmacenId',
				'AlmacenId',
				'CodigoProducto',
				'Stock',
				'Costo',
				'Seccion',
				'Anaquel',
				'Nivel',
				'Lugar',
				'MinimoStock',
				'MaximoStock',
				'CreadoEn',
			],
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
		const productFound = await findAllItemByCode(data.CodigoProducto);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}
		if (!productFound.exist) {
			return res.status(404).json({ error: 'No se ha encontrado el prodcuto' });
		}

		const newProduct = await StoreProductModel.create(data);

		return res.status(200).json({
			message: 'Se ha creado el producto',
			response: [
				{ ProductoAlmacenId: newProduct.dataValues.ProductoAlmacenId },
			],
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error interno del servidor',
		});
	}
};

const update = async (req, res) => {
	try {
		const data = req.body;
		const storeProductId = req.params.id;
		const dataFound = await findStoreProductById(storeProductId);
		const userFound = await findUserById(data.ActualizadoPor);
		const productFound = await findAllItemByCode(data.CodigoProducto);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}
		if (!dataFound.exist) {
			return res.status(404).json({ error: 'El prodcuto no existe' });
		}
		if (!productFound.exist) {
			return res
				.status(404)
				.json({ error: 'No se ha encontrado el prodcuto ' });
		}

		await StoreProductModel.update(
			Object.assign(data, {
				ActualizadoPor: data.ActualizadoPor,
				ActualizadoEn: new Date(),
			}),
			{
				where: {
					ProductoAlmacenId: storeProductId,
				},
			},
		);

		return res.status(200).json({
			message: 'Se ha editado el producto',
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error interno del servidor',
		});
	}
};

const disable = async (req, res) => {
	try {
		const data = req.body;
		const dataFound = await findStoreProductById(data.ProductoAlmacenId);
		const userFound = await findUserById(data.BorradoPor);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}
		if (!dataFound.exist) {
			return res.status(404).json({ error: 'El prodcuto no existe' });
		}

		await StoreProductModel.update(
			Object.assign(data, {
				Borrado: true,
				BorradoPor: data.BorradoPor,
				BorradoEn: new Date(),
			}),
			{
				where: {
					ProductoAlmacenId: data.ProductoAlmacenId,
				},
			},
		);

		return res.status(200).json({
			message: 'Se ha eliminado el producto',
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error interno del servidor',
		});
	}
};

export const methods = {
	findAll,
	create,
	update,
	disable,
};
