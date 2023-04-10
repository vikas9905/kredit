// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider ,RecaptchaVerifier, createUserWithEmailAndPassword,signInWithPhoneNumber} from "firebase/auth";
import Constants from 'expo-constants';
import firebase from 'firebase/compat/app';
// import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const signInWithGoogl = async () =>{
    try{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }catch(e){
        console.log(e)
    }
    
}

const signWithEmailPass = async () => {
    try{
        const resp = await createUserWithEmailAndPassword(auth, 'contact_vmishra@yahoo.com', '123456')
        console.log(resp)
    }catch(e){
        console.log(e)
    }
}
const recaptchaVerifier = null;
const signInWithNum = async (num,Verify) =>{
  const auth = getAuth()
    try{
        console.log("sending...",num)
        // console.log("verify",Verify)
        const resp = await signInWithPhoneNumber(auth, num, Verify)
        console.log(resp)
    }catch(e){
        console.log(e)
    }
}
const signInwithPhone = (num,verify) =>{
  const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(num,verify)
      .then((res)=>{
        console.log(res)
      });
}

export {auth,signInWithGoogl,signWithEmailPass,signInWithNum,firebaseConfig,signInwithPhone};