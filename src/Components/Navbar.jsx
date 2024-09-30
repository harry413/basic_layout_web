import React,{useState, useEffect} from 'react';

const NavList = () => {
    return(
        <ul className="hidden md:flex space-x-4">
                    <li><a href="#home" className="text-white">Home</a></li>
                    <li><a href="#about" className="text-white">About</a></li>
                    <li><a href="#testimonials" className="text-white">Testimonials</a></li>
                    <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
    )
}


const Navbar = () => {
    const [screen, setScreen] = useState([]);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setScreen(false);
    }, 4000);
  }, []);
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto lg:flex lg:items-center lg:justify-between ">
                <h1 className="text-white text-lg font-bold">Icon Application</h1>
                {screen ? <NavList/> : ""}
                
            </div>
        </nav>
    );
}

export default Navbar;
