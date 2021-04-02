import express from "express"

//use curly braces it shows error
import {getPosts, createPosts} from "../controlers/posts.js"

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPosts)

export default router;