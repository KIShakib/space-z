import React from 'react';

const TechnologyNavbar = ({ handleId, technology }) => {
    return (
        <div className='flex lg:flex-col md:flex-row lg:basis-1/5 lg:gap-y-6 md:gap-x-6 md:justify-center md:mt-16 font-semibold text-xl sm:flex-row sm:gap-x-6 sm:justify-center sm:mt-16 flex-row gap-x-6 justify-center mt-16' style={{ fontFamily: "'Bellefair', sans-serif" }}>
            <button
                onClick={() => handleId(1)}
                className={`lg:w-16 md:w-12 lg:h-16 md:h-12 w-12 h-12 rounded-full flex justify-center items-center ${technology._id === 1 ? "bg-white text-base-100" : "bg-transparent text-white border-white border-[1px]"} border-opacity-50 hover:border-opacity-100`}>
                1
            </button>
            <button
                onClick={() => handleId(2)}
                className={`lg:w-16 md:w-12 lg:h-16 md:h-12 w-12 h-12 rounded-full flex justify-center items-center ${technology._id === 2 ? "bg-white text-base-100" : "bg-transparent text-white border-white border-[1px]"} border-opacity-50 hover:border-opacity-100`}>
                2
            </button>
            <button
                onClick={() => handleId(3)}
                className={`lg:w-16 md:w-12 lg:h-16 md:h-12 w-12 h-12 rounded-full flex justify-center items-center ${technology._id === 3 ? "bg-white text-base-100" : "bg-transparent text-white border-white border-[1px]"} border-opacity-50 hover:border-opacity-100`}>
                3
            </button>
        </div>
    );
};

export default TechnologyNavbar;