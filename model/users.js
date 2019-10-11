var mongoose=require("mongoose")
//var passportLocalMongoose=require("passport-local-mongoose")
var bcrypt = require('bcryptjs');

var UserSchema=new mongoose.Schema({
    // username:String,
    // email:String,
    // password:String
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
})

UserSchema.methods.encryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validUserPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


//UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",UserSchema)