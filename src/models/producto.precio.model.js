import { DataTypes } from "sequelize";
import { Connection } from "../database/mariadb.database.js";

export const ProductoPrecioModel = Connection.define(
    'Producto_Precio',
    {
        ProductoAlmacenId: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: true,
        },
        ClaveListaPrecio: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        PrecioUnitarioSinImpuesto: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        PrecioUnitarioConImpuesto: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        ImpuestoCompuestoId: {
            type: DataTypes.NUMBER,
            allowNull: true,
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
        tableName: 'Producto_Precio',
        timestamps: false,
        freezeTableName: false,
    }
);