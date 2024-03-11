import { body } from 'express-validator';

export const createPreciosSchema = [
    body('Descripcion')
    .notEmpty()
    .isString()
    .withMessage('El campo Descripcion es requerido y debe ser de tipo string'),
    body('CreadoPor')
    .notEmpty()
    .isNumeric()
    .withMessage('El campo CreadoPor es requerido y debe ser de tipo number'),
];

export const updatePrecioSchema = [
    body('Descripcion')
    .optional()
    .isString()
    .withMessage('El campo Descripcion debe ser de tipo string'),
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