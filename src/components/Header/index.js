import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between'>
      <img
        className='w-[227px] h-[50px]'
        src='https://anshuER.github.io/test-thence/image.png'
        alt='logo'
      />
      <div className='flex gap-8 items-center text-xl font-medium'>
        <p className='text-red-500'>Home</p>
        <p>Pages</p>
        <p>Services</p>
        <p>Project</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
