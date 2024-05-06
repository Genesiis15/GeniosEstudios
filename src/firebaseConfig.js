import  { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDSVZL1LUptVkds8SXf4a1VqqjRepbsYJY",
  authDomain: "genios-a4702.firebaseapp.com",
  projectId: "genios-a4702",
  storageBucket: "genios-a4702.appspot.com",
  messagingSenderId: "998752731884",
  appId: "1:998752731884:web:46d17bee4b031031415bc9"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




export const handleSignOut = () => {
  signOut(auth)
};