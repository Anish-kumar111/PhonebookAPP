import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../interfaces/contact';

import Wrapper from './Wrapper';
const Contacts = () => {
  const [search, setSearch]: [string, (search: string) => void] = React.useState("");
  const [contacts, setContacts] = useState([]);
  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };

  useEffect( ()=>  {
      
       const getProducts= async () =>  {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');   
      const response = await fetch('http://localhost:8000/api/contacts', {
        method: 'GET',
        headers: requestHeaders,
        // body: requestBody
      });
      const data  = await response.json();
      console.log(data);
      setContacts(data);
    }
     getProducts();
  },  []);
   const del =async (id:number) =>  
   {  if(window.confirm('are you sure want to delete this Contact?'))
     {
     await  fetch(`http://localhost:8000/api/contacts/${id}`, {
       method:'DELETE'
     });
     setContacts(contacts.filter((p:Contact)  =>  p.id  !== id));
   } 
  }
  return (
      <Wrapper>
        
       
       

        
        <div>
        <div className="input-group">
  <div className="form-outline">
          <input placeholder='search by firstname...' type="search" onChange={handleChange} className="form-control"  /></div>
          </div></div>
   <Link  to='/admin/contacts/create' className="buttons btn btn-sm btn-outline-secondary"><i className="fa-solid fa-plus"></i> Create New Contact</Link>
          <div className="btn-group">
         
            
               
              </div>
               
        <div className="contacts">
     


        {contacts.map((p: Contact)=> {
             if (search == "" || p.firstname.toLowerCase().includes(search.toLowerCase())) {
                 return (
        <ul key={p.id} className="list-group">
    <li className="list-group-item">
      <h3>{p.firstname} {p.lastname}</h3>
            <p>{p.number}</p>  
              <div  className='buttons'>
              
              <Link  to={`/admin/contacts/${p.id}/edit`} className="btn  btn-outline-secondary">EDIT</Link>
                <a href="#" className='btn    btn-outline-primary'
                onClick={() =>  del(p.id)}
                ><i className="fa-solid fa-circle-minus"></i></a>
                
                </div></li>
    
  </ul>
    )}
  })}
      </div>
      
      
    </Wrapper>
    );
};

export default Contacts;