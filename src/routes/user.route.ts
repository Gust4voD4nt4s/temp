import { loginUser, registerUser } from "../controllers/user.controller"
import { deserializeUser } from "../middlewares/desserialize-user.miidlewares"
import { validate } from "../middlewares/validate.middlewares"
import { createUserSchema, loginUserSchema } from "../schemas/user.schema"

const router = require('express').Router()

router.post('/register', validate(createUserSchema), registerUser)

router.post('/login', validate(loginUserSchema), loginUser)

export default router