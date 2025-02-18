import { photosProperty } from "../controllers/photos.controller"
import { deserializeUser } from "../middlewares/desserialize-user.miidlewares"
const router = require('express').Router()


router.post('/photosProperty/', photosProperty)

export default router