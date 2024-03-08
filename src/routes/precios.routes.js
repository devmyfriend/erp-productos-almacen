import { Router } from 'express';
import { methods } from '../controllers/precios.controller.js';
import * as schemas from '../schemas/precios.schema.js';
import { validateSchema } from '../middlewares/express-validator/index.js';

// import * as schemas from '../schemas/precios.schema';

const router = Router();

/**
 * @swagger
 * /api/v1/precios:
 *   get:
 *     summary: Recuperar una lista de precios
 *     tags: [Precios]
 *     responses:
 *       200:
 *         description: Lista de precios recuperada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   PrecioId:
 *                     type: integer
 *                     description: ID del precio.
 *                     example: 1
 *                   Producto:
 *                     type: string
 *                     description: Nombre del producto.
 *                     example: "Producto 1"
 *                   Descripcion:
 *                     type: string
 *                     description: Descripción del producto.
 *                     example: "Descripción del producto 1"
 *                   Precio:
 *                     type: number
 *                     description: Precio del producto.
 *                     example: 100.50
 *       404:
 *         description: No hay datos disponibles.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "No hay datos disponibles"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Error interno del servidor"
 */
router.get('/', methods.findAll);

/**
 * @swagger
 * /api/v1/precios:
 *   post:
 *     summary: Crear un nuevo precio
 *     tags: [Precios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Producto:
 *                 type: string
 *                 description: Nombre del producto.
 *                 example: "Producto 1"
 *               Descripcion:
 *                 type: string
 *                 description: Descripción del producto.
 *                 example: "Esta es la descripción del producto 1"
 *               Precio:
 *                 type: integer
 *                 description: Precio del producto.
 *                 example: 100
 *               CreadoPor:
 *                 type: integer
 *                 description: El ID del usuario que crea el precio.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Precio creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                   example: "Se ha creado el precio"
 *                 response:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       PrecioId:
 *                         type: integer
 *                         description: ID del precio creado.
 *                         example: 1
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Error interno del servidor"
 */
router.post('/', schemas.createPreciosSchema, validateSchema, methods.create);

/**
 * @swagger
 * /api/v1/precios/{PrecioId}:
 *   put:
 *     summary: Actualizar un precio existente
 *     tags: [Precios]
 *     parameters:
 *       - in: path
 *         name: PrecioId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del precio a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Producto:
 *                 type: string
 *                 description: Nombre del producto.
 *                 example: "Producto 1"
 *               Descripcion:
 *                 type: string
 *                 description: Descripción del producto.
 *                 example: "Esta es la descripción del producto 1"
 *               Precio:
 *                 type: integer
 *                 description: Precio del producto.
 *                 example: 100
 *               ActualizadoPor:
 *                 type: integer
 *                 description: El ID del usuario que actualiza el precio.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Precio actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                   example: "Se ha actualizado el precio"
 *                 PrecioId:
 *                   type: integer
 *                   description: ID del precio actualizado.
 *                   example: 1
 *       404:
 *         description: Precio no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Precio no encontrado"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Error interno del servidor"
 */
router.put(
	'/:PrecioId',
	schemas.updatePrecioSchema,
	validateSchema,
	methods.update,
);

/**
 * @swagger
 * /api/v1/precios:
 *   delete:
 *     summary: Eliminar un precio existente
 *     tags: [Precios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PrecioId:
 *                 type: integer
 *                 description: ID del precio a eliminar.
 *                 example: 1
 *               BorradoPor:
 *                 type: integer
 *                 description: ID del usuario que elimina el precio.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Precio eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                   example: "Se ha eliminado el precio"
 *                 PrecioId:
 *                   type: integer
 *                   description: ID del precio eliminado.
 *                   example: 1
 *       404:
 *         description: Precio no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Precio no encontrado"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Error interno del servidor"
 */
router.delete('/', 
schemas.deletePrecioSchema,
validateSchema,
methods.disable);

export default router;
