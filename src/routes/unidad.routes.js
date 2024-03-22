import { Router } from "express";
import { methods } from "../controllers/unidad.controller.js";
import * as schema from '../schemas/unidades/index.js';


const router = Router()

/**
 * @swagger
 * tags:
 *   - name: Unidades de medidas
 *     description: Registro de unidades de medida para los diversos productos.
 */

/**
 * @swagger
 * /api/v1/unidades:
 *  post:
 *      summary: Crea una nueva unidad de medida.
 *      tags: [Unidades de medidas]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                      NombreUnidad:
 *                          type: string
 *                          description: El nombre que se le asignara a la  unidad de medida
 *                          example: Pieza
 *                      CreadoPor:
 *                          type: integer
 *                          description: El id del usuario que crea la unidad de medida
 *                          example: 1
 *      responses:
 *        200:
 *          description: Creación de unidad e medida
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   response:
 *                     type: array
 *                     items:
 *                       type: object
 */

router.post('/', schema.creatUnitSchema, methods.create)

/**
 * @swagger
 * /api/v1/unidades/{unidadid}:
 *   get:
 *      summary: Buscar por UnidadId.
 *      tags: [Unidades de medidas]
 *      parameters:
 *        - in: path
 *          name: unitid
 *          schema:
 *              type: integer
 *          required: true
 *          description: El id de la unidad de medida.
 *      responses:
 *        200:
 *          description: Buscar unidad de medida por medio de UnidadId
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   response:
 *                     type: array
 *                     items:
 *                       type: object
 */

router.get( '/:unitid', schema.findById, methods.findById )

/**
 * @swagger
 * /api/v1/unidades/{unitname}:
 *   get:
 *      summary: Buscar por NombreUnidad.
 *      tags: [Unidades de medidas]
 *      parameters:
 *        - in: path
 *          name: unitname
 *          schema:
 *              type: string
 *          required: true
 *          description: El nombre de la unidad de medida.
 *      responses:
 *        200:
 *          description: Buscar unidad de medida por medio del nombre
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   response:
 *                     type: array
 *                     items:
 *                       type: object
 */

router.get( '/nombreunidad/:unitname',schema.findByUnitName, methods.findByName )

/**
 * @swagger
 * /api/v1/unidades/:
 *   get:
 *      summary: Despliega todas las unidades de medias.
 *      tags: [Unidades de medidas]
 *      responses:
 *        200:
 *          description: Listado de las unidades de medias.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   response:
 *                     type: array
 *                     items:
 *                       type: object
 */

router.get( '/', methods.findAll )

/**
 * @swagger
 * /api/v1/unidades:
 *  put:
 *      summary: Actualiza los datos de la unidad de medida.
 *      tags: [Unidades de medidas]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                      UnidadId:
 *                          type: integer
 *                          description: El id de la unidad de medida
 *                          example: 1
 *                      NombreUnidad:
 *                          type: string
 *                          description: El nombre que se le asignara a la  unidad de medida
 *                          example: Pieza
 *                      ActualizadoPor:
 *                          type: integer
 *                          description: El id del usuario que actualiza la unidad de medida
 *                          example: 1
 *      responses:
 *        200:
 *          description: Actualización de unidad e medida
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   response:
 *                     type: array
 *                     items:
 *                       type: object
 */

router.put( '/', schema.updateUnit, methods.update )

/**
 * @swagger
 * /api/v1/unidades:
 *  put:
 *      summary: Deshabilita la unidad de medida.
 *      tags: [Unidades de medidas]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                      UnidadId:
 *                          type: integer
 *                          description: El id de la unidad de medida
 *                          example: 1
 *                      BorradoPor:
 *                          type: integer
 *                          description: El id del usuario que deshabilita la unidad de medida
 *                          example: 1
 *      responses:
 *        200:
 *          description: Actualización de unidad e medida
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   response:
 *                     type: array
 *                     items:
 *                       type: object
 */

router.delete( '/', schema.disableUnit, methods.disable )

export default router
