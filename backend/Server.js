//create express modules
const exp = require("express");
const app = exp()
const path = require("path")
require('dotenv').config()

//import mongoclient
const mongoClient = require("mongodb").MongoClient;




//body parser middleware
app.use(exp.json());




//connect to database
mongoClient.connect(process.env.DB_URL)
  .then(client => {
    //get db obj
    const JPMC = client.db('JPMC');
    //get collection obj
    const studentcollections = JPMC.collection("studentcollections")
    const instructorcollections=JPMC.collection("instructorcollections");
    const instructorreplicatecollections=JPMC.collection("instructorreplicatecollections");
    const parentcollections=JPMC.collection("parentcollections"); 
    const admincollections=JPMC.collection("admincollections");
      //share collection obj with exp app
      app.set("studentcollections",studentcollections);
      app.set("instructorcollections",instructorcollections);
      app.set("parentcollections",parentcollections);
      app.set("instructorreplicatecollections",instructorreplicatecollections);
      app.set("admincollections",admincollections)
      //confirm connection status
      console.log("DB is connected");
  })
  .catch(err => {
    console.log("Error in connection", err);
  })


//import api routes
const instructorApp = require("./APIS/instructorapi")
const parentApp = require("./APIS/parentapi")
const adminApp = require("./APIS/adminapi")

//if patr starts with user-api,send request to userApi
app.use("/instructor-api",instructorApp)
app.use("/parent-api",parentApp)
app.use("/admin-api",adminApp)





//exp err handler
app.use((err, req, res, next) => {
  res.send({message:err.message});
})
const port=process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port 8000...`))