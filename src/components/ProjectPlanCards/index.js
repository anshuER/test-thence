import React from 'react';

const cards = ['Project Plan', 'Interior Work', 'Realization'];

const Card = ({ title }) => {
  return (
    <div className='flex flex-col gap-14'>
      <div className=' flex flex-col gap-5'>
        <p className='font-serif text-[25px] font-normal text-center'>
          {title}
        </p>
        <p className=' font-light text-[22px] font-jost leading-8 text-center'>
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
      </div>
      <p className='text-lg font-semibold font-jost self-center cursor-pointer'>
        Read More
      </p>
    </div>
  );
};

const ProjectPlanCards = () => {
  return (
    <div className='grid grid-cols-3 items-center px-8 gap-16'>
      {cards.map((card) => (
        <Card key={card} title={card} />
      ))}
    </div>
  );
};

export default ProjectPlanCards;
