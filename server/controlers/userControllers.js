import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from "../models/userModels.js"

export const signin = async (req, res) => {
    const {email, password} = req.body
    try{
        const existingUser = await User.findOne({email})
        if(!existingUser){
            res.status(404).json({message : "User doesn't Exist"})
        }
        
        const isPasswordcorrect = await bcrypt.compare(password, existingUser.password)
        
        if(!isPasswordcorrect){
            res.status(400).json({message : "Password doesn't Match"})
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"})
        // test is the secretkey we keep secret but it is sample
        res.status(200).json({result:existingUser, token})
    }
    catch(error){
        res.status(500).json({message : "Something went wrong"})
    }
}

export const signup = async (req, res) => {
    const {email, password, firstname, secondname, confirmpassword} = req.body

    try{
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(400).json({message : "User already Exist"})
        }
        if(password != confirmpassword)
        {
            res.status(400).json({message : "Passwords Doesn't match"})
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name:`${firstname} ${secondname}`})

        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"})
        
        res.status(200).json({result, token})
    }
    catch(error){
        res.status(500).json({message : "Something went wrong"})
    }
}