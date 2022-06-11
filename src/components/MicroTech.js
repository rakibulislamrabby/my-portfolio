import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/project/01.png"
import img2 from "../assets/project/02.png"
import img3 from "../assets/project/img3.JPG"

const MicroTech = () => {
    return (
        <div className='w-full  bg-[#0a192f] lg:px-16 lg:py-20 '>
            <h2 className='text-pink-600 text-3xl font-bold text-center'>Project Details</h2>
            <h2 className='text-sky-500 pb-10 text-xl font-bold text-center'>Project Name: Micro-Tech</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 pb-10 lg:gap-36 gap-6 lg:px-20'>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                </div>
            </div>

            <div className='mt-10 bg-[#13233a] rounded-lg lg:ml-10 '>
                <h2 className='text-pink-600 pt-4 pb-10 text-3xl font-bold text-center'>Used Technology</h2>
                <ul className='text-white text-xl pl-6 pb-10'>
                    <li>1. ReactJs for making UI</li>
                    <li>2. React Router for maki it a single page application</li>
                    <li>3. Talwind css and Daisy UI for make it responsive and use their component</li>
                    <li>4. NodeJs and Experss Js for backend</li>
                    <li>5. MongoDb for Database</li>
                    <li>6. Firebase for authentication and hosting</li>
                </ul>
            </div>
            <div className='mt-10 bg-[#13233a] rounded-lg lg:ml-10 '>
                <h2 className='text-pink-600 pt-4 pb-10 text-3xl font-bold text-center'>Link</h2>
                <ul className='text-white text-xl pl-6 pb-10'>
                    <li>1. Live Site Link: https://micro-tech-b6d08.web.app/</li>
                    <li>2. Client Side Link: https://github.com/rakibulislamrabby/micro-tech-client</li>
                    <li>3. Server side Link: https://github.com/rakibulislamrabby/micro-tech-server</li>

                </ul>
            </div>
            <div className='mt-10 bg-[#13233a] rounded-lg lg:ml-10 '>
                <h2 className='text-pink-600 pt-4 pb-10 text-3xl font-bold text-center'>Project feature</h2>
                <ol className='text-white text-xl pl-6 pb-10'>
                    <li>1. This is a Computer Parts manufacturing Website. Firstly we can receive a minimum order in a time and we provide these parts.</li>
                    <li>2. A user can order many items at this time.</li>
                    <li>3. This website has Dashboard. In this dashboard, a user should see their order in the My Order section and cancel their order. And the main feature of this My order section is payment. a user can click the pay Button and pay their bill. We have received the bill by card.</li>
                    <li>4. And Next add a review section in the dashboard. In this section, a user can give their review on this website.</li>
                    <li>5. And last user can see there profile. They can edit there information in this section.</li>
                    <li>6. we provide an admin system. only admin can give admin permition to another user. An admin can see all orders and they can cancel non-paid orders.</li>
                    <li>7. An admin can add a new product and delete existing products in the database.</li>
                </ol>
            </div>
        </div>
    );
};

export default MicroTech;