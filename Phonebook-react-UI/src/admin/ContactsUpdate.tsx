
import React, { PropsWithRef, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contact } from '../interfaces/contact';
import Wrapper from './Wrapper';
import { useParams } from 'react-router-dom';



const ContactsUpdate = (props:PropsWithRef<any>) => {
  
    const [firstname, setName] = useState("")
    const [lastname, setlastName] = useState("")
    const [number,  setNumber] = useState("")
    
    const navigates = useNavigate()
    // const [navigate,  setNavigate] = useState(false)
    const { id } = useParams(); // <-- access id match param here
    const [upid ] = useState();
    useEffect(  ()=>{
    ( async () =>  {
        
      const response = await fetch(`http://localhost:8000/api/contacts/${id}`); 
      const contact:  Contact  = await response.json();
      console.log(contact);
      setName(contact.firstname)
      setlastName(contact.lastname)
      setNumber(contact.number)
      
    }

     )();
  },  [id]);    
    
    
    
  const  submit   =   async (e: SyntheticEvent)  =>  {    
      e.preventDefault();
        
    const res  = await fetch(`http://localhost:8000/api/contacts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            firstname,lastname,number
        })
      });
      navigates('/');

     
     
    }

    return (
<Wrapper>
<div className='container'>  
<form   onSubmit={submit}>
  <div className="mb-3"
  defaultValue={upid} >
   <label  className="form-label">First name</label>
    <input type="text" className="form-control" 
    onChange={e =>  setName(e.target.value)}/>
    <label  className="form-label">Last name</label>
    <input type="text" className="form-control" 
    onChange={e =>  setlastName(e.target.value)}/>
    <label  className="form-label">Contact</label>
    <input type="number" className="form-control"
    onChange={e =>  setNumber(e.target.value)}/>   
    
  </div>
  <button  type="submit" className="btn btn-primary">Submit</button>
</form>
</div>            
</Wrapper>
    );
};

export default ContactsUpdate;