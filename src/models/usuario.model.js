import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';
export const UserModel = Connection.define(
	'User',
	{
		UsuarioId: {
			type: DataTypes.NUMBER,
			primaryKey: true,
			allowNull: false,
		},
		TipoUsuarioId: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		NickName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ApellidoPaterno: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ApellidoMaterno: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Nombres: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ClaveUsuario: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Foto: {
			type: DataTypes.STRING,
			allowNull: true,
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
		tableName: 'Usuario',
		timestamps: false,
		freezeTableName: false,
	},
);
