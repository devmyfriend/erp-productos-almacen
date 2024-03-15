import { body} from 'express-validator';

export const createPoliticasMembresiaSchema = [
    body('Descripcion')
    .notEmpty()
    .isString()
    .withMessage('El campo Descripcion es obligatorio y debe ser una cadena de texto.'),
    body('TipoPeriodo')
    .notEmpty()
    .isLength({ min: 1, max: 10 })
    .withMessage('El campo TipoPeriodo no puede tener mas de 10 caracteres.')
    .isString()
    .withMessage('El campo TipoPeriodo es obligatorio y debe ser una cadena de texto.'),
    body('ValorPeriodo')
    .notEmpty()
    .isInt()
    .withMessage('El campo ValorPeriodo es obligatorio y debe ser un número entero.'),
    body('EsGrupal')
    .notEmpty()
    .isBoolean()
    .withMessage('El campo EsGrupal es obligatorio y debe ser un booleano.'),
    body('MinimoGrupal')
    .optional()
    .isInt()
    .withMessage('El campo MinimoGrupal debe ser un número entero.'),
    body('MaximoGrupal')
    .optional()
    .isInt()
    .withMessage('El campo MaximoGrupal debe ser un número entero.'),
    body('EsPremium')
    .notEmpty()
    .isBoolean()
    .withMessage('El campo EsPremium es obligatorio y debe ser un booleano.'),
    body('CreadoPor')
    .notEmpty()
    .isInt()
    .withMessage('El campo CreadoPor es obligatorio y debe ser un número entero.'),
];

export const updatePoliticasMembresiaSchema = [
    body('descripcion')
    .optional()
    .isString()
    .withMessage('El campo Descripcion debe ser una cadena de texto.'),
    body('TipoPeriodo')
    .optional()
    .isLength({ min: 1, max: 10 })
    .withMessage('El campo TipoPeriodo no puede tener mas de 10 caracteres.')
    .isString()
    .withMessage('El campo TipoPeriodo es obligatorio y debe ser una cadena de texto.'),
    body('ValorPeriodo')
    .optional()
    .isInt()
    .withMessage('El campo ValorPeriodo debe ser un número entero.'),
    body('EsGrupal')
    .optional()
    .isBoolean()
    .withMessage('El campo EsGrupal debe ser un booleano.'),
    body('MinimoGrupal')
    .optional()
    .isInt()
    .withMessage('El campo MinimoGrupal debe ser un número entero.'),
    body('MaximoGrupal')
    .optional()
    .isInt()
    .withMessage('El campo MaximoGrupal debe ser un número entero.'),
    body('EsPremium')
    .optional()
    .isBoolean()
    .withMessage('El campo EsPremium debe ser un booleano.'),
    body('ActualizadoPor')
    .notEmpty()
    .isInt()
    .withMessage('El campo ActualizadoPor es obligatorio y debe ser un número entero.'),
];

export const deletePoliticasMembreciaSchema = [
    body('PoliticasMembreciasId')
    .notEmpty()
    .isInt()
    .withMessage('El campo PoliticasMembreciasId es obligatorio y debe ser un número entero.'),
    body('BorradoPor')
    .notEmpty()
    .isInt()
    .withMessage('El campo BorradoPor es obligatorio y debe ser un número entero.'),
];