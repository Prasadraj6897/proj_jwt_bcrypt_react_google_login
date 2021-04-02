import PostMessage from "../models/PostMessage.js"


export const getPosts = async (req, res)=>{
    // console.log("sgcvkajhkjkas jashckash")
    try{
        const postMsg = await PostMessage.find()
        console.log(postMsg)
        res.status(200).json(postMsg)
    }
    catch(error){
       
        res.status(400).json({message:error.message})
    }
}

export const createPosts = async (req, res)=>{
    // console.log("Create Posts  req.body",  req.body)
    const body = req.body;
    const newpost = new PostMessage(body)
    try{
        await newpost.save();
        res.status(201).json(newpost)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}