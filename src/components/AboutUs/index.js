import React from 'react';

const profiles = [
  {
    name: 'Natasha',
    city: 'Moscow, Russia',
    desc: `Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.`,
  },
  {
    name: 'Raymond Galario',
    city: 'UK, London',
    desc: `Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been scrambled it 
to make a type book.`,
  },
  {
    name: 'Benny Roll',
    city: 'USA, New York',
    desc: `Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been scrambled.`,
  },
];

const ProfileCard = ({ profile }) => {
  return (
    <div className='bg-white flex flex-col gap-8  rounded-2xl shadow-md p-6  h-[340px] '>
      <div className='flex items-center mb-4'>
        <img
          src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt='Profile'
          className='w-16 h-16 rounded-full mr-4'
        />
        <div>
          <h3 className='text-[25px] font-normal text-[#292F36]'>
            {profile.name}
          </h3>
          <p className='text-gray-500 text-lg font-normal'>{profile.city}</p>
        </div>
      </div>
      <p className='text-gray-600 text-[22px] font-jost leading-8 self-end'>
        {profile.desc}
      </p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className='bg-[#D8A876] text-white  justify-center h-[680px] flex flex-col gap-10  rounded-[70px]'>
      <div className='flex flex-col gap-2 items-center text-5xl font-serif'>
        <h1 className=''>What the People Thinks</h1>
        <h1>About Us</h1>
      </div>
      <div className='grid grid-cols-3 items-center gap-5 px-8'>
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
