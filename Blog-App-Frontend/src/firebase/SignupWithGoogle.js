import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const signInWithGooglePopup = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
      //  const token = credential.accessToken;
        const user = result.user;
        const uId =user.uid;
        localStorage.setItem('user', uId);
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};





