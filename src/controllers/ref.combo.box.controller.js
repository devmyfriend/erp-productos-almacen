import { RefComboBoxModel } from '../models/ref.combo.box.model.js';
import { findUserById } from '../middlewares/finders/index.js';

const findAll = async (req, res) => {
	try {
		const refComboBox = await RefComboBoxModel.findAll({
			attributes: [
				'IdComboBox',
				'Catalogo',
				'Nivel',
				'ClaveElemento',
				'Indice',
				'Valor',
			],
			where: {
				Borrado: 0,
			},
		});
		return res.status(200).json(refComboBox);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error al obtener los datos',
		});
	}
};

const create = async (req, res) => {
	const createComboBoxBody = req.body;
	try {
		const userFound = await findUserById(createComboBoxBody.CreadoPor);

		const lastComboBox = await RefComboBoxModel.findOne({
			where: {
				Catalogo: createComboBoxBody.Catalogo,
				Borrado: 0,
			},
			order: [['Indice', 'DESC']],
		});

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}
		

		const nextIndice = lastComboBox ? lastComboBox.Indice + 1 : 1;

		const newComboBox = await RefComboBoxModel.create({
			...createComboBoxBody,
			Indice: nextIndice,
			CreadoEn: new Date(),
			Valor: createComboBoxBody.Valor,
		});
		return res.status(200).json({
			message: 'Registro creado con éxito, el id es: ' + newComboBox.IdComboBox,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error al crear el registro',
		});
	}
};

const update = async (req, res) => {
    const { IdComboBox } = req.params;
    const data = req.body;
    try {
        const userFound = await findUserById(data.ActualizadoPor);

        const validaterefComboBox = await RefComboBoxModel.findOne({
            where: {
                IdComboBox: IdComboBox,
                Borrado: 0,
            },
        });

        if (!userFound.exist) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        if (!validaterefComboBox) {
            return res.status(400).json({ error: 'No se encontró el registro' });
        }

		if (validaterefComboBox.Catalogo !== data.Catalogo) {
			const maxIndice = await RefComboBoxModel.max('Indice', {
				where: { Catalogo: data.Catalogo, Borrado: 0 },
			});
			data.Indice = maxIndice ? maxIndice + 1 : 1;
		}

        await RefComboBoxModel.update(
            { ...data, ...{ ActualizadoEn: new Date() } },
            {
                where: {
                    IdComboBox: IdComboBox,
                },
            },
        );
        return res.status(200).json({
            message: 'Se ha editado el registro',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error al editar el registro',
        });
    }
};

const disable = async (req, res) => {
	const data = req.body;
	try {
		const userFound = await findUserById(data.BorradoPor);
		const validaterefComboBox = await RefComboBoxModel.findOne({
			where: {
				IdComboBox: data.IdComboBox,
				Borrado: 0,
			},
		});

		if (!userFound.exist) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		if (!validaterefComboBox) {
			return res.status(400).json({ error: 'No se encontró el registro' });
		}

		await RefComboBoxModel.update(
			{ ...data, BorradoEn: new Date(), Borrado: true },
			{
				where: {
					IdComboBox: data.IdComboBox,
				},
			},
		);
		return res.status(200).json({ message: 'Registro eliminado' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error al eliminar el registro',
		});
	}
};

export const methods = {
	findAll,
	create,
	update,
	disable,
};
