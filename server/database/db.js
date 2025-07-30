import mongoose from "mongoose";

export const Connection=async (username,password)=>{
   const URL= `mongodb+srv://${username}:${password}@ecommerce-web.anzjmbm.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Database connected Success");
    }catch(error){
        console.log("Error was connection to the database",error.message);
    }
}