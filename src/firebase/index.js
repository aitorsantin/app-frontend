import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvtZnRsl3J11UVbqPC-ki1-EL9igR-mVc",
    authDomain: "ecomerce-d1495.firebaseapp.com",
    projectId: "ecomerce-d1495",
    storageBucket: "ecomerce-d1495.appspot.com",
    messagingSenderId: "267497281701",
    appId: "1:267497281701:web:607b9016fe425ca4af154c"
  };

  const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  //funcion para subir imagenes
  export const uploadImage = (file) =>{
      return new Promise((resolve, eject)=>{
          //Se va a subir el archivo a firebase a la carpeta images
        const uploadProcess = storage.ref(`images/${file.name}-${file.lastModified}`)
        .put(file);
        uploadProcess.on("state_change"), (snapshot) => console.log("la imagen se esta subiendo", snapshot), reject, 
        () => {
            //obtendremos una url de la imagen para publicarlo en react
            storage.ref('images').child(`${file.name}-${file.lastModified}`).getDownloadURL().then(resolve);
        }

      });
  }