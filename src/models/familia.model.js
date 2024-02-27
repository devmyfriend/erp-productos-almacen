import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';

export const FamilyModel = Connection.define(
    'Family',
    {
        FamiliaId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        NombreFamilia:{
            type: DataTypes.STRING,
        },
        Activo:{
            allowNull: false,
            defaultValue: 1,
            type: DataTypes.BOOLEAN,
        }, 
        CreadoPor:{
            type: DataTypes.INTEGER,
        }, 
        CreadoEn:{
            type: DataTypes.timestamp,
            defaultValue: Date.now()
        },
        ActualizadoPor:{
            type: DataTypes.INTEGER,
        },
        ActualizadoEn:{
            type: DataTypes.timestamp,
            defaultValue: Date.now()
        },
    },

    {
        tableName: 'cat_Familias',
        timestamps: true,
        freezeTableName: true,
    },
);