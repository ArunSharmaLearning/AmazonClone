import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
       
            apiKey: "AIzaSyBxw3da7mnhxztgfHyu8yRbLGmmTd7mIdc",
            authDomain: "commerce-ad2b0.firebaseapp.com",
            databaseURL: "https://commerce-ad2b0.firebaseio.com",
            projectId: "commerce-ad2b0",
            storageBucket: "commerce-ad2b0.appspot.com",
            messagingSenderId: "1077189075895",
            appId: "1:1077189075895:web:a6fce5070993321ab3be32",
            measurementId: "G-H5Z9EREL5Q"
          
        
    }
)

const auth = firebase.auth()

export { auth }