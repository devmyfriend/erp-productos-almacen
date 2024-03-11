import { PrecioModel } from '../models/precios.model.js';
import { findUserById } from '../middlewares/finders/index.js';

const findAll = async (req, res) => {
	try {
		const data = await PrecioModel.findAll({
			attributes: ['PrecioId', 'Producto', 'Descripcion', 'Precio'],
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

		const newPrecio = await PrecioModel.create({
			...data,
			CreadoEn: new Date(),
		});

		return res.status(200).json({
			message: 'Se ha creado el precio',
			PrecioId: newPrecio.PrecioId,
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

		const precio = await PrecioModel.findByPk(PrecioId);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!precio) {
			return res.status(404).json({ error: 'El precio no existe' });
		}


		await precio.update({
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
		const precioBody = req.body;

		const userFound = await findUserById(precioBody.BorradoPor);

		const precio = await PrecioModel.findByPk(precioBody.PrecioId);

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!precio) {
			return res.status(404).json({ error: 'Precio no encontrado' });
		}

		await precio.update({ Borrado: 1 });

		return res.status(200).json({
			message: 'Se ha eliminado el precio',
			PrecioId: precio.PrecioId,
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
