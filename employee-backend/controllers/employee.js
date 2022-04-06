const express=require('express');
const { findById } = require('../models/Employees');
const Employee = require('../models/Employees');
const router=express.Router();


//create Employee

router.post('/',(req,res)=>{
    const body=req.body;
    Employee.create(body,(error,createdEmployee)=> {
if(!error){
    res.status(200).json(createdEmployee)
}else{res.status(400).json(error)}
    })
})

router.get('/',(req,res)=>{
    Employee.find({},(error,foundEmployees)=>{
if(!error){
    res.status(200).json(foundEmployees)
}else{res.status(400).json(error)}
    })
  
})

router.delete('/:id',(req,res)=>{
   
    Employee.findByIdAndDelete(req.params.id,(error,deletedEmployee)=>{
        if(error){
            res.send(error)
        }else{
            res.send("my name is orlando")
        }
    })
})

module.exports=router;