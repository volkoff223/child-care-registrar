// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyBs-YelFBjODMGM7E3F_VfhOm1DsXEAcDk',

	authDomain: 'child-care-registrar.firebaseapp.com',

	projectId: 'child-care-registrar',

	storageBucket: 'child-care-registrar.appspot.com',

	messagingSenderId: '696261837697',

	appId: '1:696261837697:web:6f2cf6596ed496b8a65e80',

	measurementId: 'G-BBSF7M80L6'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
