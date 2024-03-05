import { FamilyModel } from '../../models/familia.model.js';
import { SubFamilyModel } from '../../models/subfamilia.model.js'

export const validateSubFamilyIdExist = async (req, res, next) => {
    const { SubFamiliaId } = req.body

    try {

        const validate = await SubFamilyModel.findOne({
            where: {
                SubFamiliaId: SubFamiliaId,
            },
        });

        if (!validate) {
            return res.status(400).json({
                status: 'Error',
                Error: 'La familia no exite'
            });
        }

        next();

    } catch (error) {
        return res.status(500).send({
            errors: error
        })
    }
}

export const validateSubFamilyActive = async (req, res, next) => {
    const { SubFamiliaId } = req.body

    try {
        
        const validate = await SubFamilyModel.findOne({
            where: {
                SubFamiliaId: SubFamiliaId,
                Activo: true,
            },
        });

        if (!validate) {
            return res.status(200).json({
                status: 'Error',
                Error: 'No se puede editar la subfamilia, esta deshabilitado'
            });
        }

        next();

    } catch (error) {
        return res.status(500).send({
            errors: error
        })
    }
}

export const validateSubFamilyByNameExist = async (req, res, next) => {
    const { NombreSubFamilia } = req.body

    try {

        const validate = await SubFamilyModel.findOne({
            where: {
                NombreSubFamilia: NombreSubFamilia,
            },
        });

        if (validate) {
            return res.status(200).json({
                status: 'Error',
                Error: 'Cuidado el nombre de la famila ya esta en uso'
            });
        }

        next();

    } catch (error) {
        return res.status(500).send({
            errors: error
        })
    }
}