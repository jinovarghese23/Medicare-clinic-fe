import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
    const navigate=useNavigate();

    const [menu,setMenu]=useState(false);
    const [token,setToken]=useState(true)

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5'>
            <img onClick={()=>navigate('/')} className='w-20 cursor-pointer' src="https://www.zarla.com/images/zarla-medicare-clinic-1x1-2400x2400-20220124-3pc63vbckqybc49x99bk.png?crop=1:1,smart&width=250&dpr=2" alt="" />
            <ul className='hidden md:flex items-start gap-32 font-serif'>
                <Link to={'/'}>
                    <li className='py-1 text-2xl'>Home</li>
                </Link>
                <Link to={'/doctors'}>
                    <li className='py-1 text-2xl'>Doctors</li>
                </Link>
                <Link to={'/about'}>
                    <li className='py-1 text-2xl'>About</li>
                </Link>
                <Link to={'/contact'}>
                    <li className='py-1 text-2xl'>Contact</li>
                </Link>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token?
                    <div className='flex items-center cursor-pointer gap-2 group relative'>
                       <i class="fa-solid fa-user fa-2x"></i>
                       <i class="fa-solid fa-caret-down"></i>
                       <div className='absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-40 bg-stone-100 p-4 rounded flex flex-col gap-4'>
                            <p onClick={()=>navigate('/profile')}  className='hover:text-blue-500'>My Profile</p>
                            <p onClick={()=>navigate('/appointments')} className='hover:text-blue-500'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-blue-500'>Logout</p>
                        </div>
                       </div>
                    </div>
                    :
                    <button onClick={()=>navigate('/login')} className='text-xl bg-pink-600 text-white px-6 py-2 rounded-full font-light hidden:md:block'>Create an account</button>
                }
                
            </div>
        </div >
    )
}

export default Header