import { getProperty, getPropertyById, registerProperty } from "../controllers/property.controller";
import { deserializeUser } from "../middlewares/desserialize-user.miidlewares";
import { validate } from "../middlewares/validate.middlewares";
import { createPropertySchema } from "../schemas/property.schema";
const router = require('express').Router()

router.post('/' , validate(createPropertySchema), registerProperty)

router.get('/', getProperty)

router.get('/:id', getPropertyById)

export default router