const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema({
    name:{type:String},
    actors:[{type:String}],
    languages:[{type:String}],
    directors:[{type:String}],
    poster_url:{type:String}
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.Model('movie',movieSchema);