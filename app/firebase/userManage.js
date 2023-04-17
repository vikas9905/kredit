/*eslint-disable*/
import auth from '@react-native-firebase/auth';
import React,{useState,useEffect} from 'react';
    const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login
  const onAuthStateChanged = (user) => {
    if (user) {
        console.log("user loged in");
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  const signInWithPhoneNumber = async (phoneNumber) => {
    console.log("number...",phoneNumber)
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  const confirmCode = async(code) => {
    try {
      const resp = await confirm.confirm(code);
      console.log(resp)
    } catch (error) {
      console.log('Invalid code.',error);
    }
  }

  export {signInWithPhoneNumber,confirmCode,}


