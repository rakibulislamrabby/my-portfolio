import React from 'react';
import img1 from "../assets/project2.png"
import img2 from "../assets/project/05.png"
import img3 from "../assets/project/06.png"
const Khushboo = () => {
    return (
        <div className='w-full  bg-[#0a192f] lg:px-16 lg:py-20 '>
            <h2 className='text-pink-600 text-3xl font-bold text-center'>Project Details</h2>
            <h2 className='text-sky-500 pb-10 text-xl font-bold text-center'>Project Name: Khushboo</h2>
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
                    <li>3. Talwind css and Daisy UI for make it responsive and use their component</li>
                    <li>4. NodeJs and Experss Js for backend</li>
                    <li>5. MongoDb for Database</li>
                    <li>6. Firebase for authentication and hosting</li>
                </ul>
            </div>
            <div className='mt-10 bg-[#13233a] rounded-lg lg:ml-10 '>
                <h2 className='text-pink-600 pt-4 pb-10 text-3xl font-bold text-center'>Link</h2>
                <ul className='text-white text-xl pl-6 pb-10'>
                    <li>1. Live Site Link: https://khushboo-faacc.web.app/</li>
                    <li>2. Client Side Link: https://github.com/rakibulislamrabby/khushboo-client</li>
                    <li>3. Server side Link: https://github.com/rakibulislamrabby/khushboo-backend</li>

                </ul>
            </div>
            <div className='mt-10 bg-[#13233a] rounded-lg lg:ml-10 '>
                <h2 className='text-pink-600 pt-4 pb-10 text-3xl font-bold text-center'>Project feature</h2>
                <ol className='text-white text-xl pl-6 pb-10'>
                    <li>1. This is warehouse website</li>
                    <li>2. It has many item and only 6 item show in the home page..</li>
                    <li>3. Home page is includig navbar banner and 6 items in my own database..</li>
                    <li>4. One button in bottom of items name Manage Item.When a user click here user goes to manage item route and showing all items in database.</li>
                    <li>5. User can add new item in the database.</li>
                    <li>6. And also user can delete a user.</li>
                    <li>7. And implement Authentication system.We Use Firebase in Register and login system.</li>
                </ol>
            </div>
        </div>
    );
};

export default Khushboo;