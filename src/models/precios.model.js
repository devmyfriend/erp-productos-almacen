import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';

export const PriceModel = Connection.define(
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
		BorradoPor: {
			type: DataTypes.INTEGER
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
