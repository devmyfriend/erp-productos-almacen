import { ProductModel } from '../models/products.model.js';

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
			where: {
				Borrado: 0,
			},
		});

		if (data.length < 1) {
			return res.status(404).json({ message: 'No hay datos disponibles' });
		}

		return res.status(200).json({ response: data });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: 'Internal server error',
		});
	}
};

export const methods = {
	findAll,
};
