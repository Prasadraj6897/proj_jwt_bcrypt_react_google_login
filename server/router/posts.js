import express from "express"

//use curly braces it shows error
import {getPosts, createPosts, updatePosts, deletePosts, likePosts, getPostsBySearch} from "../controlers/posts.js"

import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

router.get('/', getPosts)
router.post('/', authMiddleware, createPosts)

router.patch('/:id', authMiddleware, updatePosts)
router.delete('/:id', authMiddleware, deletePosts)

router.patch("/:id/likepost", authMiddleware, likePosts)

router.get('/search', getPostsBySearch);

export default router;