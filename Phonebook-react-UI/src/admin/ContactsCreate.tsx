import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';

const ContactsCreate = () => {
    const [firstname, setName] = useState("")
    const [lastname, setlastName] = useState("")
    const [number,  setNumber] = useState("")
    const navigates = useNavigate()
    const  submit   =   async (e: SyntheticEvent)  =>  { 
         
       e.preventDefault();  
       const res =  await fetch('http://localhost:8000/api/contacts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            firstname,lastname,number
        })
      });
      navigates('/');
      // setNavigate(true);
      // e.preventDefault();
    }
    
    const submitButton = () =>{ 
      navigates('/');}
    // if  (navigate) {
    // return  <Navigate to={'admin/products'}  replace={true}/>}
    return (
<Wrapper>
<form   onSubmit={submit}>
  <div className="mb-3">
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
            
</Wrapper>
    );
};

export default ContactsCreate;


