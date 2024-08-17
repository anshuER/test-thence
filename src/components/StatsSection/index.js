import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const stats = [
    { number: 12, label: 'Years Of Experience' },
    { number: 1074, label: 'Success Project' },
    { number: 98, label: 'Active Project' },
    { number: 583, label: 'Happy Customers' },
  ];

  return (
    <div className='flex justify-around items-center py-8 w-full '>
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className='text-center'>
            <h2 className='text-[85px] font-normal text-[#CDA274]'>
              <CountUp end={stat.number} duration={2} enableScrollSpy={true} />
            </h2>
            <p className='text-gray-500 font-normal text-[22px]'>
              {stat.label}
            </p>
          </div>
          {index < stats.length - 1 && (
            <div className='h-28 border-r border-[#CDA274] mt-7 mx-8'></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsSection;
