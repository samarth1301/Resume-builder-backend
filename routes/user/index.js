import { Router } from "express";
import { UserModel } from "../../database/user/User";

const router = Router();

router.get("/",async(req,res)=>{
    try {
        const {slug} = req.query;
        const user  = await UserModel.findOne({slug});
        if(user){
            return res.status(200).json({message:"Resume Found",user});
        }
        return res.status(404).json({message:"Resume not Found", user:null})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong",error});
    }
})

router.post("/",async(req,res)=>{
    try {
        const {email,name,linkedInUrl,slug} = req.body;
        let user  = await UserModel.findOne({email});
        if(user){
            return res.status(200).json({message:"Resume Found",user});
        }
        user = await UserModel.findOne({slug});
        if(user){
            return res.status(200).json({message:"Slug already exists, try another slug !!"});
        }
        console.log(req.body);
        user = await UserModel.create({
            email,
            name,
            slug,
            linkedInUrl
        });
        return res.status(200).json({message:"Resume Created Successfully", user})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong",error});
    }
})
router.delete("/",async(req,res)=>{
    try {
        const {slug} = req.query;
        const user  = await UserModel.findOneAndDelete({slug});
        if(user){
            return res.status(200).json({message:"Resume deleted",user});
        }
        return res.status(404).json({message:"Resume not Found", user:null})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong",error});
    }
})

export default router;