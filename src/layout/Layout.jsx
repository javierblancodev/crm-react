import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {

    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className='md:flex md:min-h-screen'>

            <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'> CRM - Customers</h2>

                <nav className='mt-10'>
                    {/* In react, we use the 'Link' tag/component that must be imported instead of the 'a' tag so that we avoid reloading the page when clicking on the link. We must also sustitute href for to */}
                    {/* There is a similar tag/component called navlink that is also imported from react-router-dom*/}
                    <Link className={`${currentUrl === '/customers' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`} to="/customers">Customers</Link>
                    <Link className={`${currentUrl === '/customers/new' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`} to="/customers/new">New customer</Link>
                </nav>
            </div>
            
            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;