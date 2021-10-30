// FLIGHTS ROUTES

import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"
import { Flight } from "../models/flights.js"
const router = Router()

/* GET users listing. */
router.get("/", flightsCtrl.index) 

router.get("/new", flightsCtrl.new)

router.get("/:id", flightsCtrl.show)

router.post("/", flightsCtrl.create)

export {
  router
}
