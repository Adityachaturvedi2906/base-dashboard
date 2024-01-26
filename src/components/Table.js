import React from 'react';
import { Link } from 'react-router-dom';
const Table = ({ data }) => {
	return (
		<table>
			<thead>
				<tr>
					<th className='px-14'>ID</th>
					<th className='px-14'>Links</th>
					<th className='px-14'>Prefix</th>
					<th className='px-14'>Select Tags</th>
					<th className='px-14'>Selected Tags</th>
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => (
					<tr key={index} className='bg-white'>
						<td className='px-14'>{row.id}</td>
						<td className='text-blue-400 underline py-3'>
							<Link to={row.links} className='px-6 py-4'>{row.links}</Link>
						</td>
						<td className='px-10'>{row.prefix}</td>
						<td className='px-20'>
							{/* Assuming "select tags" is an array */}
							<select>
								{row.selectTags && row.selectTags.split(',').map((tag, tagIndex) => (
									<option key={tagIndex}>{tag}</option>
								))}
							</select>
						</td>
						<td>
							{/* Check if 'selectedTags' is defined before splitting */}
							{row.selectedTags && typeof row.selectedTags === 'string' &&
								row.selectedTags.split(',').map((tag, tagIndex) => (
									<div key={tagIndex} className="tag">
										{tag.trim()} <button className="cross-button">&#10006;</button>
									</div>
								))}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
