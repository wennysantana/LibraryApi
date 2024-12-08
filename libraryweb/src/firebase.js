// Importando as funções necessárias do Firebase
import { initializeApp, getApps } from "firebase/app"; // Adicionando a importação de getApps
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBcjj5nXTU9L0Zc22unRtd_cawwhYeldok",
  authDomain: "libraryapi-f2ae7.firebaseapp.com",
  projectId: "libraryapi-f2ae7",
  storageBucket: "libraryapi-f2ae7.firebasestorage.app",
  messagingSenderId: "904099412042",
  appId: "1:904099412042:web:5241a7f28749368b9b8eb3"
};

// Inicializando o Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Obtendo a instância do Firestore
const db = getFirestore(app);

// Exportando o db para ser utilizado em outros arquivos
export { db };
