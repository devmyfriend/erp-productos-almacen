import { Router } from 'express';
import * as schemas from '../../schemas/familias/index.js'
import { validateSchema } from '../../middlewares/express-validator/index.js';
import { validateFamilyIdExist, validateFamilyActive, validateFamilyByNameExist } from '../../middlewares/familia/familia.middleware.js'
import { methods } from '../../controllers/familia/familia.controller.js';


const router = Router();

/* TRAE LISTA DE FAMILIAS PAGINADO ACTIVO*/
router.get(
    '/ListPageFamilyActive',
    methods.getPagingActiveList
);

/* TRAE LISTA DE FAMILIAS PAGINADO INACTIVO*/
router.get(
    '/ListPageFamilyInctive',
    methods.getPagingInactiveList
);

/* TRAE LISTA DE FAMILIAS PAGINADO DE TODAS LAS FAMILIAS*/
router.get(
    '/ListPageFamilyAll',
    methods.getPagingListAll
);

/* TRAE LISTA DE FAMILIAS ACTIVO*/
router.get(
    '/ListFamilyActive',
    methods.getActiveList
);

/* TRAE LISTA DE FAMILIAS INACTIVO*/
router.get(
    '/ListFamilyInactive',
    methods.getInactiveList
);

/* TRAE LISTA DE FAMILIAS*/
router.get(
    '/ListFamilyAll',
    methods.getListAll
);

/* TRAE LISTA DE FAMILIAS COINSIDENCIA DE NOMBRE ACTIVO*/
router.get(
    '/buscar/:Nombre',
    methods.getByName
);

/* CREA FAMILIA*/
router.post(
    '/createFamily',
    schemas.createFamilySchema,
    validateSchema,
    validateFamilyByNameExist,
    methods.create,
)

/* EDITA FAMILIA*/
router.put(
    '/',
    schemas.updateFamilySchema,
    validateSchema,
    validateFamilyIdExist,
    validateFamilyActive,
    validateFamilyByNameExist,
    methods.update,
)

export default router;