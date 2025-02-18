import { getHeadquarters, registerHeadquarters } from "../controllers/headquarters.controller"
import { deserializeUser } from "../middlewares/desserialize-user.miidlewares";
import { validate } from "../middlewares/validate.middlewares";
import { createHeadquartersSchema } from "../schemas/headquarters.schema";

const router = require('express').Router()

router.post('/', validate(createHeadquartersSchema), registerHeadquarters);
router.get('/', getHeadquarters)

export default router