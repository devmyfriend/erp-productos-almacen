import { LinetModel } from '../../models/linea.model.js';
import { ProductModel } from '../../models/producto.model.js';
import { UserModel } from '../../models/usuario.model.js';
import { PoliticasMembresiaModel } from '../../models/politicas.membresia.model.js';

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

export const findPoliticaMembresaById = async id => {
	try {
		const item = await PoliticasMembresiaModel.findOne({
			where: {
				PoliticasMembresiaId: id,
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
}
