import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from "../assets/logo3.png"
import resume from "../assets/resume.pdf"
// import { Link } from 'react-scroll';
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#08192f] text-gray-300'>
            <div>
                <img className='w-60' src={logo} alt="Logo" />
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <Link to='/' >
                            Home
                        </Link>
                    </li>
                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <a href='#about' smooth={true} duration={500}>
                            About
                        </a>
                    </li>
                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <a href='#skills' smooth={true} duration={500}>
                            Skills
                        </a>
                    </li>
                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <a href='#project' smooth={true} duration={500}>
                            Projects
                        </a>
                    </li>
                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <a href='#contact' smooth={true} duration={500}>
                            Contact
                        </a>
                    </li>
                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <Link to="/blog" smooth={true} duration={500}>
                            Blog
                        </Link>
                    </li>
                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <Link to="/aboutMe">
                            About Me
                        </Link>
                    </li>

                    <li className='hover:bg-pink-600 p-3 rounded-xl font-bold'>
                        <a download="Resume Of Md Rakibul Islam"
                            href={resume}>Download Resume</a>

                    </li>
                </ul>
            </div>
            {/* hamberger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={
                !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }>

                <li className='py-6 text-3xl' >
                    <Link to='/' onClick={handleClick} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-3xl' >
                    <a href='#about' onClick={handleClick} smooth={true} duration={500}>
                        About
                    </a>
                </li>
                <li className='py-6 text-3xl' >
                    <a href='#skills' onClick={handleClick} smooth={true} duration={500}>
                        Skills
                    </a>
                </li>
                <li className='py-6 text-3xl' >
                    <a href='#project' onClick={handleClick} smooth={true} duration={500}>
                        Projects
                    </a>
                </li>
                <li className='py-6 text-3xl' >
                    <a href='#contact' onClick={handleClick} smooth={true} duration={500}>
                        Contact
                    </a>
                </li>
                <li className='py-6 text-3xl' >
                    <Link to="/blog" onClick={handleClick} smooth={true} duration={500}>
                        Blog
                    </Link>
                    <Link to="/aboutMe" onClick={handleClick} smooth={true} duration={500}>
                        About Me
                    </Link>
                </li>
                <li className='py-6 text-3xl' >
                    <a onClick={handleClick} download="Resume Of Md Rakibul Islam"
                        href={resume}>Download Resume</a>
                </li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            target="_blank"
                            href='https://www.linkedin.com/in/mdrakibulislam6/'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            target="_blank"
                            href='https://github.com/rakibulislamrabby'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            target="_blank"
                            href='https://mail.google.com/'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            download="Resume Of Md Rakibul Islam"
                            // target="_blank"
                            href={resume}
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;