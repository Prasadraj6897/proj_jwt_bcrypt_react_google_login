import express from "express"

//use curly braces it shows error
import {signin, signup} from "../controlers/userControllers.js"
const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)


export default router;