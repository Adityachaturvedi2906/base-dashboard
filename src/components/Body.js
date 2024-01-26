// components/Body.js
import React from 'react';
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';
import { Outlet } from 'react-router-dom';

const Body = () => (
	<React.Fragment>
		<div className='flex'>
			<div className='w-2/12'>
				<SideNavbar />
			</div>
			<div className='w-10/12 bg-[#FAFAFB]'>
				<TopNavbar />
				<Outlet />
			</div>
		</div>
	</React.Fragment>
);

export default Body;
