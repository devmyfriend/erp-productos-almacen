import { body } from 'express-validator';

export const createLineSchema = [
	body('SubFamiliaId')
		.notEmpty()
		.withMessage('El campo ID Subfamilia no puede estar vacío')
		.isInt()
		.withMessage('El campo ID Subfamilia invalido'),
	body('NombreLinea')
		.notEmpty()
		.withMessage('El campo nombre de linea no puede estar vacío')
        .length(5,50)
        .withMessage('El nombre de la linea es demaciado largo'),
	/*body('CreadoPor')
		.notEmpty()
		.withMessage('El campo CreadoPor no puede estar vacío')
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero'),*/
];

export const updateLineSchema = [
	body('LineaId')
		.notEmpty()
		.withMessage('El campo ID linia no puede estar vacío')
		.isInt()
		.withMessage('El campo ID linia invalido'),
    body('SubFamiliaId')
		.notEmpty()
		.withMessage('El campo ID Subfamilia no puede estar vacío')
		.isInt()
		.withMessage('El campo ID Subfamilia invalido'),
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

export const disabledLineSchema = [
	body('LineaId')
		.notEmpty()
		.withMessage('El campo ID linea no puede estar vacío')
		.isInt()
		.withMessage('El campo ID linea invalido'),
	/*body('BorradoPor')
		.notEmpty()
		.withMessage('El campo BorradoPor no puede estar vacío')
		.isInt()
		.withMessage('El campo BorradoPor debe ser un número entero'),*/
];