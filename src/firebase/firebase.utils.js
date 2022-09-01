import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCDaXZDJfnopjKibbKOGErom0MWztpyi9g",
  authDomain: "crwn-db-bb922.firebaseapp.com",
  projectId: "crwn-db-bb922",
  storageBucket: "crwn-db-bb922.appspot.com",
  messagingSenderId: "130137565790",
  appId: "1:130137565790:web:20634699de931c9fbfa2cf",
  measurementId: "G-C4SN0GZX2E"
};
firebase.initializeApp( config );

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;