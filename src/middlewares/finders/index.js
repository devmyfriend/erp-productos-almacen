import { LinetModel } from '../../models/linea.model.js';
import { ProductModel } from '../../models/producto.model.js';
import { UserModel } from '../../models/usuario.model.js';

/*
TODO -> VALIDAR QUE ESTAS LLAVES EXISTAN 

  ClaveProductoServicio
  ClaveUnidadSat
  ImpuestoCompuestoId
  LineaId
  CategoriaId_1
  CategoriaId_2	
*/

export const findItemByCode = async (code, type) => {
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
			message: 'Error interno del servidor',
		};
	}
};

export const findLineById = async id_line => {
	try {
		const item = await LinetModel.findOne({
			where: {
				LineaId: id_line,
				Borrado: false,
			},
		});

		if (!item) {
			return { exist: false };
		}

		return { exist: true, data: item.dataValues };
	} catch (error) {
		console.log(error);

		return {
			message: 'Error interno del servidor',
		};
	}
};

export const findUserById = async id_user => {
	try {
		const item = await UserModel.findOne({
			where: {
				UsuarioId: id_user,
				Borrado: false,
			},
		});

		if (!item) {
			return { exist: false };
		}

		return { exist: true, data: item.dataValues };
	} catch (error) {
		console.log(error);

		return {
			message: 'Error interno del servidor',
		};
	}
};
