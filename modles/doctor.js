const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const doctorSchema=new Schema({
    
    firstname:{
        type:String,
        required: true
    },

    lastname:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    workingHospital:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    university:{
        type:String,
        required: true
    },
    degree:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    registrationNumber:{
        type:String,
        required: true
    },
    chargePerPatient:{
        type:Number,
        required: true
    },
    mobileno:{
        type:Number,
        required: true
    } 
})

const Doctor=mongoose.model("Doctor",doctorSchema);

module.exports=Doctor;