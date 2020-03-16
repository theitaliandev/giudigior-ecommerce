import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA897T3YItkMzpecvxL5NnhrnE8NofgzfA",
  authDomain: "reactreduxfirebaseecommerce.firebaseapp.com",
  databaseURL: "https://reactreduxfirebaseecommerce.firebaseio.com",
  projectId: "reactreduxfirebaseecommerce",
  storageBucket: "reactreduxfirebaseecommerce.appspot.com",
  messagingSenderId: "287631507234",
  appId: "1:287631507234:web:9f0c5a359e8775107bef7b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signIn = () => auth.signInWithPopup(provider);
export const createUserDocument = async authUser => {
  if (!authUser) return;
  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;
