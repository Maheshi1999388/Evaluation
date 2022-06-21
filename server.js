const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
  
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//create connection with mongodb 
const connect = mongoose.connect;
connect(URL);

//open connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!")
});

const patientRouter=require("./routes/physicalAppoinment.js");
app.use("/patients",patientRouter);

const doctorRouter=require("./routes/doctor.js");
app.use("/doctors",doctorRouter);
const MedicalReportRouter=require("./routes/MedicalReport.js");
app.use("/MedicalReports",MedicalReportRouter);
const ReviewtRouter=require("./routes/MedicalReport.js");
app.use("/ReviewtRouters",ReviewtRouter);

//listen to PORT
app.listen(4004, () =>
  console.log('Example app listening on port no: 4004!'),
);