const router= require("express").Router();
let Doctor=require("../modles/doctor.js");
router.route("/add").post((req,res)=>{

    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const title=req.body.title;
    const workingHospital=req.body.workingHospital;
    const address=req.body.address;
    const university=req.body.university;
    const degree=req.body.degree;
    const email=req.body.email;
    const password=req.body.password;
    const category=req.body.category;
    const registrationNumber=req.body.registrationNumber;
    const chargePerPatient=Number(req.body.chargePerPatient);
    const mobileno=Number(req.body.mobileno);
    

    const newdoctor=new Doctor({

        firstname,
        lastname,
        title,
        workingHospital,
        address,
        university,
        degree,
        email,
        password,
        category,
        registrationNumber,
        chargePerPatient,
        mobileno
    })

//data add 
        newdoctor.save().then(()=>{
        res.json("Doctor details Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read data
router.route("/").get((req,res)=>{

    Doctor.find().then((doctor)=>{
        res.json(doctor)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
    const{firstname,lastname,title,workingHospital,address,university,degree,email,password,category,registrationNumber,chargePerPatient,mobileno}=req.body;

    const updateDoctor={
        firstname,
        lastname,
        title,
        workingHospital,
        address,
        university,
        degree,
        email,
        password,
        category,
        registrationNumber,
        chargePerPatient,
        mobileno
    }

    const update=await Doctor.findByIdAndUpdate(userId,updateDoctor).then(()=>{
        res.status(200).send({status:"Doctor details update"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})
//delete

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Doctor.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"Doctor details deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error with delete user",error:err.message});
    })
})

//get one user data

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user=await Doctor.findById(userId) 
    .then((patient)=>{
        res.status(200).send({status:"User fetched",patient})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user",error:err.message})
    })
})


router.route("/getcategory/:id").get(async(req,res)=>{
    let doc_category=req.params.id;
    Doctor.findById({_id: doc_category }).then((doctor)=>{
        res.json(doctor)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/doccategory").get(async(req,res)=>{
    //let doc_category=req.params.category;
    Doctor.find({category: "cardiologist" }).then((doctor)=>{
        res.json(doctor)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports=router;