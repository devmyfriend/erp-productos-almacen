import { Router } from 'express';
import { methods } from '../controllers/producto.insumo.controller.js';
import { validateSchema } from '../middlewares/express-validator/index.js';
import * as schemas from '../schemas/pos/index.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Insumos
 *     description: Operaciones relacionadas con Insumos
 */

/**
 * @swagger
 * /api/v1/productos/insumo:
 *   get:
 *     summary: Obtener una lista general de Insumos
 *     tags: [Insumos]
 *     responses:
 *       200:
 *         description: Lista de Insumos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       CodigoProducto:
 *                         type: string
 *                         example: "202000114212"
 *                       TipoProductoId:
 *                         type: string
 *                         example: "1"
 *                       NombreProducto:
 *                         type: string
 *                         example: "Insumos"
 *                       DescripcionProducto:
 *                         type: string
 *                         example: "Es un Insumo"
 *                       LineaId:
 *                         type: integer
 *                         example: 1
 *                       CreadoEn:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-23T20:29:41.000Z"
 */

router.get('/', methods.findAll);

/**
 * @swagger
 * /api/v1/productos/insumo:
 *   post:
 *     summary: Crear un nuevo Insumo
 *     tags: [Insumos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CodigoProducto:
 *                 type: string
 *                 description: El código del producto. Debe tener entre 3 y 20 caracteres.
 *                 example: "PRD001"
 *               NombreProducto:
 *                 type: string
 *                 description: El nombre del producto. Debe tener entre 5 y 50 caracteres.
 *                 example: "Producto de ejemplo"
 *               DescripcionProducto:
 *                 type: string
 *                 description: La descripción del producto. Debe tener entre 10 y 255 caracteres.
 *                 example: "Este es un producto de ejemplo."
 *               UnidadBase:
 *                 type: integer
 *                 description: La unidad base del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 1
 *               UnidadCompra:
 *                 type: integer
 *                 description: La unidad de compra del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 1
 *               UnidadVenta:
 *                 type: integer
 *                 description: La unidad de venta del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 1
 *               UnidadFiscal:
 *                 type: integer
 *                 description: La unidad fiscal del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 1
 *               ClaveProductoServicio:
 *                 type: string
 *                 description: La clave del producto/servicio. Debe tener entre 3 y 8 caracteres.
 *                 example: "123456"
 *               ClaveUnidadSat:
 *                 type: string
 *                 description: La clave de la unidad SAT. Debe tener 3 caracteres.
 *                 example: "123"
 *               ImpuestoCompuestoId:
 *                 type: integer
 *                 description: El ID del impuesto compuesto. Debe ser un número entero mayor que cero.
 *                 example: 1
 *               LineaId:
 *                 type: integer
 *                 description: El ID de la línea del producto. Debe ser un número entero mayor que cero.
 *                 example: 1
 *               CategoriaId_1:
 *                 type: string
 *                 description: La categoría 1 del producto. (Opcional)
 *                 example: "Categoría 1"
 *               CategoriaId_2:
 *                 type: string
 *                 description: La categoría 2 del producto. (Opcional)
 *                 example: "Categoría "
 *               CreadoPor:
 *                 type: integer
 *                 description: El ID del usuario que crea el producto. Debe ser un número entero.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Servicio creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha creado el Servicio"
 *                 response:
 *                   type: array
 *                   description: Información adicional sobre el Servicio creado.
 *                   items:
 *                     type: object
 *                     properties:
 *                       CodigoProducto:
 *                         type: string
 *                         description: El código del Servicio recién creado.
 *                         example: "PRD001"
 *
 */

router.post(
	'/',
	schemas.createProductPosSchema,
	validateSchema,
	methods.create,
);

/**
 * @swagger
 * /api/v1/productos/insumo/{CodigoInsumo}:
 *   put:
 *     summary: Actualizar un Insumo 
 *     tags: [Insumos]
 *     parameters:
 *       - in: path
 *         name: CodigoInsumo
 *         schema:
 *           type: string
 *         required: true
 *         description: El código del Insumo a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NombreProducto:
 *                 type: string
 *                 description: El nuevo nombre del producto. Debe tener entre 5 y 50 caracteres.
 *                 example: "Datos actualizado"
 *               DescripcionProducto:
 *                 type: string
 *                 description: La nueva descripción del producto. Debe tener entre 10 y 255 caracteres.
 *                 example: "Este es un producto actualizado."
 *               UnidadBase:
 *                 type: integer
 *                 description: La nueva unidad base del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 2
 *               UnidadCompra:
 *                 type: integer
 *                 description: La nueva unidad de compra del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 2
 *               UnidadVenta:
 *                 type: integer
 *                 description: La nueva unidad de venta del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 2
 *               UnidadFiscal:
 *                 type: integer
 *                 description: La nueva unidad fiscal del producto. Debe ser un número entero mayor o igual a cero.
 *                 example: 2
 *               ClaveProductoServicio:
 *                 type: string
 *                 description: La nueva clave del producto/servicio. Debe tener entre 3 y 8 caracteres.
 *                 example: "654321"
 *               ClaveUnidadSat:
 *                 type: string
 *                 description: La nueva clave de la unidad SAT. Debe tener 3 caracteres.
 *                 example: "321"
 *               ImpuestoCompuestoId:
 *                 type: integer
 *                 description: El nuevo ID del impuesto compuesto. Debe ser un número entero mayor que cero.
 *                 example: 2
 *               LineaId:
 *                 type: integer
 *                 description: El nuevo ID de la línea del producto. Debe ser un número entero mayor que cero.
 *                 example: 2
 *               CategoriaId_1:
 *                 type: string
 *                 description: La nueva categoría 1 del producto. (Opcional)
 *                 example: "Nueva Categoría 1"
 *               CategoriaId_2:
 *                 type: string
 *                 description: La nueva categoría 2 del producto. (Opcional)
 *                 example: "Nueva Categoría 2"
 *               ActualizadoPor:
 *                 type: integer
 *                 description: El ID del usuario que realiza la modificación del producto. Debe ser un número entero.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha actualizado el Insumos"
 *                 info:
 *                   type: array
 *                   description: Información adicional sobre el Insumo actualizado.
 *                   items:
 *                     type: object
 *                     properties:
 *                       CodigoProducto:
 *                         type: string
 *                         description: El código del Insumo actualizado.
 *                         example: "PRD001"
 */

router.put(
	'/:id',
	schemas.updateProductPosSchema,
	validateSchema,
	methods.update,
);

/**
 * @swagger
 * /api/v1/productos/insumo/borrar:
 *   delete:
 *     summary: Eliminar un Insumo
 *     tags: [Insumos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CodigoProducto:
 *                 type: string
 *                 description: El código del producto a eliminar.
 *                 example: "PRD001"
 *
 *               BorradoPor:
 *                 type: number
 *                 description: El usuario que elimino el prodcuto.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha eliminado el insumo"
 */

router.delete(
	'/borrar',
	schemas.deleteProductPosSchema,
	validateSchema,
	methods.disable,
);

export default router;
