const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const reviewSchema=new Schema({
    
    firstname:{
        type:String,
        required: true
    },

    lastname:{
        type:String,
        required: true
    },
    
    postededDate:{
        type :Date,
        required: true
    },
    rating:{
        type:Number,
        required: true
    },
    comment:{
        type:String,
        required: true
    },
    react:{
        type:String,
        required: false
    }
    
})

const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;