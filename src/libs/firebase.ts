import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD8GvCunJtsVnKtnz1fdE37Ltyz-5M8Z_g",
  authDomain: "gallery-93da9.firebaseapp.com",
  projectId: "gallery-93da9",
  storageBucket: "gallery-93da9.appspot.com",
  messagingSenderId: "268722590461",
  appId: "1:268722590461:web:66c1070fa2bc4e58ca2494"
};
  
  const firebaseApp = initializeApp(firebaseConfig);
  export const storage = getStorage(firebaseApp)