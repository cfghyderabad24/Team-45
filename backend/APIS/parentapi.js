// user-api.js
const exp = require("express");
const userApp = exp.Router();
const bcryptjs = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
require("dotenv").config();

// Middleware to get collections
userApp.use((req, res, next) => {
  parentcollections = req.app.get("parentcollections");
  studentcollections = req.app.get("studentcollections");
  instructorreplicatecollections=req.app.get("instructorreplicatecollections");
  next();
});

// User registration route
userApp.post(
  "/user",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
    const dbUser = await studentcollections.findOne({ username: newUser.username });

    if (dbUser !== null) {
      res.send({ message: "username already exists" });
    } else {
      let hashedPassword = await bcryptjs.hash(newUser.password, 5);
      newUser.password = hashedPassword;

      await studentcollections.insertOne(newUser);
      obj={};
      obj.username = newUser.username;
      obj.attendance = 0;
      obj.password=newUser.password;
      obj.total_sessions=50;
      obj.description;
      obj.chats=[];
      obj.status=false;
     let k= await parentcollections.insertOne(obj);

      await instructorreplicatecollections.updateOne({username:"charan"},{$push:{students:newUser.username}});
      res.send({ message: "User Created" });
    }
  })   
);

// User login route
userApp.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    let userCredential = req.body;
    let dbUser = await studentcollections.findOne({
      username: userCredential.username,
    });

    if (dbUser === null) {
      res.send({ message: "Invalid Username" });
    } else {
      const status = await bcryptjs.compare(
        userCredential.password,
        dbUser.password
      );
      if (status === false) {
        res.send({ message: "Invalid Password" });
      } else {
        let signedToken = jwt.sign(
          { username: dbUser.username },
          process.env.SECRET_KEY,
          { expiresIn: "1d" }
        );
        res.send({
          message: "Login Success",
          token: signedToken,
          user: dbUser,
        });
      }
    }
  })
);

userApp.get('/getinfo/:username',expressAsyncHandler(async(req,res)=>{
    let userna=req.params.username;
    let dbUser=await parentcollections.findOne({username:userna});
    if(dbUser===null){
        res.send({message:"User Not Found"});
        }else{
            res.send({message:"User Found",user:dbUser});
            }

}))

userApp.get('/getinfo',expressAsyncHandler(async(req,res)=>{
    let dbUser=await parentcollections.findOne();
    if(dbUser===null){
        res.send({message:"User Not Found"});
        }else{
            res.send({message:"User Found",user:dbUser});
            }

}));






//export user App
module.exports = userApp;
