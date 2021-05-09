import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'

export const firebaseConfigFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn = () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(GoogleProvider)
      .then(res => {
        const {email, displayName, photoURL } = res.user;
        const signedInUser = {
           isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true,
        }
          return signedInUser;
      })
      .catch(error => {
        console.log(error);
        console.log(error.message);
    })
}
  

export const handleFacebookSignIn = () => {
    const FbProvider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(FbProvider)
    .then( result => {
        const user = result.user;
        user.success = true;
        return user;
    })
    .catch((error) => {
      console.log(error);
    });
}
  


export const handleSignOut = () => {
   return firebase.auth()
      .signOut()
      .then(() => {
      const signedOutUser = {
           isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            password: '',
      }
          return signedOutUser;
    })
      .catch((error) => {
        console.log(error);
      console.log(error.message);
    });
}
  


export const createUserWithEmailAndPassword = (name, email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
            return newUserInfo;
        })
      .catch( error => {
        const newUserInfo = { }
        newUserInfo.error = error.message;
          newUserInfo.success = false;
          return newUserInfo;
      });
}


export const signInWithEmailAndPassword = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
      .then( res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
          return newUserInfo;
      })
      .catch((error) => {
        const newUserInfo = {}
        newUserInfo.error = error.message;
        newUserInfo.success = false;
          return newUserInfo;
      });
}