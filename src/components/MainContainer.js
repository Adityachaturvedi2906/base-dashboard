import React, { useState } from 'react'
import Uploader from './Uploader'
// import Table from './Table'

const MainContainer = () => {
	const [data, setData] = useState(null);
	return (
		<div className=''>
			<div><Uploader setData={setData} /></div>
		</div>
	)
}

export default MainContainer