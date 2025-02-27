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
  instructorcollections = req.app.get("instructorcollections");
  instructorreplicatecollections = req.app.get("instructorreplicatecollections")
  parentcollections = req.app.get("parentcollections");
  admincollections = req.app.get("admincollections");
  next();
});

// // User registration route
// userApp.post(
//   "/user",
//   expressAsyncHandler(async (req, res) => {
//     const newUser = req.body;
//     const dbUser = await instructorcollections.findOne({ username: newUser.username });

//     if (dbUser !== null) {
//       res.send({ message: "username already exists" });
//     } else {
//       let hashedPassword = await bcryptjs.hash(newUser.password, 5);
//       newUser.password = hashedPassword;
//       await instructorcollections.insertOne(newUser);
//       console.log(newUser)
//       let obj={}
//       obj.username=newUser.username
//       obj.students=[],
//       obj.password=newUser.password;
//       obj.chats=[]
//       await instructorreplicatecollections.insertOne(obj);
//       console.log(obj)
//       res.send({ message: "User Created" });
//     }
//   })
// );

// User login route
userApp.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    let userCredential = req.body;
    let dbUser = await admincollections.findOne({
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
    let user=req.params.username;

    let dbUser=await parentcollections.updateOne({username:user},{$set:{status:true}});
    if(dbUser===null){
        res.send({message:"User Not Found"});
        }else{
            res.send({message:"User Found",user:dbUser});
            }
}));

module.exports = userApp;

