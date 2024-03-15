import { Router } from 'express';
import { methods } from '../controllers/producto.controller.js';
import { validateSchema } from '../middlewares/express-validator/index.js';
import * as schemas from '../schemas/productos/index.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Catálogo de productos
 *     description: Operaciones relacionadas con el Catálogo General de productos
 */

/**
 * @swagger
 * /api/v1/productos:
 *   get:
 *     summary: Obtener una lista general del Catálogo de productos
 *     tags: [Catálogo de productos]
 *     responses:
 *       200:
 *         description: Lista del Catálogo de productos
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
 *                         example: "202000114"
 *                       TipoProductoId:
 *                         type: string
 *                         example: "1"
 *                       NombreProducto:
 *                         type: string
 *                         example: "COCACOLA"
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
 * /api/v1/productos/detalle/{codigoProducto}:
 *   get:
 *     summary: Obtener un producto por código
 *     tags: [Catálogo de productos]
 *     parameters:
 *       - in: path
 *         name: codigoProducto
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto a buscar
 *     responses:
 *       200:
 *         description: Detalles del producto solicitado
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
 *                       NombreProducto:
 *                         type: string
 *                         example: "Cocacola de 600"
 *                       DescripcionProducto:
 *                         type: string
 *                         example: "Este es un producto actualizado."
 *                       UnidadBase:
 *                         type: integer
 *                         example: 2
 *                       UnidadCompra:
 *                         type: integer
 *                         example: 2
 *                       UnidadVenta:
 *                         type: integer
 *                         example: 2
 *                       UnidadFiscal:
 *                         type: integer
 *                         example: 2
 *                       ClaveProductoServicio:
 *                         type: string
 *                         example: "654321"
 *                       ClaveUnidadSat:
 *                         type: string
 *                         example: "321"
 *                       ImpuestoCompuestoId:
 *                         type: integer
 *                         example: 2
 *                       LineaId:
 *                         type: integer
 *                         example: 2
 *                       CategoriaId_1:
 *                         type: string
 *                         example: "Nueva Categoría 1"
 *                       CategoriaId_2:
 *                         type: string
 *                         example: "Nueva Categoría 2"
 *                       Borrado:
 *                         type: boolean
 *                         example: false
 */

router.get(
	'/detalle/:id',
	schemas.findByCode,
	validateSchema,
	methods.findById,
);

/**
 * @swagger
 * /api/v1/productos/activar:
 *   put:
 *     summary: Habilitar un producto
 *     tags: [Catálogo de productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CodigoProducto:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 20
 *                 example: "202000114"
 *               ActualizadoPor:
 *                 type: integer
 *                 example: 123
 *     responses:
 *       200:
 *         description: Producto activado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Producto activado"

 */
router.put(
	'/activar',
	schemas.enableProductPosSchema,
	validateSchema,
	methods.enable,
);

export default router;
