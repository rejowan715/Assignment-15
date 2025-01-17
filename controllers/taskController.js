
import jwt from 'jsonwebtoken';

export const createGettask = async(req,res)=>{
    return res.json({message:"Hello World"});
}

export const createPosttask = async(req,res)=>{
    return res.json({message:"I am post body"});
}

export const loginToken = async(req,res)=>{
    const user = {id:4};
    const token = jwt.sign({user}, 'my_secreate_key');
    return res.json({ message: token});
}