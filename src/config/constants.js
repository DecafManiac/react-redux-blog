import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBS5TtCsI-4kklMiwvUY38CTgczTL6DWJY",
  authDomain: "blog-auth-c1acf.firebaseapp.com",
  databaseURL: "https://blog-auth-c1acf.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth