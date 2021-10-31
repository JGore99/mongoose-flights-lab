// DESTINATIONS ROUTES

import { Router } from 'express'
import * as destinationCtrl from "../controllers/destinations.js"
const router = Router()

/* GET users listing. */
router.get("/new", destinationCtrl.new) 

router.post("/", destinationCtrl.create)

export {
  router,
}
