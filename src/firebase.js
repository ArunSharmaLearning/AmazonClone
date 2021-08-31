import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
       
        apiKey: "AIzaSyDKmQD3V14jXmG8zHDIbqrsC3zD2Tzob3g",
        authDomain: "clone-f2b29.firebaseapp.com",
        projectId: "clone-f2b29",
        storageBucket: "clone-f2b29.appspot.com",
        messagingSenderId: "925141906749",
        appId: "1:925141906749:web:1553841af178a0d52ac154",
        measurementId: "G-EE2G68EYQD"
        
    }
)

const auth = firebase.auth()

export { auth }