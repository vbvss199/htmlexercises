import React from 'react'
import {Routes,Route} from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook'

export default function App() {
  return (
    <Routes>
      {/* each route will have a path and ele  */}
      {/* the elements will be 5 different pges we will be using in our project  */}
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
    </Routes>
  )
}

// instead of the reload the page html is not re fetched react swaps components new content is displayed immediately 
// “React Router shows the required content without a full page reload.
// the website which are interactive are mostly SPA ,websites which include the heavy content eg, blogs ,news pages 
// An MPA loads a new HTML page from the server for each route.
// an SPA “index.html loads once, new components are rendered”