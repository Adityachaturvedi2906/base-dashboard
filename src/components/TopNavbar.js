import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const TopNavbar = () => {
	return (
		<div className='flex justify-between p-6'>
			<div>
				<h2 className='text-lg font-semibold'>Upload CSV</h2>
			</div>
			<div>
				<button className='px-4 text-lg'><i class="fa fa-bell-o" aria-hidden="true"></i></button>
				<button className='px-4 text-lg'><i class="fa fa-user-circle-o" aria-hidden="true"></i></button>
			</div>
		</div>
	)
}

export default TopNavbar