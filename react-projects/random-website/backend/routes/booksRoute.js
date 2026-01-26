// import the express router 
import express from 'express';

import {Book} from '../models/booksModel.js';

const router=express.Router();
 

// route for creating a new book
// post
router.post('/',async (req,res)=>{
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


// lets retrieve the books from mongoose that we created ,check the api in the playground!!
// app.get('/books',async (req,res) => {
//     try{
//         const books=await Book.find({
//         });
//         return res.status(200).json(books);
//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({message:error.message})
//     }
// });

// instead of sending the books directly lets send the count here 
router.get('/',async (req,res) => {
    try{
        const books=await Book.find({
        });
        return res.status(200).json({
            count:books.length,
            data:books
        });
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
});


// lets one book by id in the mangoose by a route , copy the above method and edit it 
// same method here but change the route to /books/:id in order to tag the route we use colon


router.get('/:id',async (req,res) => {
    try{
        const {id}=req.params;
        const book=await Book.findById(id);

        return res.status(200).json({
            book 
        });
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
});



// its time for the updation, we need id and request.body to update it 
router.put('/:id', async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishedYear){
            return res.status(400).send({
                message:'send allrequired fields:title,author,publishedYear',
            })
         }
         const {id}=req.params;
         const result =await Book.findByIdAndUpdate(id,req.body);
         if(!result){
           return res.status(404).json({message:"book not found"}) ;
         }
         return res.status(200).send({message:'book updated sucessfully'});


    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
}) 

// final one deleting a book from mongoose 
// for deleting we just need the id 
router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const result= await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(400).json({message:"book not found"})
        }
        return res.status(200).send({message:"book deleted sucessfully"})
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message:error.message});
    }
})

// after done all export the router
export default router;