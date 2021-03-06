import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';



const NavigationOne = () => {
    
    const [isOpen,setIsOpen]= useState(false);

    const toggle = () =>{
      setIsOpen(!isOpen);
    };
  

    return (
        <>
            <nav className='md:shadow-md mb-16'>
                <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between py-4'>

                        {/* left side div  */}
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


                              {/* Right side div  */}
                    <div className='flex justify-items-center items-center'>

                            {/* Responsive Menu or Hamburger Menu  */}
                     <div className='md:hidden flex item-center mr-2'>
                        <button onClick={toggle} >
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                         </svg>
                        </button>
                     </div>


                            {/* primary nav  */}

                        <div className='hidden md:flex space-x-6 font-medium text-sm'>
                            <NavLink className="hover:text-indigo-600" to="/">Home</NavLink>
                            <NavLink className="hover:text-indigo-600" to="/">About</NavLink>
                            <NavLink className="hover:text-indigo-600" to="/">Features</NavLink>
                            <NavLink className="hover:text-indigo-600" to="/">Pricing</NavLink>
                        </div>

                            {/* secondary nav  */}
                        <div className='ml-3 hidden md:flex '>
                            <button className=' bg-slate-100 text-indigo-500 mx-3 px-2 py-1 rounded font-medium text-sm hover:bg-slate-200 transtion duration-300'>Log In</button>

                            <button className='bg-indigo-500 text-white px-2 py-1 rounded font-medium text-sm
                                hover:bg-indigo-600 transtion duration-300'>Buy Now- 24$</button>
                        </div>
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
                     <NavLink className="block pt-2 pb-5 text-center" to="/">Pricing</NavLink>
                     <div className='pb-5 ml-14'>
                        <button className=' bg-slate-100 text-indigo-500 mx-3 px-2 py-1 rounded font-medium text-sm hover:bg-slate-200 transtion duration-300'>Log In</button>
                                
                        <button className='bg-indigo-500 text-white px-2 py-1 rounded font-medium text-sm
                        hover:bg-indigo-600 transtion duration-300'>Buy Now- 24$</button>

                     </div>
                    </nav>
                  </div>
                </div>
            </nav>
        </>
    );
};

export default NavigationOne;