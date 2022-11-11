//importando o firebase
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

//gerado automatico no firebase
const firebaseConfig = {
  apiKey: "AIzaSyBEslN_rwg_kaKZHIr4WAFEyF-Sh2Q31wE",
  authDomain: "kabehlink.firebaseapp.com",
  projectId: "kabehlink",
  storageBucket: "kabehlink.appspot.com",
  messagingSenderId: "680264822323",
  appId: "1:680264822323:web:32cce345da0943add13d46",
  measurementId: "G-34HSHGWG1L"
};
//definindo as conts para o firebase
const firebaseApp = initializeApp(firebaseConfig);
const db =  getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

//exportando os serviços banco e auth
export {db, auth};
