import express from "express";
import cors from "cors";
import helmet from 'helmet';
require("dotenv").config();
const app = express();
app.use(express.urlencoded({extended: true, limit : '10mb'}));
app.use(helmet());
app.use(cors());
app.get("/",(req,res)=> res.json({message: "setup success !!"}));
const PORT= process.env.PORT || 4000;

app.listen(PORT,()=>
console.log("Server is up and running"));
    // ConnectDB().then(()=> 
//  .catch(()=>console.log("DB connection failed"))
//  );