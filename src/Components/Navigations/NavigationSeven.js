import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const NavigationSeven = () => {
    const [isOpen,setIsOpen]= useState(false);

    const toggle = () =>{
      setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className='md:shadow-md mb-16'>
        <div className='max-w-xl mx-auto'>
        <div className='flex  items-center py-4 mx-auto text-center'>
            <div className=' flex mx-auto'>
            <div className='xs:ml-2'>
                    <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.049 0.019043L0 11.0404L7.59215 15.9483L17.049 9.83492L26.5059 15.9483L34.0982 11.0404L17.049 0.019043Z" fill="#816AFE" />
                    </svg><svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.59205 0.948242L0 5.85612L17.049 16.8775L34.0982 5.85612L26.5061 0.948242L17.049 7.06178L7.59205 0.948242Z" fill="#48D3FE" />
                    </svg>
   
                    </div>
                   <h1 className='ml-1 text-2xl font-bold'>Bibbble</h1>


                   <div className='hidden md:flex space-x-9  text-sm items-center md:ml-5'>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Home</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">About</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Features</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Pricing</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Gallery</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Team</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Store</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Trial</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium flex items-center" to="/">EN<svg className='ml-1' width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39746 0H0.397461L4.39746 6L8.39746 0Z" fill="#7E8190"/>
                    </svg></NavLink>
                    
                    
                    
                </div>
                
            </div>
            <div className='md:hidden flex item-center mr-2'>
                  <button onClick={toggle} >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
        </div>
                                                    {/* Mobile Navigation menu */}

                                                    <div className={isOpen ? 'md:hidden font-medium text-sm shadow-md ':
                    'hidden'} onClick={toggle}>
            
                    <div  >
                    <nav  >
                    <NavLink  className="block py-2 text-center" to="/">Home</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">About</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">Features</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">Pricing</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">Gallery</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">Team</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">Store</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">Trial</NavLink>
                    <NavLink  className="block py-2 text-center" to="/">EN</NavLink>
                   
                    </nav>
                  </div>
                </div>
        </div>
        </nav>  
        </>
    );
};

export default NavigationSeven;