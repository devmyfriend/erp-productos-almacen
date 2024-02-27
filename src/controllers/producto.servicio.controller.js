import {
	findAllItemByCode,
	findItemByCode,
	findLineById,
	findUserById,
} from '../middlewares/finders/index.js';
import { ProductModel } from '../models/producto.model.js';

const findAll = async (req, res) => {
	try {
		const data = await ProductModel.findAll({
			attributes: [
				'CodigoProducto',
				'TipoProductoId',
				'NombreProducto',
				'DescripcionProducto',
				'LineaId',
				'CreadoEn',
			],
			where: {
				Borrado: 0,
				TipoProductoId: 3, // -> SERVICIOS
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
		if (productFound.exist) {
			return res
				.status(409)
				.json({ error: 'El código del Servicio ya esta en uso' });
		}

		const newProduct = Object.assign(data, { TipoProductoId: 3 });

		const createProduct = await ProductModel.create(newProduct);

		return res.status(200).json({
			message: 'Se ha creado el Servicio',
			response: [{ CodigoProducto: createProduct.dataValues.CodigoProducto }],
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			error: 'Error al crear el Servicio',
		});
	}
};

const update = async (req, res) => {
	try {
		const prductId = req.params.id;
		const data = req.body;

		const lineFound = await findLineById(data.LineaId);
		const productFound = await findItemByCode(prductId);
		const userFound = await findUserById(data.ActualizadoPor);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!productFound.exist) {
			return res.status(404).json({ error: 'No se ha encontrado el Servicio' });
		}

		if (!lineFound.exist) {
			return res
				.status(404)
				.json({ error: 'No se ha encontrado la línea seleccionada' });
		}

		await ProductModel.update(
			{ ...data, ...{ ActualizadoEn: new Date() } },
			{
				where: {
					CodigoProducto: prductId,
				},
			},
		);

		return res.status(200).json({
			message: 'Se ha editado el Servicio',
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error al editar el Servicio',
		});
	}
};

const disable = async (req, res) => {
	const data = req.body;

	const productFound = await findItemByCode(data.CodigoProducto);

	const userFound = await findUserById(data.BorradoPor);

	if (!userFound.exist) {
		return res.status(404).json({ error: 'Usuario no encontrado' });
	}

	if (!productFound.exist) {
		return res.status(404).json({ error: 'No se ha encontrado el Servicio' });
	}

	await ProductModel.update(
		{ ...data, BorradoEn: new Date(), Borrado: true,  },
		{
			where: {
				CodigoProducto: data.CodigoProducto,
			},
		},
	);

	return res.status(200).json({ message: 'Servicio eliminado' });
};

export const methods = {
	findAll,
	create,
	update,
	disable,
};
