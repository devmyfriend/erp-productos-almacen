import { DataTypes } from 'sequelize';
import { Connection } from '../database/mariadb.database.js';

export const LineModel = Connection.define(
    'Line',
    {
        LineaId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        SubFamiliaId:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        NombreLinea:{
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
        },
        ActualizadoPor:{
            type: DataTypes.INTEGER,
        },
        ActualizadoEn:{
            type: DataTypes.timestamp,
        },
    },

    {
        tableName: 'cat_Lineas',
        timestamps: true,
        freezeTableName: true,
    },
);