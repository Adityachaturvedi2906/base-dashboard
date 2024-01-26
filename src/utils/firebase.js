// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCaSDVHSjWF9Adw7iYM_xraUgHeKzsOxPs",
	authDomain: "ui-base-dashboard.firebaseapp.com",
	projectId: "ui-base-dashboard",
	storageBucket: "ui-base-dashboard.appspot.com",
	messagingSenderId: "105691419269",
	appId: "1:105691419269:web:cc25705a9c2f2cf9e70fec",
	measurementId: "G-F3L9MVPST2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();