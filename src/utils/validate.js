export const checkValidData = (email, password, fullName) => {

	// const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(fullName)

	const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

	const isPasswordValid = /^()$/.test(password)

	// if (!isNameValid) return "Name is not valid";
	if (!isEmailValid) return "Email ID is not valid";
	if (!isPasswordValid) return "Password is not valid";
	return null;

}