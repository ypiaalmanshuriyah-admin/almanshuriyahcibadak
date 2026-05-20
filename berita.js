import { db } from './firebase';

import {

  collection,
  getDocs

} from "firebase/firestore";

async function loadPosts() {

  const querySnapshot = await getDocs(
    collection(db, "posts")
  );

  querySnapshot.forEach((doc) => {

    console.log(doc.data());

  });

}

loadPosts();