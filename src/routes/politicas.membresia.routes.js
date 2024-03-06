import { Router} from 'express';
import { methods } from '../controllers/politicas.membresia.controller.js';
import { validateSchema } from "../middlewares/express-validator/index.js";
import * as schemas from "../schemas/politicas.membresias.schema.js";

const router = Router();

/**
 * @swagger
 * /api/v1/politicasMembresia:
 *   get:
 *     summary: Obtener todas las políticas de membresía
 *     tags: [PoliticasMembresia]
 *     responses:
 *       200:
 *         description: Lista de políticas de membresía.
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
 *                       PoliticasMembresiaId:
 *                         type: integer
 *                         description: ID de la política de membresía.
 *                         example: 123123
 *                       Descripcion:
 *                         type: string
 *                         description: Descripción de la política de membresía.
 *                         example: "Descripción de ejemplo"
 *                       TipoPeriodo:
 *                         type: string
 *                         description: Tipo de periodo de la política de membresía.
 *                         example: "Tipo de periodo de ejemplo"
 *                       ValorPeriodo:
 *                         type: integer
 *                         description: Valor del periodo de la política de membresía.
 *                         example: 1
 *                       EsGrupal:
 *                         type: boolean
 *                         description: Indica si la política de membresía es grupal.
 *                         example: false
 *                       MinimoGrupal:
 *                         type: integer
 *                         description: Mínimo grupal de la política de membresía.
 *                         example: 1
 *                       MaximoGrupal:
 *                         type: integer
 *                         description: Máximo grupal de la política de membresía.
 *                         example: 10
 *                       EsPremiun:
 *                         type: boolean
 *                         description: Indica si la política de membresía es premium.
 *                         example: false
 *       404:
 *         description: No hay datos disponibles.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/', methods.findAll);

/**
 * @swagger
 * /api/v1/politicasMembresia:
 *   post:
 *     summary: Crear una nueva política de membresía
 *     tags: [PoliticasMembresia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PoliticasMembreciasId:
 *                 type: integer
 *                 description: ID de la política de membresía.
 *                 example: 123123
 *               Descripcion:
 *                 type: string
 *                 description: Descripción de la política de membresía.
 *                 example: "Descripción de ejemplo"
 *               TipoPeriodo:
 *                 type: string
 *                 description: Tipo de periodo de la política de membresía.
 *                 example: "Tipo de periodo de ejemplo"
 *               ValorPeriodo:
 *                 type: integer
 *                 description: Valor del periodo de la política de membresía.
 *                 example: 1
 *               EsGrupal:
 *                 type: boolean
 *                 description: Indica si la política de membresía es grupal.
 *                 example: false
 *               MinimoGrupal:
 *                 type: integer
 *                 description: Mínimo grupal de la política de membresía.
 *                 example: 1
 *               MaximoGrupal:
 *                 type: integer
 *                 description: Máximo grupal de la política de membresía.
 *                 example: 10
 *               EsPremium:
 *                 type: boolean
 *                 description: Indica si la política de membresía es premium.
 *                 example: false
 *               CreadoPor:
 *                 type: integer
 *                 description: ID del usuario que crea la política de membresía.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Política de membresía creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha creado la política de membresía"
 *       404:
 *         description: La política de membresía ya existe.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/', 
schemas.createPoliticasMembresiaSchema,
validateSchema,
methods.create);


/**
 * @swagger
 * /api/v1/politicasMembresia/{PoliticasMembresiaId}:
 *   put:
 *     summary: Actualizar una política de membresía existente
 *     tags: [PoliticasMembresia]
 *     parameters:
 *       - in: path
 *         name: PoliticasMembresiaId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la política de membresía
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Descripcion:
 *                 type: string
 *                 description: Descripción de la política de membresía.
 *                 example: "Descripción de ejemplo"
 *               TipoPeriodo:
 *                 type: string
 *                 description: Tipo de periodo de la política de membresía.
 *                 example: "Tipo de periodo de ejemplo"
 *               ValorPeriodo:
 *                 type: integer
 *                 description: Valor del periodo de la política de membresía.
 *                 example: 1
 *               EsGrupal:
 *                 type: boolean
 *                 description: Indica si la política de membresía es grupal.
 *                 example: false
 *               MinimoGrupal:
 *                 type: integer
 *                 description: Mínimo grupal de la política de membresía.
 *                 example: 1
 *               MaximoGrupal:
 *                 type: integer
 *                 description: Máximo grupal de la política de membresía.
 *                 example: 10
 *               EsPremiun:
 *                 type: boolean
 *                 description: Indica si la política de membresía es premium.
 *                 example: false
 *               CreadoPor:
 *                 type: integer
 *                 description: ID del usuario que crea la política de membresía.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Política de membresía actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha actualizado la política de membresía"
 *       404:
 *         description: La política de membresía no existe.
 *       500:
 *         description: Error interno del servidor.
 */

router.put('/',
schemas.updatePoliticasMembresiaSchema,
validateSchema,
methods.update);

/**
 * @swagger
 * /api/v1/politicasMembresia:
 *   delete:
 *     summary: Eliminar una política de membresía
 *     tags: [PoliticasMembresia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PoliticasMembreciasId:
 *                 type: integer
 *                 description: ID de la política de membresía a eliminar.
 *                 example: 123123
 *               BorradoPor:
 *                 type: integer
 *                 description: ID del usuario que elimina la política de membresía.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Política de membresía eliminada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha eliminado la política de membresía"
 *       404: 
 *         description: La política de membresía no existe.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/',
schemas.deletePoliticasMembreciaSchema,
validateSchema,
methods.remove);


export default router;