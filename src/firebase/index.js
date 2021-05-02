import firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp ({
    apiKey: "AIzaSyB63ly_Oj3EN4xMKDsFlJbl2Ga6c4epzUo",
    authDomain: "ecommerce-bender.firebaseapp.com",
    projectId: "ecommerce-bender",
    storageBucket: "ecommerce-bender.appspot.com",
    messagingSenderId: "1075142073018",
    appId: "1:1075142073018:web:612add26c30a6d315f8083"
})

// funciones
export const getFirebase =  () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}