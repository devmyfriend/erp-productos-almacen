import { Router } from 'express';
import { methods } from '../controllers/almacen.producto.controller.js';
import { validateSchema } from '../middlewares/express-validator/index.js';
import * as schemas from '../schemas/almacen-productos/index.js';
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Productos por almacen
 *     description: Operaciones relacionadas con el Catálogo General de productos por almacén
 */

/**
 * @swagger
 * /api/v1/almacen/producto:
 *   get:
 *     summary: Obtener una lista general de Productos por almacén
 *     tags: [Productos por almacen]
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
 */

router.get('/', methods.findAll);

/**
 * @swagger
 * /api/v1/almacen/producto:
 *   post:
 *     summary: Crear un nuevo Producto
 *     tags: [Productos por almacen]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AlmacenId:
 *                 type: integer
 *                 description: El ID del almacén al que pertenece el producto.
 *                 example: 1
 *               CodigoProducto:
 *                 type: string
 *                 description: El código único del producto. Máximo 20 caracteres.
 *                 example: "PROD001"
 *               Seccion:
 *                 type: string
 *                 description: La sección del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "A1"
 *               Anaquel:
 *                 type: string
 *                 description: El anaquel del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "A"
 *               Nivel:
 *                 type: string
 *                 description: El nivel del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "1"
 *               Lugar:
 *                 type: string
 *                 description: El lugar específico del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "A1-1"
 *               MinimoStock:
 *                 type: number
 *                 description: El stock mínimo permitido para el producto.
 *                 example: 10.5
 *               MaximoStock:
 *                 type: number
 *                 description: El stock máximo permitido para el producto.
 *                 example: 100.0
 *               Stock:
 *                 type: number
 *                 description: La cantidad actual de stock del producto.
 *                 example: 50.0
 *               Costo:
 *                 type: number
 *                 description: El costo del producto.
 *                 example: 20.0
 *               UltimoPrecioCompra:
 *                 type: number
 *                 description: El último precio de compra del producto. Opcional.
 *                 example: 15.0
 *               CreadoPor:
 *                 type: integer
 *                 description: El ID del usuario que crea el producto. Debe ser un número entero.
 *                 example: 2
 *
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
 *                 response:
 *                   type: array
 *                   description: Información adicional sobre el Almacén creado.
 *                   items:
 *                     type: object
 *                     properties:
 *                       ProductoAlmacenId:
 *                         type: number
 *                         description: El id del producto.
 *                         example: 10
 *
 */
router.post(
	'/',
	schemas.createStoreProductSchema,
	validateSchema,
	methods.create,
);

/**
 * @swagger
 * /api/v1/almacen/producto/{ProductoAlmacenId}:
 *   put:
 *     summary: Editar un Producto existente
 *     tags: [Productos por almacen]
 *     parameters:
 *       - in: path
 *         name: ProductoAlmacenId
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del producto en el almacén.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AlmacenId:
 *                 type: integer
 *                 description: El ID del almacén al que pertenece el producto.
 *                 example: 1
 *               CodigoProducto:
 *                 type: string
 *                 description: El código único del producto. Máximo 20 caracteres.
 *                 example: "PROD001"
 *               Seccion:
 *                 type: string
 *                 description: La sección del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "A1"
 *               Anaquel:
 *                 type: string
 *                 description: El anaquel del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "A"
 *               Nivel:
 *                 type: string
 *                 description: El nivel del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "1"
 *               Lugar:
 *                 type: string
 *                 description: El lugar específico del almacén donde se encuentra el producto. Opcional, máximo 50 caracteres.
 *                 example: "A1-1"
 *               MinimoStock:
 *                 type: number
 *                 description: El stock mínimo permitido para el producto.
 *                 example: 10.5
 *               MaximoStock:
 *                 type: number
 *                 description: El stock máximo permitido para el producto.
 *                 example: 100.0
 *               Stock:
 *                 type: number
 *                 description: La cantidad actual de stock del producto.
 *                 example: 50.0
 *               Costo:
 *                 type: number
 *                 description: El costo del producto.
 *                 example: 20.0
 *               UltimoPrecioCompra:
 *                 type: number
 *                 description: El último precio de compra del producto. Opcional.
 *                 example: 15.0
 *               ActualizadoPor:
 *                 type: integer
 *                 description: El ID del usuario que realiza la actualización del producto. Debe ser un número entero.
 *                 example: 2
 *
 *     responses:
 *       200:
 *         description: Producto editado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha editado el producto"
 */

router.put(
	'/:id',
	schemas.updateStoreProductSchema,
	validateSchema,
	methods.update,
);

/**
 * @swagger
 * /api/v1/almacen/producto/borrar:
 *   delete:
 *     summary: Eliminar un Alamcén
 *     tags: [Productos por almacen]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductoAlmacenId:
 *                 type: number
 *                 description: El id del ProductoAlmacenId a eliminar.
 *                 example: 1
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
 *                   example: "Se ha eliminado el Producto"
 */

router.delete(
	'/borrar',
	schemas.dropStoreProductSchema,
	validateSchema,
	methods.disable,
);

export default router;
