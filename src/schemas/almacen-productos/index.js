import { body, param } from 'express-validator';

export const createStoreProductSchema = [
	body('AlmacenId')
		.notEmpty()
		.withMessage('El campo AlmacenId no puede estar vacío.')
		.isInt()
		.withMessage('El campo AlmacenId debe ser un número entero.'),
	body('CodigoProducto')
		.notEmpty()
		.withMessage('El campo CodigoProducto no puede estar vacío.')
		.isLength({ max: 20 })
		.withMessage(
			'El campo CodigoProducto no puede tener más de 20 caracteres.',
		),
	body('Seccion')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Seccion no puede tener más de 50 caracteres.'),
	body('Anaquel')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Anaquel no puede tener más de 50 caracteres.'),
	body('Nivel')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Nivel no puede tener más de 50 caracteres.'),
	body('Lugar')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Lugar no puede tener más de 50 caracteres.'),
	body('MinimoStock')
		.notEmpty()
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo MinimoStock debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('MaximoStock')
		.notEmpty()
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo MaximoStock debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('Stock')
		.notEmpty()
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo Stock debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('Costo')
		.notEmpty()
		.withMessage('El campo Costo no puede estar vacío.')
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo Costo debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('UltimoPrecioCompra')
		.optional({ nullable: true })
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo UltimoPrecioCompra debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('CreadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero.'),
];

export const updateStoreProductSchema = [
	param('id', 'El parametro debe ser un entero').isNumeric().notEmpty(),
	body('AlmacenId')
		.notEmpty()
		.withMessage('El campo AlmacenId no puede estar vacío.')
		.isInt()
		.withMessage('El campo AlmacenId debe ser un número entero.'),
	body('CodigoProducto')
		.notEmpty()
		.withMessage('El campo CodigoProducto no puede estar vacío.')
		.isLength({ max: 20 })
		.withMessage(
			'El campo CodigoProducto no puede tener más de 20 caracteres.',
		),
	body('Seccion')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Seccion no puede tener más de 50 caracteres.'),
	body('Anaquel')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Anaquel no puede tener más de 50 caracteres.'),
	body('Nivel')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Nivel no puede tener más de 50 caracteres.'),
	body('Lugar')
		.optional({ nullable: true })
		.isLength({ max: 50 })
		.withMessage('El campo Lugar no puede tener más de 50 caracteres.'),
	body('MinimoStock')
		.notEmpty()
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo MinimoStock debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('MaximoStock')
		.notEmpty()
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo MaximoStock debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('Stock')
		.notEmpty()
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo Stock debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('Costo')
		.notEmpty()
		.withMessage('El campo Costo no puede estar vacío.')
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo Costo debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('UltimoPrecioCompra')
		.optional({ nullable: true })
		.matches(/^\d{1,14}(\.\d{1,4})?$/)
		.withMessage(
			'El campo UltimoPrecioCompra debe ser un número decimal con un máximo de 18 dígitos en total y 4 dígitos después del punto decimal.',
		),
	body('ActualizadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo ActualizadoPor debe ser un número entero.'),
];

export const dropStoreProductSchema = [
	body('ProductoAlmacenId')
		.notEmpty()
		.isInt()
		.withMessage('El campo ProductoAlmacenId debe ser un número entero.'),
	body('BorradoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo BorradoPor debe ser un número entero.'),
];
