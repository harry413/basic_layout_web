import React,{useState, useEffect} from 'react';

const NavList = () => {
    return(
        <ul className="hidden md:flex space-x-4">
                    <li><a href="#home" className="text-white hover:underline">Home</a></li>
                    <li><a href="#about" className="text-white hover:underline">About</a></li>
                    <li><a href="#testimonials" className="text-white hover:underline">Testimonials</a></li>
                    <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
        </ul>
    )
}


const Navbar = () => {
  
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto lg:flex lg:items-center lg:justify-between ">
                <h1 className="text-white text-xl font-bold">Icon Application</h1>
                <NavList/>  
            </div>
        </nav>
    );
}

export default Navbar;
