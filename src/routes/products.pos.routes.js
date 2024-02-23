import { methods } from '../controllers/products.pos.controller.js';
import { Router } from 'express';

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

export default router;
