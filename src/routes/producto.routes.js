import { Router } from 'express';
import { methods } from '../controllers/producto.controller.js';

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

export default router;
