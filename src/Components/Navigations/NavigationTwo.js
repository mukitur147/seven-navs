import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const NavigationTwo = () => {
    const [isOpen,setIsOpen]= useState(false);

    const toggle = () =>{
      setIsOpen(!isOpen);
    };

    const [searchOpen, setSearchOpen]=useState(false);
    const searchToggle = () =>{
        setSearchOpen(!searchOpen);
    };
    return (
        <>
        <nav className='md:shadow-md mb-16'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between justify-items-center items-center py-4'>

                {/* Left SIDE NAV OR LOGO SIDE  */}

                <NavLink to="/">
                <div className='flex items-center ml-1'>
                   <div className='ml-1'>
                    <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.049 0.019043L0 11.0404L7.59215 15.9483L17.049 9.83492L26.5059 15.9483L34.0982 11.0404L17.049 0.019043Z" fill="#816AFE" />
                    </svg><svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.59205 0.948242L0 5.85612L17.049 16.8775L34.0982 5.85612L26.5061 0.948242L17.049 7.06178L7.59205 0.948242Z" fill="#48D3FE" />
                    </svg>
                    </div>
                    <h1 className='ml-2 text-2xl font-bold'>Bibbble</h1>

                </div>
                </NavLink>

            {/* MIDDLE PART OR NAVIGATIONS SIDE  */}


                <div className='hidden md:flex space-x-7  text-sm items-center'>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Home</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">About</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Features</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Pricing</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Gallery</NavLink>
                    <NavLink className="hover:text-indigo-600 font-medium" to="/">Team</NavLink>
                    <input className={searchOpen ? 'w-38 py-1 px-2 rounded text-gray-600 bg-slate-100 text-sm'
                    :
                    'hidden'} type="text" name='text' placeholder='Search' />
                    <button onClick={searchToggle} className='xs:hidden ml-1'><svg className='h-4 w-4 text-gray-700 font-light' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></button>
                    
                </div>
                


                {/* Right Side or Buttons  */}

                <div className='ml-3 hidden md:flex '>
                   <button className=' bg-slate-100 text-indigo-500 mx-3 px-2 py-1 rounded font-medium text-sm hover:bg-slate-200 transtion duration-300'>
                    Log In
                   </button>

                    <button className='bg-indigo-500 text-white px-2 py-1 rounded font-medium text-sm hover:bg-indigo-600 transtion duration-300'>
                    Buy Now- 24$
                    </button>
                </div>



                        {/* Responsive Menu or Hamburger Menu  */}
                       
                        <button onClick={searchToggle} className='md:hidden ml-auto mr-5 '><svg className='h-4 text-gray-700 font-light ' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></button>                     
                       
                <div className='md:hidden flex item-center mr-2'>
                  <button onClick={toggle} >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
            </div>
          </div>

                    {/* Mobile Navigation menu */}

                    <div className={isOpen ? 'md:hidden font-medium text-sm shadow-md ':
                    'hidden'} onClick={toggle}>
            
                    <div  >
                    <nav  >
                    <NavLink className="block py-2 text-center" to="/">Home</NavLink>
                    <NavLink className="block py-2 text-center" to="/">About</NavLink>
                    <NavLink className="block py-2 text-center" to="/">Features</NavLink>
                    <NavLink className="block py-2 text-center" to="/">Pricing</NavLink>
                    <NavLink className="block py-2 text-center" to="/">Gallery</NavLink>
                    <NavLink className="block py-2 pb-4 text-center" to="/">Team</NavLink>
                    
                     <div className='pb-5 ml-14'>
                        <button className=' bg-slate-100 text-indigo-500 mx-3 px-2 py-1 rounded font-medium text-sm hover:bg-slate-200 transtion duration-300'>Log In</button>
                                
                        <button className='bg-indigo-500 text-white px-2 py-1 rounded font-medium text-sm
                        hover:bg-indigo-600 transtion duration-300'>Buy Now- 24$</button>

                     </div>
                    </nav>
                  </div>
                </div>
                <input className={searchOpen ? 'w-38 py-1 px-2 text-sm rounded text-gray-600 bg-slate-100 md:hidden ml-16'
                    :
                    'hidden'} type="text" name='text' placeholder='Search' />

        </nav>  
        </>
    );
};

export default NavigationTwo;