import express from "express"

//use curly braces it shows error
import {getPosts, createPosts, updatePosts, deletePosts, likePosts, getPostsBySearch, getPost, commentPost} from "../controlers/posts.js"

import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

router.get('/search', getPostsBySearch);

router.get('/:id', getPost);
router.get('/', getPosts)
router.post('/', authMiddleware, createPosts)

router.patch('/:id', authMiddleware, updatePosts)
router.delete('/:id', authMiddleware, deletePosts)

router.patch("/:id/likepost", authMiddleware, likePosts)

router.post('/:id/commentPost', commentPost);


export default router;