import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";


const LeftContainer = () => {
	return (
		<div className='bg-[#605BFF] h-[100vh] flex flex-col justify-between'>
			<div className='flex flex-col justify-center items-center mt-[45%]'>
				<h1 className='text-white text-7xl font-bold leading-10'>BASE</h1>
			</div>
			<div className='flex justify-center items-center py-10'>
				<button className='text-white text-3xl mx-5'><FaGithub /></button>
				<button className='text-white text-3xl mx-5'><FaTwitter /></button>
				<button className='text-white text-3xl mx-5'><FaLinkedin /></button>
				<button className='text-white text-3xl mx-5'><FaDiscord /></button>
			</div>
		</div>
	);
}

export default LeftContainer;
