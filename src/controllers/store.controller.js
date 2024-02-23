
import { ProductModel } from '../models/products.model.js';

const findAll = async (req, res) => {
	try {
		const data = await ProductModel.findAll({
			where: {
				Borrado: 0,
			},
		});

		return res.status(200).json({ response: data } );
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
