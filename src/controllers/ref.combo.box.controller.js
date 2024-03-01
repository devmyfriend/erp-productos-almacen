import { RefComboBoxModel } from '../models/ref.combo.box.model.js';


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
                'CreadoPor',
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
		const lastComboBox = await RefComboBoxModel.findOne({
			where: {
				Catalogo: createComboBoxBody.Catalogo,
				Borrado: 0,
			},
			order: [['Indice', 'DESC']],
		});

		const nextIndice = lastComboBox ? lastComboBox.Indice + 1 : 1;

		await RefComboBoxModel.create({
			...createComboBoxBody,
			Indice: nextIndice,
			CreadoEn: new Date(),
			Valor: createComboBoxBody.Valor,
		});
		return res.status(200).json(createComboBoxBody);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error al crear el registro',
		});
	}
};


const update = async (req, res) => {
    const data = req.body;
    try {
        const validaterefComboBox = await RefComboBoxModel.findOne({
            where: {
                IdComboBox: data.IdComboBox,
                Borrado: 0,
            },
        });

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
                    IdComboBox: data.IdComboBox,
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

        const validaterefComboBox = await RefComboBoxModel.findOne({
            where: {    
                IdComboBox: data.IdComboBox,
                Borrado: 0,
            },
        });

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
