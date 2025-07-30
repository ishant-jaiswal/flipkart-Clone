import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Connection }  from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js'
import bodyParser from 'body-parser';
const app=express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router);

//const port=process.env.PORT || 8000;
const port=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

//const URL=process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ecommerce-web.anzjmbm.mongodb.net/Project0?retryWrites=true&w=majority&appName=ecommerce-web`;



Connection(USERNAME,PASSWORD);

/*if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}*/

app.listen(port,()=>console.log(`server is running successfully on port ${port} hello`));

DefaultData();