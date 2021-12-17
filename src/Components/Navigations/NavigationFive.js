import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';

const NavigationFive = () => {
    const [isOpen,setIsOpen]= useState(false);

    const toggle = () =>{
      setIsOpen(!isOpen);
    };
    return (
        <>
        <nav className='md:shadow-md mb-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between justify-items-center items-center py-4'>

                    {/* Left side  */}

                <div className='flex items-center ml-1'>
                   <div className='ml-1'>
                    <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.049 0.019043L0 11.0404L7.59215 15.9483L17.049 9.83492L26.5059 15.9483L34.0982 11.0404L17.049 0.019043Z" fill="#816AFE" />
                    </svg><svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.59205 0.948242L0 5.85612L17.049 16.8775L34.0982 5.85612L26.5061 0.948242L17.049 7.06178L7.59205 0.948242Z" fill="#48D3FE" />
                    </svg>
                    </div>
                    <h1 className='ml-2 text-2xl font-bold'>Bibbble</h1>

                    <input className='hidden md:flex w-56 py-1 px-2 rounded text-gray-600 bg-slate-100 text-sm ml-16 mt-1'
                     type="text" name='text' placeholder='Search here...' />
                </div>

                {/* Right side  */}
                <div className='hidden md:flex space-x-6 font-medium text-sm'>
                            <NavLink className="hover:text-indigo-600" to="/">Home</NavLink>
                            <NavLink className="hover:text-indigo-600" to="/">Pricing</NavLink>
                            <NavLink className="hover:text-indigo-600" to="/">Gallery</NavLink>
                            <NavLink className="hover:text-indigo-600" to="/">Team</NavLink>

                        </div>

                        {/* Hamburger  */}
                        <div className='md:hidden flex item-center mr-2'>
                        <button onClick={toggle} >
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                         </svg>
                        </button>
                     </div>

                </div>
            </div>
            {/* Mobile Responsive menu  */}

            <div className={isOpen ? 'md:hidden font-medium text-sm shadow-md mb-3 ':
                    'hidden'} onClick={toggle}>
            
                    <div  >
                    <nav  >
                     <NavLink className="block py-2 text-center" to="/">Home</NavLink>
                     <NavLink className="block py-2 text-center" to="/">Pricing</NavLink>
                     <NavLink className="block py-2 text-center" to="/">Gallery</NavLink>
                     <NavLink className="block pt-2 pb-5 text-center" to="/">Team</NavLink>
                     
                    </nav>
                  </div>
                </div>



            <input className='md:hidden w-56 py-1 px-2 rounded text-gray-600 bg-slate-100 text-sm  mt-1'type="text" name='text' placeholder='Search here...' />
        </nav>
        </>
    );
};

export default NavigationFive;