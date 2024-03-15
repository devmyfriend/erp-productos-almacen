import {
	findAllItemByCode,
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
				'LineaId',
				'CreadoEn',
			],
		});

		if (data.length < 1) {
			return res.status(404).json({ error: 'No hay datos disponibles' });
		}

		return res.status(200).json({ response: data });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: 'Error interno del servidor',
		});
	}
};

const findById = async (req, res) => {
	const id = req.params.id;
	try {
		const data = await ProductModel.findAll({
			attributes: [
				'NombreProducto',
				'DescripcionProducto',
				'UnidadBase',
				'UnidadCompra',
				'UnidadVenta',
				'UnidadFiscal',
				'ClaveProductoServicio',
				'ClaveUnidadSat',
				'ImpuestoCompuestoId',
				'LineaId',
				'CategoriaId_1',
				'CategoriaId_2',
				'Borrado',
			],
			where: {
				CodigoProducto: id,
			},
		});

		if (data.length < 1) {
			return res.status(404).json({ error: 'No hay datos disponibles' });
		}

		return res.status(200).json({ response: data });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: 'Error interno del servidor',
		});
	}
};

const enable = async (req, res) => {
	try {
		const data = req.body;

		const productFound = await findAllItemByCode(data.CodigoProducto);

		const userFound = await findUserById(data.ActualizadoPor);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!productFound.exist) {
			return res.status(404).json({ error: 'No se ha encontrado el producto' });
		}

		await ProductModel.update(
			{ ...data, ActualizadoEn: new Date(), BorradoEn: null, Borrado: false },
			{
				where: {
					CodigoProducto: data.CodigoProducto,
				},
			},
		);

		return res.status(200).json({ message: 'Producto activado' });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: 'Error interno del servidor',
		});
	}
};

export const methods = {
	findAll,
	findById,
	enable,
};
