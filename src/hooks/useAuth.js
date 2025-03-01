import { auth, googleProvider, githubProvider } from "../lib/firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error.message);
  }
};

export const loginWithGithub = async () => {
  try {
    await signInWithPopup(auth, githubProvider);
  } catch (error) {
    console.error(error.message);
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
  }
};

export const registerWithEmail = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
  }
};
