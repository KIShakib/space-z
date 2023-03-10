import React from 'react';
import DestinationNavbar from '../Shared/DestinationNavbar';


const SingleDestination = ({ destination, handleId }) => {
    const { _id, name, images, description, distance, travel } = destination;

    return (
        <div className='lg:flex justify-around'>
            <div className='md:flex sm:flex justify-center'>
                <img src={images} alt="Space Destination" />
            </div>
            <div className='lg:w-1/3 md:w-full mt-10 md:flex md:flex-col sm:w-full sm:flex sm:flex-col items-center flex flex-col'>
                <div className='md:block lg:hidden sm:block'>
                    <DestinationNavbar handleId={handleId} destination={destination} />
                </div>
                <div>
                    <h1 className='text-white text-8xl uppercase md:text-center lg:text-start sm:text-center md:mt-8 sm:mt-8 text-center' style={{ fontFamily: "'Bellefair', sans-serif" }}>{name}</h1>
                    <p className='text-secondary lg:w-full md:w-[85%] sm:w-[85%] w-[85&] my-4 text-xl leading-10 lg:text-start md:text-center md:mx-auto sm:text-center sm:mx-auto text-center mx-auto' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{description}</p>
                </div>
                <div className="lg:w-full w-[85%] h-[1px] opacity-25 bg-white"></div>
                <div className='lg:w-full flex gap-x-20 mt-7 sm:flex-col lg:flex-row md:flex-row sm:gap-y-6 flex-col'>
                    <div>
                        <h5 className='text-sm text-secondary' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>AVG. DISTANCE</h5>
                        <h3 className='text-3xl text-white' style={{ fontFamily: "'Bellefair', sans-serif" }}>{distance}</h3>
                    </div>
                    <div>
                        <h5 className='text-sm text-secondary' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                            EST. TRAVEL TIME
                        </h5>
                        <h3 className='text-3xl text-white uppercase' style={{ fontFamily: "'Bellefair', sans-serif" }}>
                            {travel}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDestination;