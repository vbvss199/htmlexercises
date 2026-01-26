import express from "express";
import { PORT,mongoDBURL,mongoDBURL2} from "./configure.js";
import mongoose from "mongoose";
const app=express();

import {Book} from './models/booksModel.js';

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

// use json parse in order to parse the response in the postman
app.use(express.json());


app.get('/',(req,res)=>{
    console.log(req.body);
    return res.status(200).send("welcome to mern stack")
});


// route for creating a new book

mongoose.connect(mongoDBURL2).then(()=>{
    console.log("sucessfully connected to the mangodb");
    app.listen(PORT,()=>{
    console.log(`the app is listening on the port ${PORT}`)
});
}).catch((error)=>{
    console.log(error)
})

app.post('/books',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishedYear){
            return res.status(400).send({
                message:'send all required fields:title, author,publishedYear'
            });
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishedYear:req.body.publishedYear,
        };
        // now lets create the book by calling book .create
        const book=await Book.create(newBook);

        return res.status(200).send(book);

    }catch(error){
        console.log(error);
        res.status(500).send({message:error.message})
    }
});


// lets create the database models and books inside it 