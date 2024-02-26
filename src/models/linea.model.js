import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';
export const LinetModel = Connection.define(
	'Line',
	{
		LineaId: {
			type: DataTypes.NUMBER,
			primaryKey: true,
			allowNull: false,
		},
		SubFamiliaId: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		NombreLinea: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Borrado: {
			type: DataTypes.BOOLEAN,
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
			allowNull: true,
		},
		ActualizadoEn: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		BorradoPor: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},

		BorradoEn: {
			type: DataTypes.DATE,
			allowNull: true,
		},
	},
	{
		tableName: 'cat_Lineas',
		timestamps: false,
		freezeTableName: false,
	},
);
