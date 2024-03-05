import { ProductoPrecioModel } from '../models/producto.precio.model.js';

const findAll = async (req, res) => {
    try {
        const productoPrecio = await ProductoPrecioModel.findAll({
            attributes: [
                'ProductoAlmacenId',
                'ClaveListaPrecio',
                'PrecioUnitarioSinImpuesto',
                'ImpuestoCompuestoId',
            ],
            where: {
                Borrado: 0,
            },
        });
        return res.status(200).json(productoPrecio);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error al obtener los datos',
        });
    }
}

const create = async (req, res) => {
    try {
        const createProductoPrecioBody = req.body;

        const validateProduct = await ProductoPrecioModel.findOne({
            where: {
                ClaveListaPrecio: createProductoPrecioBody.ClaveListaPrecio,
                Borrado: 0,
            },
        });

        if (validateProduct) {
            return res.status(404).json({
                error: 'El registro ya existe',
            });
        }
        

        await ProductoPrecioModel.create(
            {
                ...createProductoPrecioBody,
                CreadoEn: new Date(),
            }
         );

        return res.status(200).json(createProductoPrecioBody);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error al crear el registro',
        });
    }
}

const update = async (req, res) => {
    try {
        const data = req.body;
        
        const validateProduct = await ProductoPrecioModel.findOne({
            where: {
                ClaveListaPrecio: data.ClaveListaPrecio,
                Borrado: 0,
            },
        });

        if (!validateProduct) {
            return res.status(404).json({
                error: 'El registro no existe',
            });
        }

        await ProductoPrecioModel.update(data, {
            where: {
                ClaveListaPrecio: data.ClaveListaPrecio,
            },
        });
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error al actualizar el registro',
        });
    }
}

const remove = async (req, res) => {
    try{
        const body = req.body;

        const validateProduct = await ProductoPrecioModel.findOne({
            where: {
                ClaveListaPrecio: body.ClaveListaPrecio,
                Borrado: 0,
            },
        });

        if (!validateProduct) {
            return res.status(404).json({
                error: 'El registro no existe',
            });
        }

        await ProductoPrecioModel.update({
            Borrado: 1,
            BorradoEn: new Date(),
        }, {
            where: {
                ClaveListaPrecio: body.ClaveListaPrecio,
            },
        });

        return res.status(200).json({
            message: 'Registro eliminado',
        });


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
    remove

};