import { Router } from 'express';
import { methods } from '../controllers/almacen.controller.js';
import { validateSchema } from '../middlewares/express-validator/index.js';
import * as schemas from '../schemas/almacen/index.js';
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Almacén
 *     description: Operaciones relacionadas con el Almacén
 */

/**
 * @swagger
 * /api/v1/almacen:
 *   get:
 *     summary: Obtener una lista general de los Almacenes
 *     tags: [Almacén]
 *     responses:
 *       200:
 *         description: Lista de almacenes
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
 *                       AlmacenId:
 *                         type: number
 *                         example: 1
 *                       SucursalId:
 *                         type: number
 *                         example: 1010
 *                       NombreAlmacen:
 *                         type: string
 *                         example: "Almacen 1"
 *                       CreadoEn:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-23T20:29:41.000Z"
 */

router.get('/', methods.findAll);

/**
 * @swagger
 * /api/v1/almacen:
 *   post:
 *     summary: Crear un nuevo Almacén
 *     tags: [Almacén]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NombreAlmacen:
 *                 type: string
 *                 description: El código del producto. Debe tener entre 3 y 20 caracteres.
 *                 example: "Nuevo almacen"
 *               SucursalId:
 *                 type: number
 *                 description: El nombre del producto. Debe tener entre 5 y 50 caracteres.
 *                 example: 1010
 *               CreadoPor:
 *                 type: integer
 *                 description: El ID del usuario que crea el producto. Debe ser un número entero.
 *                 example: 2
 *     responses:
 *       200:
 *         description: Almacén creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha creado el Almacén"
 *                 response:
 *                   type: array
 *                   description: Información adicional sobre el Almacén creado.
 *                   items:
 *                     type: object
 *                     properties:
 *                       AlmacenId:
 *                         type: number
 *                         description: El id del Almacén recién creado.
 *                         example: 10
 *
 */
router.post('/', schemas.createStoreSchema, validateSchema, methods.create);

/**
 * @swagger
 * /api/v1/almacen/{id}:
 *   put:
 *     summary: Actualizar un Almacén existente
 *     tags: [Almacén]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Almacén a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SucursalId:
 *                 type: number
 *                 description: sucursal id
 *                 example: 1010
 *               NombreAlmacen:
 *                 type: string
 *                 description: El nuevo nombre del Almacén
 *                 example: "Nuevo nombre de almacén (actualizado)"
 *               ActualizadoPor:
 *                 type: integer
 *                 description: El ID del usuario que realiza la modificación
 *                 example: 3
 *     responses:
 *       200:
 *         description: Almacén actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación de la actualización.
 *                   example: "Almacén actualizado correctamente"
 */

router.put('/:id', schemas.updateStoreSchema, validateSchema, methods.update);

/**
 * @swagger
 * /api/v1/almacen/borrar:
 *   delete:
 *     summary: Eliminar un Alamcén
 *     tags: [Almacén]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AlmacenId:
 *                 type: number
 *                 description: El id del Almacén a eliminar.
 *                 example: 1
 *               SucursalId:
 *                 type: number
 *                 description: El id de la sucursal.
 *                 example: 1
 *
 *               BorradoPor:
 *                 type: number
 *                 description: El usuario que elimino el prodcuto.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Almacén eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha eliminado el Almacén"
 */

router.delete(
	'/borrar',
	schemas.deleteStoreSchema,
	validateSchema,
	methods.disable,
);

export default router;
