
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA6oFZicDrHoSLEg8SqIjFa9iOygfTae5Q",
    authDomain: "email-valitetion.firebaseapp.com",
    projectId: "email-valitetion",
    storageBucket: "email-valitetion.appspot.com",
    messagingSenderId: "161745901386",
    appId: "1:161745901386:web:4ef05e8baa4471ea3693b3"
};


const app = initializeApp(firebaseConfig);

export default app;