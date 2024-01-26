import React, { useState } from 'react';
import { read, utils } from 'xlsx';
import Table from './Table';

const Uploader = () => {
	const [fileName, setFileName] = useState(null);
	const [fileData, setFileData] = useState(null);
	const [loading, setLoading] = useState(false);

	const isUploadDisabled = !fileName || loading;

	const handleFileChange = async (e) => {
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			setFileName(selectedFile.name);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();

		const droppedFile = e.dataTransfer.files[0];

		const name = droppedFile.name;

		setFileName(name);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleRemove = (e) => {
		e.stopPropagation();
		document.querySelector('.input-field').value = null;
		setFileName(null);
		setFileData(null);
	};

	const handleUpload = async () => {
		if (!fileName) {
			return;
		}

		setLoading(true);

		const selectedFile = document.querySelector('.input-field').files[0];

		if (selectedFile) {
			const reader = new FileReader();
			reader.onload = async (event) => {
				const binaryString = event.target.result;
				const workbook = read(binaryString, { type: 'binary' });
				const sheet = workbook.Sheets[workbook.SheetNames[0]];
				const jsonData = utils.sheet_to_json(sheet, { header: 1 });

				const headers = jsonData[0];
				const data = jsonData.slice(1).map((row) => {
					return headers.reduce((acc, header, index) => {
						acc[header] = row[index];
						return acc;
					}, {});
				});

				setFileData(data);
				setLoading(false);
			};

			reader.readAsBinaryString(selectedFile);
		}
	};

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='bg-[#FFFFFF] p-4 rounded-lg w-6/12'>
				<div
					className='border-[1px] border-dashed rounded-lg border-gray-300 p-10'
					onClick={() => document.querySelector('.input-field').click()}
					onDrop={handleDrop}
					onDragOver={handleDragOver}
				>
					<input type='file' accept='.csv' className='input-field' hidden onChange={handleFileChange} />
					<div className='flex flex-col justify-center items-center'>
						<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_22_2396)">
								<path d="M18.7801 13.2998L6.95557 11.1998V26.7167C6.95557 27.4253 7.52638 27.9998 8.23053 27.9998H28.6341C29.3382 27.9998 29.9091 27.4253 29.9091 26.7167V20.9998L18.7801 13.2998Z" fill="#185C37" />
								<path d="M18.7801 0H8.23053C7.52638 0 6.95557 0.57446 6.95557 1.2831V7L18.7801 14L25.0401 16.1L29.9091 14V7L18.7801 0Z" fill="#21A366" />
								<path d="M6.95557 7H18.7801V14H6.95557V7Z" fill="#107C41" />
								<path opacity="0.1" d="M15.4185 5.60049H6.95557V23.1005H15.4185C16.1216 23.0982 16.6911 22.5251 16.6934 21.8174V6.88359C16.6911 6.17591 16.1216 5.60279 15.4185 5.60049Z" fill="black" />
								<path opacity="0.2" d="M14.7229 6.30025H6.95557V23.8002H14.7229C15.4261 23.7979 15.9956 23.2248 15.9978 22.5171V7.58334C15.9956 6.87567 15.4261 6.30255 14.7229 6.30025Z" fill="black" />
								<path opacity="0.2" d="M14.7229 6.30025H6.95557V22.4002H14.7229C15.4261 22.3979 15.9956 21.8248 15.9978 21.1172V7.58334C15.9956 6.87567 15.4261 6.30255 14.7229 6.30025Z" fill="black" />
								<path opacity="0.2" d="M14.0273 6.30025H6.95557V22.4002H14.0273C14.7305 22.3979 15.3 21.8248 15.3023 21.1172V7.58334C15.3 6.87567 14.7305 6.30255 14.0273 6.30025Z" fill="black" />
								<path d="M1.27496 6.30025H14.0274C14.7315 6.30025 15.3023 6.87471 15.3023 7.58334V20.4171C15.3023 21.1258 14.7315 21.7002 14.0274 21.7002H1.27496C0.570817 21.7002 0 21.1258 0 20.4171V7.58334C0 6.87471 0.570817 6.30025 1.27496 6.30025Z" fill="url(#paint0_linear_22_2396)" />
								<path d="M3.94873 18.1706L6.63081 13.9881L4.1734 9.82869H6.15018L7.49122 12.4887C7.61503 12.7414 7.69988 12.929 7.7458 13.0529H7.76318C7.85129 12.8513 7.94403 12.6555 8.04141 12.4656L9.47495 9.8301H11.2897L8.76965 13.965L11.3537 18.1706H9.4228L7.87378 15.2509C7.80081 15.1267 7.7389 14.9962 7.68877 14.861H7.66582C7.62044 14.9934 7.56024 15.1203 7.48636 15.239L5.89144 18.1706H3.94873Z" fill="white" />
								<path d="M28.634 0H18.78V7H29.909V1.2831C29.909 0.57446 29.3382 0 28.634 0Z" fill="#33C481" />
								<path d="M18.78 14H29.909V21H18.78V14Z" fill="#107C41" />
							</g>
							<defs>
								<linearGradient id="paint0_linear_22_2396" x1="2.65832" y1="5.29766" x2="12.7396" y2="22.6473" gradientUnits="userSpaceOnUse">
									<stop stop-color="#18884F" />
									<stop offset="0.5" stop-color="#117E43" />
									<stop offset="1" stop-color="#0B6631" />
								</linearGradient>
								<clipPath id="clip0_22_2396">
									<rect width="29.9091" height="28" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<p className='py-3'>{fileName ? `${fileName}` :
							<h2 className='text-gray-400'>Drop your excel sheet here or <span className='text-[#605BFF] cursor-pointer'>Browse</span></h2>
						}</p>
						{fileName && (
							<button className='text-red-500' onClick={handleRemove}>
								Remove
							</button>
						)}
					</div>
				</div>
				<button
					className={`bg-[#605BFF] rounded-lg w-full p-4 text-white mt-3 ${isUploadDisabled && 'opacity-50 cursor-not-allowed'}`}
					onClick={handleUpload}
					disabled={isUploadDisabled}
				>
					{loading ? (
						<span>
							<i class="fa fa-circle-o-notch" aria-hidden="true"></i>
						</span>
					) : (
						<span>
							<i className='fa fa-upload pe-3' aria-hidden='true'></i>Upload
						</span>
					)}
				</button>
			</div>
			<div className='flex flex-col w-10/12'>
				{fileData &&
					<div>
						<h2 className='text-xl font-semibold py-4'>Uploads</h2>
						<div className=' bg-[#F5F5F5] p-4'> <Table data={fileData} /></div>
					</div>}
			</div>
		</div>
	);
};

export default Uploader;
