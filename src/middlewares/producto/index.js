import { ProductModel } from '../../models/producto.model.js';

/*
TODO -> VALIDAR QUE ESTAS LLAVES EXISTAN 

  ClaveProductoServicio
  ClaveUnidadSat
  ImpuestoCompuestoId
  LineaId
  CategoriaId_1
  CategoriaId_2	
*/

export const findItemByPk = async (code, type) => {
	try {
		const item = await ProductModel.findOne({
			where: {
				Borrado: 0,
				TipoProductoId: type, // -> tipo de producto a buscar,
				CodigoProducto: code,
			},
		});

		if (!item) {
			return { exist: false };
		}

		return { exist: true, data: item.dataValues };
	} catch (error) {
		console.log(error);

		return {
			message: 'Internal server error',
		};
	}
};
