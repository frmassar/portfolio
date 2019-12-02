import firebase from 'firebase';
import Rebase from 're-base'

var config={
    apiKey: "AIzaSyAGgnQYh_Jf3gBk-Spq2icmce7oD3eIM34",
    authDomain: "portfolio-85f30.firebaseapp.com",
    databaseURL: "https://portfolio-85f30.firebaseio.com",
    projectId: "portfolio-85f30",
    storageBucket: "portfolio-85f30.appspot.com",
    messagingSenderId: "420778591039",
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export {base}