import React, { PropsWithChildren } from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
    {/* <Nav /> */}
    {/* <Menu /> */}
    

    <main className="col">
    <h1 className='text-center'><i className="fa-solid fa-address-book"></i>  Phone Book APP</h1>
    <div className='container'>
        {props.children}
 
      
    </div>
    </main>
        </div>
    );
};

export default Wrapper;