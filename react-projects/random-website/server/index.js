import express from "express";
import { PORT } from './config.js';

// this is the basic server which is using the language javascript
// make it to listen on port 
// for a better solution import the port from config.js file and set the port accordingly 

// basic get request 

const app = express();
console.log('Starting server...');

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// now create a function to listen the port, and also a call back function to listen it 
app.listen(PORT, ()=>{
    // make sure to use the back literals instead of string literals 
    console.log(`app is listening to the port:${PORT}`)
})


