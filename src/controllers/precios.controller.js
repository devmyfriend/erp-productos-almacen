import { PriceModel } from '../models/precios.model.js';
import { findUserById } from '../middlewares/finders/index.js';

const findAll = async (req, res) => {
	try {
		const data = await PriceModel.findAll({
			where: {
				Borrado: 0,
			},

			attributes: ['PrecioId', 'Descripcion'],
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

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		const newPrice = await PriceModel.create({
			...data,
			CreadoEn: new Date(),
		});

		return res.status(200).json({
			message: 'Se ha creado el precio',
			PrecioId: newPrice.PrecioId,
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
		const { PrecioId } = req.params;
		const data = req.body;

		const userFound = await findUserById(data.ActualizadoPor);

		const validate = await PriceModel.findOne({
			where: {
				PrecioId,
				Borrado: 0,
			},
		});

		if (!validate) {
			return res.status(404).json({ error: 'Precio no encontrado' });
		}
		
		const price = await PriceModel.findByPk(PrecioId);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!price) {
			return res.status(404).json({ error: 'El precio no existe' });
		}

		await price.update({
			...data,
			ActualizadoEn: new Date(),
		});

		return res.status(200).json({
			message: 'Se ha actualizado el precio',
			PrecioId: precio.PrecioId,
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
		const pricebody = req.body;

		const userFound = await findUserById(pricebody.BorradoPor);

		const validate = await PriceModel.findOne({
			where: {
				PrecioId: precioBody.PrecioId,
				Borrado: 0,
			},
		});

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!validate) {
			return res.status(404).json({ error: 'Precio no encontrado' });
		}

		await PriceModel.update(
			{
				Borrado: 1,
				BorradoPor: pricebody.BorradoPor,
				BorradoEn: new Date(),
			},
			{
				where: {
					PrecioId: pricebody.PrecioId,
				},
			},
		);

		return res.status(200).json({
			message: 'Se ha eliminado el precio',
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
