const mongoose =require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
   firstname:{
      type:String,
      required:true,
      
   },
   lastname:{
      type:String,
      required:true,
      
   },
   email:{
      type:String,
      required:true,
      unique:[true, "Email is already present"],
      validate(value){
         if(!validator.isEmail(value)){
            throw new Error("Invalid Email")
         }
      }
   }, 
   gender:{
      type:String,
      required:true,
      
   },
   phone:{
      type:Number,
      required:true,
      unique:true
   },
   age:{
      type:Number,
      required:true
   } ,
   password:{
      type:String,
      required:true,
      
   }, 
   cpassword:{
      type:String,
      required:true,
      
   }
   
})

const Student = new mongoose.model('Student' ,studentSchema);

module.exports =Student;