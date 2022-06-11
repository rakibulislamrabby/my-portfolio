import React from 'react';
import img1 from "../assets/project3.png"
import img2 from "../assets/project/08.png"
import img3 from "../assets/project/09.png"
const HealthCoach = () => {
    return (
        <div className='w-full  bg-[#0a192f] lg:px-16 lg:py-20 '>
            <h2 className='text-pink-600 text-3xl font-bold text-center'>Project Details</h2>
            <h2 className='text-sky-500 pb-10 text-xl font-bold text-center'>Project Name: Health-Coach</h2>
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
                    <li>2. React Router for making it a single page application</li>
                    <li>3. Use Bootstrap for using responsive</li>
                    <li>6. Firebase for authentication and hosting</li>
                </ul>
            </div>
            <div className='mt-10 bg-[#13233a] rounded-lg lg:ml-10 '>
                <h2 className='text-pink-600 pt-4 pb-10 text-3xl font-bold text-center'>Link</h2>
                <ul className='text-white text-xl pl-6 pb-10'>
                    <li>1. Live Site Link: https://health-coach-17026.web.app/</li>
                    <li>2. Github Link: https://github.com/rakibulislamrabby/health-coach</li>


                </ul>
            </div>
            <div className='mt-10 bg-[#13233a] rounded-lg lg:ml-10 '>
                <h2 className='text-pink-600 pt-4 pb-10 text-3xl font-bold text-center'>Project feature</h2>
                <ol className='text-white text-xl pl-6 pb-10'>
                    <li>1. This site is focused Personal health support trainer.</li>
                    <li>2. First feature is site have a header section and in the header there is website name and menu bar along with login option.</li>
                    <li>3. In the bottom of the home page hase include some tips in our health.</li>
                    <li>4. In this website hase email password authentication system.</li>
                    <li>5. User can add new item in the database.</li>
                    <li>6. And also user can delete a user.And Also has Google log in system.</li>
                    <li>7. If there is any problem while logging in, it will show error message through toast</li>
                    <li>7. And at last in the list our site hase Signout Option.</li>
                </ol>
            </div>
        </div>
    );
};

export default HealthCoach;