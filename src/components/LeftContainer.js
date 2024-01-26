import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";


const LeftContainer = () => {
	return (
		<div className='bg-[#605BFF] h-[100vh] flex flex-col justify-between'>
			<div className='p-10'>
				<svg width="72" height="81" viewBox="0 0 87 81" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="44.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
					<path d="M2.02979 37.0531L32.0871 51.7478L58.8048 29.7058L84.8545 43.0646" stroke="#605BFF" stroke-width="6" />
				</svg>

			</div>
			<div className='flex flex-col justify-center items-center '>
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
