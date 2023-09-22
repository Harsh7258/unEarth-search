import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <>
        <div className='flex justify-between p-3 px-5 shadow-sm z-30 '>
            <div className='flex items-center gap-2'>
                <a href='/'>
                <Image src='/logo.png' alt='logo' width={42} height={42}/>
                </a>
                <h2 className='text-[25px] textS font-extrabold tracking-wider'>unearth.</h2>
            </div>
            <ul className='flex gap-4 items-center'>
                    <a href="/">
                        <li className='header-li textS'>
                            Home
                        </li>
                    </a>
                    <a href="/">
                        <li className='header-li textS'>
                            About Us
                        </li>
                    </a>
                    <a href="/">
                        <li className='header-li textS'>
                            Contact Us
                        </li>
                    </a>
                    <a href="/">
                        <li className='header-li textS'>
                            Category
                        </li>
                    </a>
                </ul>
        </div>
        </>
    );
};

export default Header;