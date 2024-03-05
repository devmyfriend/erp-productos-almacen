import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';
export const StoreModel = Connection.define(
	'Store',
	{
		AlmacenId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		SucursalId: {
			type: DataTypes.INTEGER,
		},
		NombreAlmacen: {
			type: DataTypes.STRING,
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
		tableName: 'orgAlmacen',
		timestamps: false,
		freezeTableName: false,
	},
);
