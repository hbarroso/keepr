import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAxWjcvfqu2FXqLyQAnaYYZP10ebOk-uV8',
  authDomain: 'crackling-torch-3933.firebaseapp.com',
  databaseURL: 'https://crackling-torch-3933.firebaseio.com',
  projectId: 'crackling-torch-3933',
  storageBucket: 'crackling-torch-3933.appspot.com',
  messagingSenderId: '969288953989'
}

export const firebaseApp = firebase.initializeApp(config)
export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
