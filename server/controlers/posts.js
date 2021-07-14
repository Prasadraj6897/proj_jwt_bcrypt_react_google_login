import PostMessage from "../models/PostMessage.js"
import mongoose from "mongoose"


export const getPosts = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});
        
        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res)=>{
    // console.log("Create Posts  req.body",  req.body)
    const body = req.body;
    const newpost = new PostMessage({...body, creator: req.userId, createdAt: new Date().toISOString()})
    try{
        await newpost.save();
        res.status(201).json(newpost)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

export const updatePosts = async (req, res)=>{
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        res.status(404).send("No posts in the id")
    }
    else{
        const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id},{new:true})
        res.json(updatePost)
    }
}

export const deletePosts = async (req, res)=>{
    const {id} = req.params;
    // console.log(id)
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).send("No posts in the id")
    }
    else{
        await PostMessage.findByIdAndDelete(id)
        res.json("Post Removed Successfully")
    }
}

export const likePosts = async (req, res)=>{
    const {id} = req.params;
    
    if(!req.userId)
    {
        return res.json({
            message: "Unauthenticated"
        })
    }
    // console.log(id)
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).send("No posts in the id")
    }
    
    const post = await PostMessage.findById(id)

    const index = post.likes.findIndex((id)=> id === String(req.userId))

    if(index === -1 ){
        post.likes.push(req.userId)
    }
    else{
        post.likes = post.likes.filter((id) => id != req.userId)
    }
    
    const likePost = await PostMessage.findByIdAndUpdate(id, post, {new:true})
    
    res.json(likePost)
   
}

export const commentPost = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const post = await PostMessage.findById(id);

    post.comments.push(value);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
};
