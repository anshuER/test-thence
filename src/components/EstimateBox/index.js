import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const EstimateBox = () => {
  return (
    <div className='relative bg-white rounded-lg h-[760px] overflow-hidden px-2 py-8'>
      <div className='absolute inset-0'>
        <img
          src='/estimate.png'
          alt='Decorative Home'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='relative z-10 text-white flex flex-col justify-start mt-36 h-full bg-opacity-70 ml-8 p-6 rounded-lg'>
        <div className='flex flex-col gap-3 font-serif'>
          <h1 className='text-5xl  font-bold '>We create art</h1>
          <h1 className='text-5xl font-bold '>for modern life</h1>
        </div>

        <div className='my-7 text-[22px] w-80 font-jost leading-8 font-medium'>
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex '>
            <img
              src='/phone.png'
              alt='Profile'
              className='w-16 h-16 rounded-full mr-4'
            />
            <div className='font-jost flex flex-col justify-center items-center '>
              <p className='text-2xl font-bold'>012345678</p>
              <p className='text-xl font-medium'>Call Us Anytime</p>
            </div>
          </div>
          <button className='mt-6 h-[75px] w-[247px] flex justify-center items-center gap-[10px]  bg-[#C9A16F] text-lg text-white font-semibold py-3 px-6 rounded-2xl hover:bg-[#b48c5a] transition'>
            Get Free Estimate
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstimateBox;
