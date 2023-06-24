import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6ps5ti93GkOVrWOXeoSTA8LgRoXH2K1w",
  authDomain: "ezysale-db.firebaseapp.com",
  projectId: "ezysale-db",
  storageBucket: "ezysale-db.appspot.com",
  messagingSenderId: "895741096503",
  appId: "1:895741096503:web:3e4ef40bc4477c43d145b2",
  measurementId: "G-NS8LC37FVC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signinWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signnWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((docSnapshot) => docSnapshot.data())

};






export const getHomeScreencategories = async () => {
  const collectionRef = collection(db, "home page categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const categories = querySnapShot.docs.data();

  return categories;
};

export const createUserDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
