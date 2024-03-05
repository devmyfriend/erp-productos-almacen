import { body } from 'express-validator';

export const createSubFamilySchema = [
	body('FamiliaId')
		.notEmpty()
		.isInt()
		.withMessage('Falta ID de familia'),
	body('NombreSubFamilia')
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

export const updateSubFamilySchema = [
	body('SubFamiliaId')
		.notEmpty()
		.isInt()
		.withMessage('El campo ID subfamilia es invalido'),
	body('FamiliaId')
		.notEmpty()
		.isInt()
		.withMessage('El campo ID familia invalido'),
	body('NombreSubFamilia')
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

export const disabledSubFamilySchema = [
	body('SubFamiliaId')
        .notEmpty()
        .isInt()
        .withMessage('El campo ID familia invalido'),
];