import { Router } from "express";
import { methods } from "../controllers/unidad.controller";


const router = Router()

router.post('/', methods.create)
router.get( '/unitid', methods.findById )
router.get( '/unitname', methods.findByName )
router.get( '/', methods.findAll )
router.put( '/', methods.update )
router.delete( '/', methods.delete )

export default router
