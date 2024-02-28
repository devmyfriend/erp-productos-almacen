import { Router } from 'express';
import * as schemas from '../../schemas/familias/index.js'
import { validateSchema } from '../../middlewares/express-validator/index.js';
import { validateFamilyIdExist, validateFamilyActive, validateFamilyByNameExist, validateFamilyByName } from '../../middlewares/familia/familia.middleware.js'
import { methods } from '../../controllers/familia/familia.controller.js';


const router = Router();

/* TRAE LISTA DE FAMILIAS PAGINADO ACTIVO*/
router.get(
    '/ListPageFamilyActive',
    methods.getListFamilyActivePage
);

/* TRAE LISTA DE FAMILIAS PAGINADO INACTIVO*/
router.get(
    '/ListPageFamilyInctive',
    methods.getListFamilyInctivePage
);

/* TRAE LISTA DE FAMILIAS PAGINADO DE TODAS LAS FAMILIAS*/
router.get(
    '/ListPageFamilyAll',
    methods.getListFamilyPageAll
);

/* TRAE LISTA DE FAMILIAS ACTIVO*/
router.get(
    '/ListFamilyActive',
    methods.getListFamilyActive
);

/* TRAE LISTA DE FAMILIAS INACTIVO*/
router.get(
    '/ListFamilyInactive',
    methods.getListFamilyInactive
);

/* TRAE LISTA DE FAMILIAS*/
router.get(
    '/ListFamilyAll',
    methods.getListFamilyAll
);

/* TRAE LISTA DE FAMILIAS COINSIDENCIA DE NOMBRE ACTIVO*/
router.get(
    '/ListFamilyByName/:Nombre',
    methods.getFamilyByName
);

/* CREA FAMILIA*/
router.post(
    '/createFamily',
    schemas.createFamilySchema,
    validateSchema,
    validateFamilyByNameExist,
    methods.createFamily,
)

/* EDITA FAMILIA*/
router.post(
    '/updateFamily',
    schemas.updateFamilySchema,
    validateSchema,
    validateFamilyIdExist,
    validateFamilyActive,
    validateFamilyByNameExist,
    methods.updateFamily,
)

export default router;