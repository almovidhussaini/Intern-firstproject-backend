import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

import UserRoutes from './var/task/routes/userRoutes.js';
import VerificationRoutes from './var/task/routes/verificationRoutes.js';
import ItemsRoutes from './var/task/routes/itemsRoutes.js'

var jsonParser = bodyParser.json()
dotenv.config()
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.json());
app.use(bodyParser.json())
app.use(cors())

app.use('/api',UserRoutes,VerificationRoutes,ItemsRoutes )

let PORT = process.env.PORT
app.listen(PORT||5000, ()=>{
    try{
        mongoose.set("strictQuery", true);
        mongoose.connect(
            process.env.MONGODB_URI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then((message)=>{
            console.log('db connected');
        });
        console.log('server is  started')
    }
    catch(err){
        console.log(err )

    }}
)