import { UnitModel } from "../models/unidad.model"


const findAll = async ( req, res ) =>{
    try{
        const data  = await UnitModel.findAll({
            attributes: [ 'UnidadId', 'NombreUnidad' ],
            where: {
                Borrado: 0
            }
        })

        if( !data){
            return res.status(404).send({
                 error: 'mensaje de respuesta'
            })
        }

        return res.status(200).send({
             data
        })

    }catch( error ){
        return res.status(500).send({
             error: 'Error interno del servidor'
        })
    }
}

const findById = async ( req, res )=>{
    const id = req.params.unitid

    try{

        const unit = await UnitModel.findByPk( id )

        if(!unit){
            return res.status(404).send({
                 error: 'No se encontro la unidad'
            })
        }

        return res.status(200).send({
             message: 'Se ha encontrado la unidad',
             unit
        })

    }catch( error ){
        return res.status(500).send({
            error: 'Error interno del servidor'
       })
    }
}

const findByName = async ( req, res )=>{
    const unitname = req.params.unitname

    try{

        const unit = await UnitModel.findOne({
            where: { NombreUnidad: unitname }
        })

        if(!unit){
            return res.status(404).send({
                 error: 'No se encontro la unidad'
            })
        }

        return res.status(200).send({
             message: 'Se ha encontrado la unidad',
             unit
        })

    }catch( error ){
        return res.status(500).send({
            error: 'Error interno del servidor'
       })
    }
}

const create = async ( req, res ) =>{
    try{

        const { unitname, createdby } = req.body

        const data = await UnitModel.create({ 
            NombreUnidad: unitname,
            CreadoPor: createdby 
        })

        if( !data ){
            return res.status(400).send({
                 error: 'No se pudo crear la unidad'
            })
        }

        return res.status(200).send({
             data,
             message: 'Se ha creado la Unidad de Medida'
        })
        

    }catch( error ){
        return res.status(500).send({
            error: 'Error interno del servidor'
       })
    }
}

const update = async ( req, res ) =>{
    const { unitid, unitname, updatedby } = req.body
    try{

        const data = await UnitModel.update({
            NombreUnidad: unitname,
            ActualizadoPor: updatedby,
            ActaulizadoEn: Date.now()
        },{
            where:{
                UnidadId: unitid
            }
        })

        if(!data){
            return res.status(400).send({
                 error: 'No se pudo actualizar el registro'
            })
        }


        return res.status(200).send({
             message: 'Se ha actualizado los datos de la unidad'
        })

    }catch( error ){
        return res.status(500|).send({
            message: 'Error interno del servidor'
        })
    }
}

const disable = async ( req, res ) =>{

    const { unitid, deletedby }  = req.body

    try{

        const data = await UnitModel.update({
            Borrado: true,
            BorradoPor: deletedby,
            BorradoEn: Date.now()
        },{
            where: { UnidadId: unitid }
        })

        return res.status(200).send({
             message: 'Se ha borrado la Unidad'
        })

    }catch( error ){
        return res.status(500).send({
            
             error: 'Error interno del servidor '
        })
    }

}


export const methods = {
    create,
    disable,
    findAll,
    findById,
    findByName,
    update,
}