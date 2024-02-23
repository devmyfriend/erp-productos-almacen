import { Router } from 'express';
import { methods } from '../controllers/products.pos.controller.js';
import { validateSchema } from '../middlewares/express-validator/index.js';
import { createProductPosSchema } from '../schemas/pos/index.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Productos inventariables
 *     description: Operaciones relacionadas con Productos inventariables
 */

/**
 * @swagger
 * /api/v1/productos/pos:
 *   get:
 *     summary: Obtener una lista general de Productos inventariables
 *     tags: [Productos inventariables]
 *     responses:
 *       200:
 *         description: Lista de Productos inventariables
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
 *                       DescripcionProducto:
 *                         type: string
 *                         example: "Es una cocacola de 600"
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
 * /api/v1/productos/pos:
 *   post:
 *     summary: Crear un nuevo Producto inventariable
 *     tags: [Productos inventariables]
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
 *         description: Producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha creado el producto"
 *                 info:
 *                   type: array
 *                   description: Información adicional sobre el producto creado.
 *                   items:
 *                     type: object
 *                     properties:
 *                       CodigoProducto:
 *                         type: string
 *                         description: El código del producto recién creado.
 *                         example: "PRD001"
 *
 */

router.post('/', createProductPosSchema, validateSchema, methods.create);

export default router;
