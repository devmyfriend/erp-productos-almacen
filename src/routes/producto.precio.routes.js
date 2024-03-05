import { Router } from 'express';
import { methods } from '../controllers/producto.precio.controller.js';
import { validateSchema } from '../middlewares/express-validator/index.js';
import * as schemas from '../schemas/producto-precio/index.js';

const router = Router();

/**
 * @swagger
 * /api/v1/productoPrecio:
 *   get:
 *     summary: Obtener todos los precios de productos
 *     tags: [ProductoPrecio]
 *     responses:
 *       200:
 *         description: Lista de precios de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ProductoAlmacenId:
 *                     type: integer
 *                     description: ID del producto en almacén.
 *                     example: 123123
 *                   ClaveListaPrecio:
 *                     type: string
 *                     description: Clave de la lista de precios.
 *                     example: "CLP123"
 *                   PrecioUnitarioSinImpuesto:
 *                     type: number
 *                     description: Precio unitario del producto sin impuesto.
 *                     example: 100.50
 *                   ImpuestoCompuestoId:
 *                     type: integer
 *                     description: ID del impuesto compuesto.
 *                     example: 1
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/', methods.findAll);

/**
 * @swagger
 * /api/v1/productoPrecio:
 *   post:
 *     summary: Crear un nuevo precio de producto
 *     tags: [ProductoPrecio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductoAlmacenId:
 *                 type: integer
 *                 description: ID del producto en almacén.
 *                 example: 123123
 *               ClaveListaPrecio:
 *                 type: string
 *                 description: Clave de la lista de precios.
 *                 example: "CLP123"
 *               PrecioUnitarioSinImpuesto:
 *                 type: number
 *                 description: Precio unitario del producto sin impuesto.
 *                 example: 100.50
 *               ImpuestoCompuestoId:
 *                 type: integer
 *                 description: ID del impuesto compuesto.
 *                 example: 1
 *               PrecioUnitarioCompuesto:
 *                 type: number
 *                 description: Precio unitario compuesto del producto.
 *                 example: 120.60
 *               CreadoPor:
 *                 type: integer
 *                 description: ID del usuario que crea el registro.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Precio de producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ProductoAlmacenId:
 *                   type: integer
 *                   description: ID del producto en almacén.
 *                   example: 123123
 *                 ClaveListaPrecio:
 *                   type: string
 *                   description: Clave de la lista de precios.
 *                   example: "CLP123"
 *                 PrecioUnitarioSinImpuesto:
 *                   type: number
 *                   description: Precio unitario del producto sin impuesto.
 *                   example: 100.50
 *                 ImpuestoCompuestoId:
 *                   type: integer
 *                   description: ID del impuesto compuesto.
 *                   example: 1
 *                 PrecioUnitarioCompuesto:
 *                   type: number
 *                   description: Precio unitario compuesto del producto.
 *                   example: 120.60
 *                 CreadoPor:
 *                   type: integer
 *                   description: ID del usuario que crea el registro.
 *                   example: 1
 */
router.post(
	'/',
	schemas.createProductoPrecioSchema,
	validateSchema,
	methods.create,
);

/**
 * @swagger
 * /api/v1/productoPrecio:
 *   put:
 *     summary: Actualizar un precio de producto existente
 *     tags: [ProductoPrecio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductoAlmacenId:
 *                 type: integer
 *                 description: ID del producto en almacén.
 *                 example: 1
 *               ClaveListaPrecio:
 *                 type: string
 *                 description: Clave de la lista de precios.
 *                 example: "CLP123"
 *               PrecioUnitarioSinImpuesto:
 *                 type: number
 *                 description: Precio unitario del producto sin impuesto.
 *                 example: 100.50
 *               ImpuestoCompuestoId:
 *                 type: integer
 *                 description: ID del impuesto compuesto.
 *                 example: 1
 *               PrecioUnitarioConImpuesto:
 *                 type: number
 *                 description: Precio unitario compuesto del producto.
 *                 example: 120.60
 *               CreadoPor:
 *                 type: integer
 *                 description: ID del usuario que crea el registro.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Precio de producto actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ProductoAlmacenId:
 *                   type: integer
 *                   description: ID del producto en almacén.
 *                   example: 1
 *                 ClaveListaPrecio:
 *                   type: string
 *                   description: Clave de la lista de precios.
 *                   example: "CLP123"
 *                 PrecioUnitarioSinImpuesto:
 *                   type: number
 *                   description: Precio unitario del producto sin impuesto.
 *                   example: 100.50
 *                 ImpuestoCompuestoId:
 *                   type: integer
 *                   description: ID del impuesto compuesto.
 *                   example: 1
 *                 PrecioUnitarioConImpuesto:
 *                   type: number
 *                   description: Precio unitario compuesto del producto.
 *                   example: 120.60
 *                 CreadoPor:
 *                   type: integer
 *                   description: ID del usuario que crea el registro.
 *                   example: 1
 */
router.put(
	'/',
	schemas.updateProductoPrecioSchema,
	validateSchema,
	methods.update,
);

/**
 * @swagger
 * /api/v1/productoPrecio:
 *   delete:
 *     summary: Eliminar un precio de producto existente
 *     tags: [ProductoPrecio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ClaveListaPrecio:
 *                 type: string
 *                 description: Clave de la lista de precios.
 *                 example: "CLP123"
 *               BorradoPor:
 *                 type: integer
 *                 description: ID del usuario que borra el registro.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Precio de producto eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                   example: "Registro eliminado"
 */
router.delete(
	'/',
	schemas.deleteProductoPrecioSchema,
	validateSchema,
	methods.remove,
);

export default router;
