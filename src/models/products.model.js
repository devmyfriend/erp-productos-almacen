import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';
export const ProductModel = Connection.define(
	'Products',
	{
		CodigoProducto: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},
		TipoProductoId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NombreProducto: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		UnidadBase: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		UnidadCompra: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		UnidadVenta: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		UnidadFiscal: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		ClaveProductoServicio: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ClaveUnidadSat: {
			type: DataTypes.STRING,
		},
		ImpuestoCompuestoId: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		LineaId: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		CategoriaId_1: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		CategoriaId_2: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		CreadoPor: {
			type: DataTypes.INTEGER,
		},
		CreadoEn: {
			type: DataTypes.DATE,
		},
		ActualizadoPor: {
			type: DataTypes.INTEGER,
		},
		BorradoPor: {
			type: DataTypes.INTEGER,
		},

		BorradoEn: {
			type: DataTypes.DATE,
		},
		Borrado: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		tableName: 'cat_Productos',
		timestamps: false,
		freezeTableName: false,
	},
);
