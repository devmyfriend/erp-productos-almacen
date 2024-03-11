import { Router } from 'express';
import { methods } from '../controllers/ref.combo.box.controller.js';
import { validateSchema } from '../middlewares/express-validator/index.js';
import * as schemas from '../schemas/ref.combo.box.schema.js';

const router = Router();

/**
 * @swagger
 * /api/v1/comboBox:
 *   get:
 *     summary: Obtener todos los ComboBox
 *     tags: [ComboBox]
 *     responses:
 *       200:
 *         description: La lista de ComboBox.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Catalogo:
 *                     type: string
 *                     description: El catálogo del ComboBox.
 *                     example: "Catálogo de ejemplo"
 *                   Nivel:
 *                     type: integer
 *                     description: El nivel del ComboBox.
 *                     example: 1
 *                   ClaveElemento:
 *                     type: string
 *                     description: La clave del elemento del ComboBox.
 *                     example: "Clave de ejemplo"
 *                   Valor:
 *                     type: string
 *                     description: El valor del ComboBox.
 *                     example: "Valor de ejemplo"
 */

router.get('/', methods.findAll);

/**
 * @swagger
 * /api/v1/comboBox:
 *   post:
 *     summary: Crear un nuevo ComboBox
 *     tags: [ComboBox]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Catalogo:
 *                 type: string
 *                 description: El catálogo del ComboBox.
 *                 example: "Catálogo de ejemplo"
 *               Nivel:
 *                 type: integer
 *                 description: El nivel del ComboBox.
 *                 example: 1
 *               ClaveElemento:
 *                 type: string
 *                 description: La clave del elemento del ComboBox.
 *                 example: "Clave de ejemplo"
 *               Valor:
 *                 type: string
 *                 description: El valor del ComboBox.
 *                 example: "Valor de ejemplo"
 *               CreadoPor:
 *                 type: integer
 *                 description: El ID del usuario que crea el ComboBox.
 *                 example: 1
 *     responses:
 *       201:
 *         description: ComboBox creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Se ha creado el ComboBox"
 *                 response:
 *                   type: object
 *                   description: Información adicional sobre el ComboBox creado.
 *                   properties:
 *                     Catalogo:
 *                       type: string
 *                       description: El catálogo del ComboBox recién creado.
 *                       example: "Catálogo de ejemplo"
 *       400:
 *         description: El registro ya existe.
 *       500:
 *         description: Error al crear el registro.
 */
router.post('/', schemas.createComboBoxSchema, validateSchema, methods.create);

/**
 * @swagger
 * /api/v1/refComboBox/{IdComboBox}:
 *   put:
 *     summary: Actualizar un registro de refComboBox existente
 *     tags: [ComboBox]
 *     parameters:
 *       - in: path
 *         name: IdComboBox
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de refComboBox a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Catalogo:
 *                 type: string
 *                 description: Nombre del catálogo.
 *                 example: "Test PUT PUT"
 *               Nivel:
 *                 type: integer
 *                 description: Nivel del elemento.
 *                 example: 1
 *               ClaveElemento:
 *                 type: string
 *                 description: Clave del elemento.
 *                 example: "AMLO"
 *               Valor:
 *                 type: string
 *                 description: Valor del elemento.
 *                 example: "AMLO"
 *               ActualizadoPor:
 *                 type: integer
 *                 description: El ID del usuario que actualiza el registro.
 *                 example: 2
 *     responses:
 *       200:
 *         description: Registro de refComboBox actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                   example: "Se ha editado el registro"
 *       400:
 *         description: No se encontró el registro.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "No se encontró el registro"
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Usuario no encontrado"
 *       500:
 *         description: Error al editar el registro.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "Error al editar el registro"
 */
router.put('/:IdComboBox', schemas.updateComboBoxSchema, validateSchema, methods.update);

/**
 * @swagger
 * /api/v1/comboBox:
 *   delete:
 *     summary: Deshabilitar un ComboBox
 *     tags: [ComboBox]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               IdComboBox:
 *                 type: integer
 *                 description: El ID del ComboBox a deshabilitar.
 *                 example: 1
 *               BorradoPor:
 *                type: integer
 *                description: El ID del usuario que deshabilita el ComboBox.
 *                example: 1
 *     responses:
 *       200:
 *         description: ComboBox deshabilitado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: "Registro eliminado"
 *       400:
 *         description: No se encontró el registro.
 *       500:
 *         description: Error al eliminar el registro.
 */
router.delete(
	'/',
	schemas.deleteComboBoxSchema,
	validateSchema,
	methods.disable,
);

export default router;
