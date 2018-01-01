import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyDPpptnnFwboX5Wa1CbfX1n61Ii7ZxCOzw',
  authDomain: 'simple-article-edit.firebaseapp.com',
  databaseURL: 'https://simple-article-edit.firebaseio.com',
  projectId: 'simple-article-edit',
  storageBucket: 'simple-article-edit.appspot.com',
  messagingSenderId: '884103850818',
});

export default app.database();
