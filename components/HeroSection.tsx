import React from 'react';
import Image from 'next/image';
import category from '@/data/category';

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div>
                <Image src='/bgg.png' alt='hero-image' width={800}
                height={200} className='hero-img'/>
                <div className='mt-[70px]'>
                    <h2 className='hero-logo textS'>
                        unearth.
                    </h2>
                    <h4 className='text-[16px]'>Your City's Amazing <span className='font-bold'> Places</span> 
                    </h4>
                    <div className='hero-searchBar'>
                        <input 
                        type='text'
                        placeholder='Search Here..'
                        className='hero-input '/>
                        <button 
                        className='hero-btn hover:border-green-800'>
                            <Image src='/search-1.png' alt='search'
                            width={27}
                            height={27}/>
                        </button>
                    </div>
                    <div className='hero-category'>
                        <h4>
                            Or Browse Near me places.
                        </h4>
                        <div className='hero-wrap-icon'>
                            {category.map((item, index) => (
                                <div className='hero-icons hover:border-green-800'>
                                    <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={27}
                                    height={27}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;