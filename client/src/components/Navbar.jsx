import React, { useState } from 'react'
import { Router, Link } from 'react-router-dom'
import { HiOutlineLogout } from "react-icons/hi";

function Navbar() {
    const [color, setColor] = useState('dashboard');
    const handleClick = (button) => {
        setColor(button);
    };

    return (
        <>
            <div className='flex justify-between items-center text-lg px-40 h-20 '>
                <div className="flex gap-11">
                    <button onClick={() => handleClick('dashboard')}
                        className={`cursor-pointer ${color === 'dashboard' ? 'bg-blue-500 text-white' : ''} relative inline-flex items-center justify-center gap-2 rounded-md text-[16px] font-medium hover:border-blue-500 h-10 hover:border-2 px-3`}
                    >
                        <Link to='/driver-dashboard'>Dashboard</Link>
                    </button>
                    <button onClick={() => handleClick('book')}
                        className={`cursor-pointer ${color === 'book' ? 'bg-blue-500 text-white' : ''} relative inline-flex items-center justify-center gap-2 rounded-md text-[16px] font-medium hover:border-blue-500 hover:border-2 h-10  px-3`}
                    >
                        <Link to='/booking'>Book a Vehicle</Link>

                    </button>
                    {/* <button onClick={() => handleClick('customer')}
                        className={`cursor-pointer ${color === 'customer' ? 'bg-blue-500 text-white' : ''} relative inline-flex items-center justify-center gap-2 rounded-md text-[16px] font-medium hover:border-blue-500 hover:border-2 h-10  px-3`}
                    >
                        <Link to='/customer-dashboard'>customer-dashboard</Link>

                    </button> */}

                </div>
                <div className="flex items-center gap-2 bg-[#d6dcf0] rounded-md px-2  ">
                    <HiOutlineLogout className='h-10 text-[20px]' />
                    <p className='pb-[1px] text-[16px]'>Logout</p>
                </div>
            </div>
        </>
    )
}

export default Navbar