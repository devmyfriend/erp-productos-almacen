import { PoliticasMembresiaModel } from "../models/politicas.membresia.model.js";

const findAll = async (req, res) => {
    try {
        const data = await PoliticasMembresiaModel.findAll({
            attributes: [
                'PoliticasMembreciasId',
                'Descripcion',
                'TipoPeriodo',
                'ValorPeriodo',
                'EsGrupal',
                'MinimoGrupal',
                'MaximoGrupal',
                'EsPremium',
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
}

const create = async (req, res) => {
    try { 
        const data = req.body;

        const validatePoliticasMembresia = await PoliticasMembresiaModel.findOne({
            where: {
                Descripcion: data.Descripcion,
                Borrado: 0,
            },
        });

        if(validatePoliticasMembresia) {
            return res.status(404).json({ error: 'La política de membresía ya existe' });
        }

        const createPoliticasMembresia = await PoliticasMembresiaModel.create(data);

        return res.status(200).json({
            message: 'Se ha creado la política de membresía',
            response: [{ PoliticasMembresiaId: createPoliticasMembresia.dataValues.PoliticasMembresiaId }],
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
        const { PoliticasMembresiaId } = req.params;
        const data = req.body;

        const updatePoliticasMembresia = await PoliticasMembresiaModel.update(data, {
            where: {
                PoliticasMembresiaId,
            },
        });

        if (updatePoliticasMembresia[0] === 0) {
            return res.status(404).json({ error: 'La política de membresía no existe' });
        }

        return res.status(200).json({ message: 'Se ha actualizado la política de membresía' });
    } catch (error) {
        console.log(error);

        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const remove = async (req, res) => {
    try {
        const body = req.body;

        const deletePoliticasMembresia = await PoliticasMembresiaModel.update({
            Borrado: 1,
        }, {
            where: {
                PoliticasMembresiaId: body.PoliticasMembresiaId,
            },
        });

        if (deletePoliticasMembresia[0] === 0) {
            return res.status(404).json({ error: 'La política de membresía no existe' });
        }

        return res.status(200).json({ message: 'Se ha eliminado la política de membresía' });


    }   catch (error) {
        console.log(error);

        return res.status(500).json({ error: 'Error interno del servidor' });
    }
} 

export const methods = {
    findAll,
    create,
    update,
    remove
}