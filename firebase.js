import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCATGNAyhBFAwx_zuocr99yq3guKCLDZGs",
  authDomain: "almanshuriyahcibadak-df616.firebaseapp.com",
  projectId: "almanshuriyahcibadak-df616",
  appId: "1:683338470732:web:4a2072c4b9aa5f444eabe9"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);