import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBOuVim2ABTswgW1yG_BE6OKTN1yY0Q_Ps",
    authDomain: "e-bookalypse.firebaseapp.com",
    projectId: "e-bookalypse",
    storageBucket: "e-bookalypse.appspot.com",
    messagingSenderId: "929048486935",
    appId: "1:929048486935:web:44f1d45b73a273b3886852",
    measurementId: "G-Q56VX7NGC8"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage();
export default storage;