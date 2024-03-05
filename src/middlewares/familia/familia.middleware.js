import { DataTypes, Op } from 'sequelize';
import { FamilyModel } from '../../models/familia.model.js'

export const validateFamilyIdExist = async (req, res, next) => {
    const { FamiliaId } = req.body

    try {

        const validate = await FamilyModel.findOne({
            where: {
                FamiliaId: FamiliaId,
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

export const validateFamilyActive = async (req, res, next) => {
    const { FamiliaId } = req.body

    try {
        
        const validate = await FamilyModel.findOne({
            where: {
                FamiliaId: FamiliaId,
                Activo: true,
            },
        });

        if (!validate) {
            return res.status(200).json({
                status: 'Error',
                Error: 'No se puede editar la familia, esta deshabilitado'
            });
        }

        next();

    } catch (error) {
        return res.status(500).send({
            errors: error
        })
    }
}

export const validateFamilyByNameExist = async (req, res, next) => {
    const { NombreFamilia } = req.body

    try {

        const validate = await FamilyModel.findOne({
            where: {
                NombreFamilia: NombreFamilia,
            },
        });

        if (validate) {
            return res.status(200).json({
                status: 'Error',
                Error: 'Cuidado el nombre de la famila ya esta en uso'
            });
        }

        console.log("EL NOMBRE NO ESTA EN USO")

        next();

    } catch (error) {
        return res.status(500).send({
            errors: error
        })
    }
}


/*export const validateFamilyInactive = async (req, res, next) => {
    const { FamiliaId } = req.body
    try {

        const validate = await FamilyModel.findByPk({
            where: {
                FamiliaId: FamiliaId,
                Activo: false,
            },
        });

        if(validate === null){
            return res.status(404).json({
                status: 'Error',
                Error: 'La familia no existe'
            });
        }

        if (!validate) {
            return res.status(404).json({
                status: 'Error',
                Error: 'La familia no existe'
            });
        }

        next();

    } catch (error) {
        return res.status(500).send({
            errors: error
        })
    }
}
*/



