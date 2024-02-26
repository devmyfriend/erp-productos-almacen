import { body } from 'express-validator';

export const createProductPosSchema = [
	body('CodigoProducto')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 3, max: 20 })
		.withMessage(
			'El Código del Producto es obligatorio y debe tener entre 3 y 20 caracteres.',
		),

	body('NombreProducto')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 5, max: 50 })
		.withMessage(
			'El campo NombreProducto es obligatorio y debe tener entre 5 y 50 caracteres.',
		),

	body('DescripcionProducto')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 10, max: 255 })
		.withMessage(
			'El campo DescripcionProducto es obligatorio y debe tener entre 10 y 255 caracteres.',
		),

	body('UnidadBase')
		.notEmpty()
		.isInt()
		.withMessage('La Unidad Base debe ser un número entero.'),

	body('UnidadCompra')
		.notEmpty()
		.isInt({ min: 0 })
		.withMessage(
			'La Unidad de Compra debe ser un número entero no menor que cero.',
		),

	body('UnidadVenta')
		.notEmpty()
		.isInt({ min: 0 })
		.withMessage(
			'La Unidad de Venta debe ser un número entero no menor que cero.',
		),

	body('UnidadFiscal')
		.notEmpty()
		.isInt({ min: 0 })
		.withMessage(
			'La Unidad Fiscal debe ser un número entero no menor que cero.',
		),

	body('ClaveProductoServicio')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 3, max: 8 })
		.withMessage(
			'El campo ClaveProductoServicio es obligatorio y debe tener entre 3 y 8 caracteres.',
		),

	body('ClaveUnidadSat')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 3, max: 3 })
		.withMessage(
			'El campo ClaveUnidadSat es obligatorio y debe tener 3  caracteres.',
		),

	body('ImpuestoCompuestoId')
		.notEmpty()
		.isInt()
		.withMessage('El campo ImpuestoCompuestoId debe ser un numero entero  '),

	body('LineaId')
		.notEmpty()
		.isInt()
		.withMessage('El campo LineaId debe ser un numero entero  '),

	body('CategoriaId_1')
		.optional()
		.isString()
		.withMessage('La Categoría 1 debe ser una cadena.'),

	body('CategoriaId_2')
		.optional()
		.isString()
		.withMessage('La Categoría 2 debe ser una cadena.'),

	body('CreadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero.'),
];

export const updateProductPosSchema = [
	body('NombreProducto')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 5, max: 50 })
		.withMessage(
			'El campo NombreProducto es obligatorio y debe tener entre 5 y 50 caracteres.',
		),

	body('DescripcionProducto')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 10, max: 255 })
		.withMessage(
			'El campo DescripcionProducto es obligatorio y debe tener entre 10 y 255 caracteres.',
		),

	body('UnidadBase')
		.notEmpty()
		.isInt()
		.withMessage('La Unidad Base debe ser un número entero.'),

	body('UnidadCompra')
		.notEmpty()
		.isInt({ min: 0 })
		.withMessage(
			'La Unidad de Compra debe ser un número entero no menor que cero.',
		),

	body('UnidadVenta')
		.notEmpty()
		.isInt({ min: 0 })
		.withMessage(
			'La Unidad de Venta debe ser un número entero no menor que cero.',
		),

	body('UnidadFiscal')
		.notEmpty()
		.isInt({ min: 0 })
		.withMessage(
			'La Unidad Fiscal debe ser un número entero no menor que cero.',
		),

	body('ClaveProductoServicio')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 3, max: 8 })
		.withMessage(
			'El campo ClaveProductoServicio es obligatorio y debe tener entre 3 y 8 caracteres.',
		),

	body('ClaveUnidadSat')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 3, max: 3 })
		.withMessage(
			'El campo ClaveUnidadSat es obligatorio y debe tener 3  caracteres.',
		),

	body('ImpuestoCompuestoId')
		.notEmpty()
		.isInt()
		.withMessage('El campo ImpuestoCompuestoId debe ser un numero entero  '),

	body('LineaId')
		.notEmpty()
		.isInt()
		.withMessage('El campo LineaId debe ser un numero entero  '),

	body('CategoriaId_1')
		.optional()
		.isString()
		.withMessage('La Categoría 1 debe ser una cadena.'),

	body('CategoriaId_2')
		.optional()
		.isString()
		.withMessage('La Categoría 2 debe ser una cadena.'),

	body('ActualizadoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo CreadoPor debe ser un número entero.'),
];

export const deleteProductPosSchema =[
	body('CodigoProducto')
		.notEmpty()
		.isString()
		.trim()
		.isLength({ min: 3, max: 20 })
		.withMessage(
			'El Código del Producto es obligatorio y debe tener entre 3 y 20 caracteres.',
		),
		body('BorradoPor')
		.notEmpty()
		.isInt()
		.withMessage('El campo BorradoPor debe ser un número entero.'),
]