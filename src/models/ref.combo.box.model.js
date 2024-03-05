import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';
export const RefComboBoxModel = Connection.define(
    'RefComboBox',
    {
        IdComboBox: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        Catalogo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nivel: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        ClaveElemento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Indice: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        Valor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Borrado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        CreadoPor: {
			type: DataTypes.INTEGER,
            allowNull: false,
		},
		CreadoEn: {
			type: DataTypes.DATE,
            allowNull: false,
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
        tableName: 'refComboBox',
        timestamps: false,
        freezeTableName: false,
    },
);
