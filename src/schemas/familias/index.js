import { body } from 'express-validator';

export const createFamilySchema = [
	body('NombreFamilia')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 5, max: 50 })
        .withMessage('El nombre de la familia es obligatorio y debe de tener entre 3 a 50 cacteres'),
	body('CreadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero.'),
];

export const updateFamilySchema = [
	body('FamiliaId')
		.notEmpty()
		.isInt()
		.withMessage('El campo ID familia invalido'),
	body('NombreFamilia')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 5, max: 50 })
		.withMessage('El nombre de la familia es obligatorio y debe de tener entre 3 a 50 cacteres'),
	body('ActualizadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo ActualizadoPor debe ser un número entero.'),
];

export const disabledFamilySchema = [
	body('FamiliaId')
        .notEmpty()
        .withMessage('El campo ID familia no puede estar vacío')
        .isInt()
        .withMessage('El campo ID familia invalido'),
	body('BorradoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero.'),
];

