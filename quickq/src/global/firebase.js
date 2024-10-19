// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnDT3fL6zxbeoeXtVYzGZKn8TlFIglSkM",
    authDomain: "quickq-17384.firebaseapp.com",
    databaseURL: "https://quickq-17384-default-rtdb.firebaseio.com",
    projectId: "quickq-17384",
    storageBucket: "quickq-17384.appspot.com",
    messagingSenderId: "897266611569",
    appId: "1:897266611569:web:a93f4925493113c550f2d0",
    measurementId: "G-TZSFK32S2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);