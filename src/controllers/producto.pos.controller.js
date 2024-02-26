import { findItemByCode, findLineById } from '../middlewares/producto/index.js';
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
				TipoProductoId: 2, // -> produCtos que se venden a publico
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

		const productFound = await findItemByCode(data.CodigoProducto, 2);

		if (productFound.exist) {
			return res
				.status(409)
				.json({ error: 'El código del producto ya esta en uso' });
		}

		const newProduct = Object.assign(data, { TipoProductoId: 2 });

		const createProduct = await ProductModel.create(newProduct);

		return res.status(200).json({
			message: 'Se ha creado el producto',
			info: [{ CodigoProducto: createProduct.dataValues.CodigoProducto }],
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			error: 'Error al crear el producto',
		});
	}
};

const update = async (req, res) => {
	try {
		const prductId = req.params.id;
		const data = req.body;

		const lineFound = await findLineById(data.LineaId);
		const productFound = await findItemByCode(prductId, 2);

		if (!productFound.exist) {
			return res.status(404).json({ error: 'No se ha encontrado el producto' });
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
			message: 'Se ha editado el producto',
			response: newData.dataValues,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error al editar el producto',
		});
	}
};

export const methods = {
	findAll,
	create,
	update,
};
