import { body } from 'express-validator';

export const createComboBoxSchema = [
	body('Catalogo')
		.notEmpty()
		.isString()
		.withMessage(
			'El campo Catalogo es obligatorio y debe ser una cadena de texto.',
		),
	body('Nivel')
		.notEmpty()
		.isInt()
		.withMessage('El campo Nivel es obligatorio y debe ser un número entero.'),
	body('ClaveElemento')
		.notEmpty()
		.isString()
		.withMessage(
			'El campo ClaveElemento es obligatorio y debe ser una cadena de texto.',
		),
	body('Valor')
		.notEmpty()
		.isString()
		.withMessage(
			'El campo Valor es obligatorio y debe ser una cadena de texto.',
		),
	body('CreadoPor')
		.notEmpty()
		.isInt()
		.withMessage(
			'El campo CreadoPor es obligatorio y debe ser un número entero.',
		),
];

export const updateComboBoxSchema = [
	body('Catalogo')
		.optional()
		.isString()
		.withMessage('El campo Catalogo debe ser una cadena de texto.'),
	body('Nivel')
		.optional()
		.isInt()
		.withMessage('El campo Nivel debe ser un número entero.'),
	body('ClaveElemento')
		.optional()
		.isString()
		.withMessage('El campo ClaveElemento debe ser una cadena de texto.'),
	body('Valor')
		.optional()
		.isString()
		.withMessage('El campo valor debe ser una cadena de texto.'),
	body('ActualizadoPor')
		.notEmpty()
		.isInt()
		.withMessage(
			'El campo CreadoPor es obligatorio y debe ser un número entero.',
		),
];

export const deleteComboBoxSchema = [
	body('IdComboBox')
		.notEmpty()
		.isInt()
		.withMessage('El campo IdComboBox debe ser un número entero.'),
	body('BorradoPor')
		.notEmpty()
		.isInt()
		.withMessage(
			'El campo CreadoPor es obligatorio y debe ser un número entero.',
		),
];
