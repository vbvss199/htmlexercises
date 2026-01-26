import express from "express";
import { PORT,mongoDBURL,mongoDBURL2} from "./configure.js";
import mongoose from "mongoose";
const app=express();
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

// lets do a get request 
// the first param is root url or home url
// “When someone makes a GET request to the root URL /, run this function.”
// the call back function two params which are the request and response 
// here we r sending the data indded the / is sending the data inddeed 
// if we go to the browser and hit the url it is alone a request we dont need to send extra details we still ask THE ACTION IS THE REQUEST 
// what we r asking ? (/) the root url 
// what we r doing GET (fetch)
// who we r the browser info from where (IP) and extra info params 
// even silence is the information .showing up itself is a request
// when we put GET / it receives and read the request the ip ,cookies or any extra params who asked (browser) from where (ip) and what they asked (get or ???/)
// get -> what client is asking and res -> what server is responding  or replying 

// the result is sent to the browser page we r asking the server via get and the server replied via message welcome to mern stack 
// create a account on the mongodb platform and import the mongoose library inorder to work with the mongodb `

// use json parse in order to parse the response in the postman,this is a middleware to parse the json 
app.use(express.json());

// cors as an middleware 
// option1 :allow all origins with deafault od cors(*)
app.use(cors());

// option 2 allowing the custom origins
// specify the origin u want to allow  
// comment the below line to allow any network to use the backend api or server

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))


app.get('/',(req,res)=>{
    console.log(req.body);
    return res.status(200).send("welcome to mern stack")
});

mongoose.connect(mongoDBURL2).then(()=>{
    console.log("sucessfully connected to the mangodb");
    app.listen(PORT,()=>{
    console.log(`the app is listening on the port ${PORT}`)
});
}).catch((error)=>{
    console.log(error)
})


// implemented in t`he postman as well

// this is all the books route if we have different model then we need to create a different route so cut this code and paste it in the routes folder

// lets use the route booksroute we created
// so when we put or post anything app will route to the books from now 
app.use('/books',booksRoute);


// cors policy in NODE.js 