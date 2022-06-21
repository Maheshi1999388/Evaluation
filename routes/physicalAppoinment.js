const router= require("express").Router();
let PhysicalAppintment=require("../modles/PhysicalAppintment.js");
router.route("/add").post((req,res)=>{

    const specialization=req.body.specialization;
    const doctorname=req.body.doctorname;
    const date=Date(req.body.date);
    const charges=Number(req.body.charges);
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const age=Number(req.body.age);
    const mobileno=Number(req.body.mobileno);
    const address=req.body.address;

    const newphysicalAppintment=new PhysicalAppintment({

        specialization,
        doctorname,
        date,
        charges,
        firstname,
        lastname,
        age,
        mobileno,
        address
    })

//data add 
    newphysicalAppintment.save().then(()=>{
        res.json("Patient Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read data
router.route("/").get((req,res)=>{

    PhysicalAppintment.find().then((physicalAppoinments)=>{
        res.json(physicalAppoinments)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
    const{specialization,doctorname,date,charges,firstname,lastname,age,mobileno,address}=req.body;

    const updatephysicalAppoinment={
        specialization,
        doctorname,
        date,
        charges,
        firstname,
        lastname,
        age,
        mobileno,
        address
    }

    const update=await PhysicalAppintment.findByIdAndUpdate(userId,updatephysicalAppoinment).then(()=>{
        res.status(200).send({status:"user update"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})
//delete

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await PhysicalAppintment.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error with delete user",error:err.message});
    })
})

//get one user data

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user=await Patient.findById(userId) 
    .then((patient)=>{
        res.status(200).send({status:"User fetched",patient})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user",error:err.message})
    })
})

router.route("/doctor_appoinment/:id").get((req,res)=>{
    let doctor_appoinment=req.params.id;
    PhysicalAppintment.find({ _id:doctor_appoinment }).then((physicalAppoinments)=>{
        res.json(physicalAppoinments)
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports=router;