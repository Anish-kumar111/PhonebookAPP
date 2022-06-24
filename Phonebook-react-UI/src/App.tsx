import React from 'react';
import './App.css';

import Products from './admin/Contacts';
import Main from './main/Main';
import {BrowserRouter  as Router,Route,Routes,} from "react-router-dom";
import ProductsCreate from './admin/ContactsCreate';
import ProductsUpdate from './admin/ContactsUpdate';


function App() {
  return (
  <div className="App">
    
  <Routes>
    
  {/* <Route  path="/" element={<Main/>}/>   */}
  <Route  path="/" element={<Products/>}/> 
  <Route  path="/admin/contacts/create" element={<ProductsCreate/>}/> 
  <Route  path="/admin/contacts/:id/edit" element={<ProductsUpdate/>}/> 
  </Routes>
   
  </div>



  );
}

export default App;
