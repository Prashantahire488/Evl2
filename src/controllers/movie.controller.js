const express=require('express');
const movieModel=require('../models/movie.model');
const router=express.Router();


router.post('/',async(req,res)=>{
    try
    {
        const movie=await movieModel.create(req.body);
        res.status(201).json({message:"Movie Save",movie:movie});
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})

router.get('/',async(req,res)=>{
    try
    {
        const movies=await movieModel.find({}).lean().exec();
        res.status(201).json(movies);
    
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})