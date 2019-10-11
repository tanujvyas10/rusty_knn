var express = require('express');
var router = express.Router();


var passport=require("passport")
var bcrypt = require('bcryptjs');
//var upload=require("../handlers/multer")
var LocalStrategy =require("passport-local")
//var fileupload=require("express-fileupload")
// router.use(fileupload({
//   useTemFiles:true
// }))
const upload=require("../handlers/multer")

var cloudinary=require("cloudinary").v2

cloudinary.config({
  cloud_name:'aflatoon1298',
  api_key:'966189315781197',
  api_secret:'pcziUdtcd0MIrKJVt6ofD_Nfjao'
})

router.get("/",function(req,res,next){
  //console.log("might be a fali")
  res.render("index")
})


 
// router.post("/posting",upload.single('avatar'),(req,res)=>{
//   //const files=req.body.files
//   console.log("reached")
//   //res.send({ok:true})
//   res.send(req.body)
// })

router.post('/posting', upload.single('photo'), (req, res,next) => {
  //   const result = await cloudinary.v2.uploader.upload(req.file.path)
  //   const blog = new Blog()
  //   blog.title = req.body.title
  //   blog.imageUrl = result.secure_url
  //   await blog.save()
  //   res.send({
  //     message: 'Blog is Created'
  //   })
  // })
  
  // app.get('/about', (req, res) => {
  //   res.render('about')
  // console.log("PHOTO",req.files.photo)
  
  cloudinary.uploader.upload(req.files.photo.tempFilePath,function(err,result){
  console.log("err",err)
  console.log("rsult",result)
  res.send("reqbodu",req.body)
 })
  // res.send({
  //   sucess:true,
  //   message:"File upload"
  // })
  

//  res.send(req.files)
   })

module.exports = router;
