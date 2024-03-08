import { body } from 'express-validator';

export const createPreciosSchema = [
    body('Producto')
    .notEmpty()
    .isString()
    .withMessage('El campo Producto es requerido y debe ser de tipo string'),
    body('Descripcion')
    .notEmpty()
    .isString()
    .withMessage('El campo Descripcion es requerido y debe ser de tipo string'),
    body('Precio')
    .notEmpty()
    .isNumeric()
    .withMessage('El campo Precio es requerido y debe ser de tipo number'),
    body('CreadoPor')
    .notEmpty()
    .isNumeric()
    .withMessage('El campo CreadoPor es requerido y debe ser de tipo number'),
];

export const updatePrecioSchema = [
    body('Producto')
    .optional()
    .isString()
    .withMessage('El campo Producto debe ser de tipo string'),
    body('Descripcion')
    .optional()
    .isString()
    .withMessage('El campo Descripcion debe ser de tipo string'),
    body('Precio')
    .optional()
    .isNumeric()
    .withMessage('El campo Precio debe ser de tipo number'),
    body('ActualizadoPor')
    .notEmpty()
    .isNumeric()
    .withMessage('El campo ActualizadoPor es requerido y debe ser de tipo number'),
];

export const deletePrecioSchema = [
    body('PrecioId')
    .notEmpty()
    .isNumeric()
    .withMessage('El campo PrecioId es requerido y debe ser de tipo number'),
    body('BorradoPor')
    .notEmpty()
    .isNumeric()
    .withMessage('El campo BorradoPor es requerido y debe ser de tipo number'),
];