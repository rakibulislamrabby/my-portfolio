import React from 'react';
import image from "../assets/profile.png"
const AboutMe = () => {
    return (
        <div className='w-full h-screen bg-[#0a192f]'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pl-20'>
                        <h1 class="text-5xl font-bold text-white">Hi, I am Web Developer</h1>
                        <p class="py-6 text-white">I am Rakibul Islam. I am continuing my BSc in computer science and engineering at Green
                            university. I am very passionate about my web development career. my favorite
                            programming language is javascript and I am enjoying working in react js. And also
                            comfortable of using node and express js. In addition to my web development work, I love to
                            play and watch sports.</p>
                        <p class="py-6 text-white">I am an Expert in Front End Technology like HTML, CSS, Bootstrap, Tailwind, and ReactJs. And also comfortable with back-end technology like Node Js and Express Js. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;