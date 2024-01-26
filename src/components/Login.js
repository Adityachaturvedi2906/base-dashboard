import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const Login = () => {
	return (
		<React.Fragment>
			<div className='flex'>
				<div className='w-6/12'><LeftContainer /></div>
				<div className='w-6/12'><RightContainer /></div>
			</div>
		</React.Fragment>
	)
}

export default Login