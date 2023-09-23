//createUserWithEmailAndPassword
//signInWithEmailAndPassword
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase";

validationSchema: validationSchema,
onSubmit: async (values) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const user = userCredential.user;

    if (user && user.email) {
      dispatch(userLoginAction(values));
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
},

import { signInWithEmailAndPassword } from "firebase/auth"; 
validationSchema: validationSchema,
onSubmit: async (values) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const user = userCredential.user;

    if (user && user.email) {
      dispatch(userLoginAction(values));
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
},