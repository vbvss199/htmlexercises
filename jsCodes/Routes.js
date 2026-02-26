// router-dom 
// npm install react-router-dom
// BrowserRouter enables the whole application for routing 
// Routes -> container for all the routes
// route -> specific route !
// Link used instead of <a> tag to navigate , this can be replaced by useNavigate needs to be programme
// src/home.js ,app.js,about.js,contact.js

// home.js 
function Home(){
    return <h1>yelcome to home</h1>
}

// about.js
function About(){
    return <h1>About</h1>
}

// contact.js
function Contact(){
    return <h1>contact</h1>
}
// import all the necessary ones
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import Home from'./Home';
// import Contact from './Contact';
// import About from './About';

// app.js
function App(){
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={ele1}></Route>
        <Route path="/about" element={ele1}></Route>
    </Routes>
    </BrowserRouter>
}

// for spa appplication to avoid reloading we use Link instead of a tag
// routes with and without navigation 
// 1 . without nav 
{/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/about" element={<h1>About</h1>} />
  </Routes>
</BrowserRouter> */}
// user needs to change the url manually in the browser , users has no buttons in the app 

<BrowserRouter>
  {/* Links */}
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  {/* Routes */}
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/about" element={<h1>About</h1>} />
  </Routes>
</BrowserRouter>


// if there are buttons it helps to navigate just like buttons onclick 
// similar to anchor tags without reloading 
import { Link } from "react-router-dom";

function Home(){
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </>
  );
}

// or
import { Link } from "react-router-dom";

function Home(){
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </>
  );
}

// or using the useNavigate
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
    </>
  );
}


// dynamic routing 
// dynamic routing allows us to pass params in the url like id's usernames like user/id 
<Route path="/user/:id" elemt={<User/>}></Route>
// here :id is the dynamic parameter
// the params are read using useParams from react-router-dom 
// using the destructuring the params are considered 
// const {id,postId}=useParams();

// types of params Route vs Query params !

//ROUTE PARAMS  
https://exampleapi.com/users/101

<Route path ="/user/:id" element={<User/>}/>
// accessing in the component !
function User(){
  const {id}=useParams();
  return <h1>user:id{id}</h1>
}
// output user id:101 

// Query Params !
// these are used when identifying a specific resource 
// these comes after the ? in the URL 
// /user?id=101  for this we use useSearchParams() Hook 
// Route param → tells WHICH resource
// Query param → tells HOW to display or modify the resource

//products?category=phones to show only ohones
const [params]=useSearchParams();
const category =params.get("category")
// this way we able to filter only phones category 
// used in the pagination
// /products?page=2&limit=10
// const page = params.get("page");
import { useSearchParams } from "react-router-dom";

function Products(){
  const [params] = useSearchParams();

  const page = params.get("page");
  const items = params.get("items");

  console.log(page);   // "2"
  console.log(items);  // "10"
}
// & is used to separate multiple query params 
// /products?page=10&items=10 so query params spearated by & 
// useParams returns the object and useSearchparams returns the array careful !
