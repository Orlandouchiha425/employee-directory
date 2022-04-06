const {Schema,model}=require("./connection")

    const employeeSchema = Schema(
        {
          img: String,
          name: String,
          title: String,
         
          
        },
        {
          timestamps: true,
        }
      );

const Employee=model('Employee',employeeSchema)
module.exports=Employee;
