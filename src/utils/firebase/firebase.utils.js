import { initializeApp } from 'firebase/app';
import { getAuth, sigInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCrb5jXzNr6yE92vmZUuOLKVnEp1Bn1bsU",
  authDomain: "crwn-clothing-db-f756b.firebaseapp.com",
  projectId: "crwn-clothing-db-f756b",
  storageBucket: "crwn-clothing-db-f756b.appspot.com",
  messagingSenderId: "1067813645722",
  appId: "1:1067813645722:web:96ec1a20f69c6d27dc9e23"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;

  //if user data does not exist
  //create / set the document with the data from userAuth in my collection

  //if user data exists

  //return userDocRef
};