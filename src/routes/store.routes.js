import { methods  } from '../controllers/store.controller.js';

import { Router } from "express";

const router = Router();


/**
 * @swagger
 * tags:
 *   - name: Almacén
 *     description: Operaciones relacionadas con los Almacenes
 *
 *
 */

/**
 * @swagger
 * /api/v1/almacen:
 *   get:
 *     summary: Obtener una lista general de almacenes
 *     tags: [Almacén]
 *     responses:
 *       200:
 *         description: Lista de los almacenes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   AlmacenId:
 *                     type: number
 *                     example: 1155
 *                   NombreAlmacen:
 *                     type: string
 *                     example: "GYM 1"
 */
router.get('/', methods.findAll);

export default router;
