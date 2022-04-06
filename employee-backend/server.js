const express=require("express")
const app=express();
const cors=require('cors')
const PORT=process.env.PORT || 3000
const employeeController=require('./controllers/employee')
app.use(cors());
app.use(express.json());

app.use('/employees',employeeController)




app.listen(PORT,()=>{
    console.log(`You are listening to port: ${PORT}`)
})