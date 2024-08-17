import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HomeDecorBanner = () => {
  return (
    <div className='relative bg-white rounded-lg h-[760px] overflow-hidden px-2 py-8'>
      <div className='absolute inset-0'>
        <img
          src='https://anshuER.github.io/test-thence/banner.png'
          alt='Decorative Home'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='relative z-10 text-white flex flex-col justify-start mt-6 h-full bg-opacity-70 p-6 rounded-lg'>
        <div className='flex flex-col gap-3 font-serif'>
          <h1 className='text-6xl  font-bold '>Let's make your</h1>
          <h1 className='text-6xl font-bold '>home beautiful together</h1>
        </div>

        <div className='my-7 text-[22px] font-medium'>
          <p className='mt-1'>There are many variations of the passages</p>
          <p className=' mt-1'>of lorem Ipsum fromavailable, majority.</p>
        </div>

        <button className='mt-6 h-[75px] w-56 flex justify-center items-center gap-[10px]  bg-[#C9A16F] text-lg text-white font-semibold py-3 px-6 rounded-2xl hover:bg-[#b48c5a] transition'>
          Get Started
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HomeDecorBanner;
