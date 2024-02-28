import { StoreModel } from '../../models/almacen.model.js';
import { LinetModel } from '../../models/linea.model.js';
import { ProductModel } from '../../models/producto.model.js';
import { ShopModel } from '../../models/sucursal.model.js';
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

// Busca entre todos los codigos activos y deshabilitados

export const findAllItemByCode = async code => {
	try {
		const item = await ProductModel.findOne({
			where: {
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

// Busca entre todos los codigos activos
export const findItemByCode = async code => {
	try {
		const item = await ProductModel.findOne({
			where: {
				Borrado: 0,
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

export const findStoreByName = async (name, s_id) => {
	try {
		const item = await StoreModel.findOne({
			where: {
				NombreAlmacen: name,
				SucursalId: s_id,
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

export const findStoreById = async id => {
	try {
		const item = await StoreModel.findOne({
			where: {
				AlmacenId: id,
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
export const findShopById = async id => {
	try {
		const item = await ShopModel.findOne({
			where: {
				SucursalId: id,
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
