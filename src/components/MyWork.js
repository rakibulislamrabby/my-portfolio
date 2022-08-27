import React from 'react';
// import { Routes, Route, Link } from "react-router-dom";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import { Link } from 'react-router-dom';


const MyWork = () => {
    return (
        <div id='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f] pt-24'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        My Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* project-1 */}
                    <div
                        style={{ backgroundImage: `url(${project1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* <img src={project.img} alt="" /> */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN stack Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://micro-tech-b6d08.web.app/" target="_blank">
                                    <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/rakibulislamrabby/micro-tech-client' target="_blank">
                                    <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                                <br />
                                {/* <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg mt-10'>Details</button> */}
                                <Link to='/microTech'> <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg mt-10'> Details</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* project2 */}
                    <div
                        style={{ backgroundImage: `url(${project2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* <img src={project.img} alt="" /> */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN stack Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://khushboo-faacc.web.app/" target="_blank">
                                    <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/rakibulislamrabby/khushboo-client' target="_blank">
                                    <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                                <br />
                                {/* <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg mt-10'>Details</button> */}
                                <Link to='/khushboo'> <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg mt-10'> Details</button></Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${project3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* <img src={project.img} alt="" /> */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href=" https://health-coach-17026.web.app/" target="_blank">
                                    <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/rakibulislamrabby/health-coach' target="_blank">
                                    <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                                <br />
                                {/* <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg mt-10'>Details</button> */}
                                <Link to='/healthCoach'> <button className='hover:bg-pink-600 hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg mt-10'> Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default MyWork;