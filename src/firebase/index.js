import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvtZnRsl3J11UVbqPC-ki1-EL9igR-mVc",
    authDomain: "ecomerce-d1495.firebaseapp.com",
    projectId: "ecomerce-d1495",
    storageBucket: "ecomerce-d1495.appspot.com",
    messagingSenderId: "267497281701",
    appId: "1:267497281701:web:607b9016fe425ca4af154c"
  };

  const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

  //funcion para subir imagenes
  export const uploadImage = (file) =>{
    return new Promise((resolve, eject) => {
      const uploadProcess = storage
        .ref(`images/${file.name}-${file.lastModified}`)
        .put(file);
  
      uploadProcess.on(
        "state_changed",
        (snapshot) => console.log("la imagen se esta subiendo", snapshot),
        eject,
        () => {
          console.log("enter", file);
          storage
            .ref("images")
            .child(`${file.name}-${file.lastModified}`)
            .getDownloadURL()
            .then(resolve);
        }
      );
    });
  }