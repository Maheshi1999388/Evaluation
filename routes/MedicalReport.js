const router= require("express").Router();
let Medical=require("../modles/MedicalReport");

router.route("/add").post((req,res)=>{

     console.log(req.body);

    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const OPD_no=req.body.OPD_no;
    const reciep_no=req.body.reciep_no;
    const workingplace=req.body.workingplace;
    const address=req.body.address;
    const reqestedDate=req.body.reqestedDate;
    const EffectedDate=req.body.EffectedDate;
    const doctorDescription=req.body.doctorDescription;
    const other_recomendation=req.body.other_recomendation;
    const recemendedDateDuration=Number(req.body.recemendedDateDuration);
    const DoctorName=req.body.DoctorName;
    const Designation=req.body.Designation;
    const isseedDate=req.body.isseedDate;
    
    

    const newmedical=new Medical({

        firstname,
        lastname,
        OPD_no,
        reciep_no,
        workingplace,
        address,
        reqestedDate,
        EffectedDate,
        doctorDescription,
        other_recomendation,
        recemendedDateDuration,
        DoctorName,
        Designation,
        isseedDate
    })

//data add 
newmedical.save().then(()=>{
        res.json("medical certificate details Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read data
router.route("/").get((req,res)=>{

    Medical.find().then((medical)=>{
        res.json(medical)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let medicalId=req.params.id;
    const{firstname,lastname,OPD_no,reciep_no,workingplace,address,reqestedDate,EffectedDate,doctorDescription,other_recomendation,recemendedDateDuration,DoctorName,Designation,isseedDate}=req.body;

    const updateMedical={
        firstname,
        lastname,
        OPD_no,
        reciep_no,
        workingplace,
        address,
        reqestedDate,
        EffectedDate,
        doctorDescription,
        other_recomendation,
        recemendedDateDuration,
        DoctorName,
        Designation,
        isseedDate
    }

    const update=await Medical.findByIdAndUpdate(medicalId,updateMedical).then(()=>{
        res.status(200).send({status:"Medical certificate details update"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})
//delete

router.route("/delete/:id").delete(async(req,res)=>{
    let medicalId = req.params.id;

    await Doctor.findByIdAndDelete(medicalId)
    .then(()=>{
        res.status(200).send({status:"Medical certificate deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error with delete medical certificate",error:err.message});
    })
})

//get one user data

router.route("/get/:id").get(async(req,res)=>{
    let medicalId = req.params.id;
    const medical=await Medical.findById(medicalId) 
    .then((m)=>{
        res.status(200).send({status:"User fetched",m})
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