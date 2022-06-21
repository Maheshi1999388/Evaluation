const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const medicalSchema=new Schema({
    
    firstname:{
        type:String,
        required: true
    },

    lastname:{
        type:String,
        required: true
    },
    OPD_no:{
        type:String,
        required: true
    },
    reciep_no:{
        type:String,
        required: true
    },
    
    workingplace:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    reqestedDate:{
        type :Date,
        required: true
    },
    EffectedDate:{
        type:Date,
        required: true
    },
    doctorDescription:{
        type:String,
        required: true
    },
    other_recomendation:{
        type:String,
        required: false
    },
    recemendedDateDuration:{
        type:Number,
        required: true
    },
    DoctorName:{
        type:String,
        required: true
    },
    Designation:{
        type:String,
        required: true
    },
    isseedDate:{
        type:Date,
        required: true
    }
    
})

const Medical=mongoose.model("Medical",medicalSchema);

module.exports=Medical;