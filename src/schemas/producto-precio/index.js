import { body } from 'express-validator';

export const createProductoPrecioSchema = [
    body('ProductoAlmacenId')
        .notEmpty()
        .isInt()
        .withMessage('ProductoAlmacenId es obligatorio y debe de ser un entero'),
    body('ClaveListaPrecio')
        .notEmpty()
        .isString()
        .withMessage('ClaveListaPrecio es obligatorio y debe de ser una cadena de caracteres'),
    body('PrecioUnitarioSinImpuesto')
        .notEmpty()
        .isNumeric()
        .withMessage('PrecioUnitarioSinImpuesto es obligatorio y debe de ser un número'),
    body('ImpuestoCompuestoId')
        .notEmpty()
        .isInt()
        .withMessage('ImpuestoCompuestoId es obligatorio y debe de ser un entero'),
    body('PrecioUnitarioConImpuesto')
        .optional()
        .isNumeric()
        .withMessage('PrecioUnitarioConImpuesto debe de ser un número'),
    body('CreadoPor')
        .optional()
        .isInt()
        .withMessage('CreadoPor es obligatorio debe de ser un entero'),
];

export const updateProductoPrecioSchema = [
    body('ProductoAlmacenId')
        .optional()
        .isInt()
        .withMessage('ProductoAlmacenId es obligatorio y debe de ser un entero'),
    body('ClaveListaPrecio')
        .notEmpty()
        .isString()
        .withMessage('ClaveListaPrecio es obligatorio y debe de ser una cadena de caracteres'),
    body('PrecioUnitarioSinImpuesto')
        .optional()
        .isNumeric()
        .withMessage('PrecioUnitarioSinImpuesto es obligatorio y debe de ser un número'),
    body('ImpuestoCompuestoId')
        .optional()
        .isInt()
        .withMessage('ImpuestoCompuestoId es obligatorio y debe de ser un entero'),
    body('PrecioUnitarioConImpuesto')
        .optional()
        .isNumeric()
        .withMessage('PrecioUnitarioConImpuesto debe de ser un número'),
    body('ActualizadoPor')
        .notEmpty()
        .isInt()
        .withMessage('ActualizadoPor es obligatorio y debe de ser un entero'),
];

export const deleteProductoPrecioSchema = [
    body('ClaveListaPrecio')
        .notEmpty()
        .isString()
        .withMessage('ClaveListaPrecio es obligatorio y debe de ser una cadena de caracteres'),
    body('BorradoPor')
        .notEmpty()
        .isInt()
        .withMessage('BorradoPor es obligatorio y debe de ser un entero'),
];