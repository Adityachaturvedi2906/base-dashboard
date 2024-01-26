import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { checkValidData } from '../utils/validate';


const RightContainer = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const navigate = useNavigate();

	const handleButtonClick = () => {
		let message;
		if (!isSignInForm) {
			message = checkValidData(email.current.value, password.current.value);
			setErrorMessage(message);
		} else {
			message = checkValidData(email.current.value, password.current.value);
			setErrorMessage(message);
		}

		if (message) return;

		if (!isSignInForm) {
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value
					}).then(() => {
						setIsSignInForm(!isSignInForm);
					}).catch((error) => {
						setErrorMessage(error.message)
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode + "-" + errorMessage);
				});
		} else {
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					const user = userCredential.user;
					navigate("/home")
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage("User Not Found! Kindly Register")
					console.log(errorCode + " - " + errorMessage);
				});
		}

	}

	const toggleSignInForm = () => {
		setErrorMessage("");
		setIsSignInForm(!isSignInForm);
	}
	return (
		<div className='bg-[#F8FAFF] h-[100vh] flex justify-start flex-row items-center'>
			<form onSubmit={(e) => e.preventDefault()} className='w-10/12 right-0 left-0 p-20 text-white'>
				<div className='py-4'>
					<h1 className='font-bold text-3xl text-black'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
					<p className='text-md text-black py-2'>{isSignInForm ? "Sign in to your account" : "Sign up to your account"}</p>
				</div>
				<div className='bg-white rounded-xl p-6'>
					{!isSignInForm &&
						<div className='py-1'>
							<label className='text-black font-semibold text-sm'>Name</label>
							<input ref={name} type="text" placeholder='Full Name' className='bg-[#EAEAEA] p-2 my-1 w-full rounded-lg text-black' />
						</div>
					}
					<div className='py-1'>
						<label className='text-black font-semibold text-sm'>Email address</label>
						<input ref={email} type="email" placeholder='johndoe@gmail.com' className='bg-[#EAEAEA] p-2 my-1 w-full rounded-lg text-black' />
					</div>
					<div className='py-1'>
						<label className='text-black font-semibold text-sm'>Password</label>
						<input ref={password} type="password" placeholder='••••••••' className='bg-[#EAEAEA] p-2 my-1 w-full rounded-lg text-black' />
					</div>
					{errorMessage && <p className='text-red-500 font-semibold text-lg py-3'>{errorMessage}</p>}
					{isSignInForm && <p className='py-1 text-sm cursor-pointer text-[#605BFF]'>Forgot password?</p>}
					<button className='p-2 my-4 bg-[#605BFF] w-full rounded-lg text-white font-bold text-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
				</div>
				{isSignInForm ? <p className='text-center py-1 text-sm cursor-pointer text-[#858585]' onClick={toggleSignInForm}>Don’t have an account? <span className='text-[#605BFF]'>Register here</span></p> : <p className=' cursor-pointer text-center text-[#858585]' onClick={toggleSignInForm}>Already registered?  <span className='text-[#605BFF]'>Sign In Now</span></p>}
			</form>
		</div>
	)
}

export default RightContainer;
