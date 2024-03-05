import { body, param } from 'express-validator';

export const createStoreSchema = [
	body('NombreAlmacen')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 5, max: 50 })
		.withMessage(
			'El campo NombreAlmacen es obligatorio y debe tener entre 5 y 50 caracteres.',
		),
	body('SucursalId')
		.notEmpty()
		.isInt()
		.withMessage('El campo SucursalId debe ser un número entero.'),
	body('CreadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero.'),
];

export const updateStoreSchema = [
	param('id', 'El parametro debe ser un entero').isNumeric().notEmpty(),
	body('SucursalId')
		.notEmpty()
		.isInt()
		.withMessage('El campo SucursalId debe ser un número entero.'),
	body('NombreAlmacen')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 5, max: 50 })
		.withMessage(
			'El campo NombreAlmacen es obligatorio y debe tener entre 5 y 50 caracteres.',
		),
	body('ActualizadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo ActualizadoPor debe ser un número entero.'),
];

export const deleteStoreSchema = [
	body('SucursalId')
		.notEmpty()
		.isInt()
		.withMessage('El campo SucursalId debe ser un número entero.'),
	body('AlmacenId')
		.notEmpty()
		.isInt()
		.withMessage('El campo SucursalId debe ser un número entero.'),
	body('BorradoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo BorradoPor debe ser un número entero.'),
];
