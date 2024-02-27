import { body } from 'express-validator';

export const createFamilySchema = [
	body('NombreFamilia')
		.notEmpty()
		.withMessage('El campo nombre de familia no puede estar vacío')
        .length(5,50)
        .withMessage('El nombre de la familia es demaciado largo'),
	/*body('CreadoPor')
		.notEmpty()
		.withMessage('El campo CreadoPor no puede estar vacío')
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero'),*/
];

export const updateFamilySchema = [
	body('FamiliaId')
		.notEmpty()
		.withMessage('El campo ID familia no puede estar vacío')
		.isInt()
		.withMessage('El campo ID familia invalido'),
	body('NombreFamilia')
		.notEmpty()
		.withMessage('El campo nombre de familia no puede estar vacío')
        .length(5,50)
		.withMessage('El nombre de la familia es demaciado largo'),
	/*body('ActualizadoPor')
		.notEmpty()
		.withMessage('El campo ActualizadoPor no puede estar vacío')
		.isInt()
		.withMessage('El campo ActualizadoPor debe ser un número entero'),*/
];

export const disabledFamilySchema = [
	body('FamiliaId')
        .notEmpty()
        .withMessage('El campo ID familia no puede estar vacío')
        .isInt()
        .withMessage('El campo ID familia invalido'),
	/*body('BorradoPor')
		.notEmpty()
		.withMessage('El campo BorradoPor no puede estar vacío')
		.isInt()
		.withMessage('El campo BorradoPor debe ser un número entero'),*/
];

