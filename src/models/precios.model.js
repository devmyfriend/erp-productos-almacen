import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';

export const PrecioModel = Connection.define(
	'Precios',
	{
		PrecioId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		Descripcion: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Borrado: {
			type: DataTypes.BOOLEAN,
		},
		BorradoEn: {
			type: DataTypes.DATE,
		},
		CreadoEn: {
			type: DataTypes.DATE,
		},
		ActualizadoEn: {
			type: DataTypes.DATE,
		},
		CreadoPor: {
			type: DataTypes.INTEGER,
		},
		ActualizadoPor: {
			type: DataTypes.INTEGER,
		},
	},
	{
		tableName: 'precios',
		timestamps: false,
		freezeTableName: false,
	},
);
