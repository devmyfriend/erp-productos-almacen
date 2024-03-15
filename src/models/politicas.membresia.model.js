import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';
export const MembershipPoliciesModel = Connection.define(
	'PoliticasMembresia',
	{
		PoliticasMembreciasId: {
			type: DataTypes.NUMBER,
			primaryKey: true,
			autoIncrement: true,
		},
		Descripcion: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		TipoPeriodo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ValorPeriodo: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		EsGrupal: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		MinimoGrupal: {
			type: DataTypes.NUMBER,
			allowNull: true,
		},
		MaximoGrupal: {
			type: DataTypes.NUMBER,
			allowNull: true,
		},
		EsPremium: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		Borrado: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
		},
		CreadoPor: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		CreadoEn: {
			type: DataTypes.DATE,
			allowNull: true,
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
	    	tableName: 'PoliticasMembrecias',
	    	timestamps: false,
	    	freezeTableName: false,
	    },
);
