const express=require('express');

const router=express.Router();

router.post('/',async(req,res)=>{
    try
    {
        const data=await userModel.create(req.body);
        res.status(200).send(data);
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const users=await userModel.find({}).lean().exec();
        res.status(201).json(users)
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});