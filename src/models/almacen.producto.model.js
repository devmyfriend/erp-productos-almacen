import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';

export const StoreProductModel = Connection.define(
	'ProductoAlmacen',
	{
		ProductoAlmacenId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		AlmacenId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		CodigoProducto: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Seccion: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Anaquel: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Nivel: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Lugar: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		MinimoStock: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		MaximoStock: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		Stock: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		Costo: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		UltimoPrecioCompra: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
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
		ActualizadoEn: {
			type: DataTypes.DATE,
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
		tableName: 'producto_almacen',
		timestamps: false,
		freezeTableName: false,
	},
);
