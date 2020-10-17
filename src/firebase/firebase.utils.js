import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
    apiKey: "AIzaSyCKyW9b84Fe4LLSKLQWQOF1xk2Ptr-bGcg",
    authDomain: "projet-vente-a4a97.firebaseapp.com",
    databaseURL: "https://projet-vente-a4a97.firebaseio.com",
    projectId: "projet-vente-a4a97",
    storageBucket: "projet-vente-a4a97.appspot.com",
    messagingSenderId: "475277708499",
    appId: "1:475277708499:web:ad83213a5e57e573931826",
    measurementId: "G-BES56EX597"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const loginAvecGoogle = () => auth.signInWithPopup(provider)



export default firebase