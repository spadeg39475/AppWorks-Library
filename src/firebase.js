import firebase from 'firebase/app';
import firebaseConfigValue from './firebaseConfig'
import "firebase/firestore";


const firebaseConfig = {
    apiKey: firebaseConfigValue.apiKey,
    authDomain: firebaseConfigValue.author,
    databaseURL: firebaseConfigValue.databaseURL,
    projectId: firebaseConfigValue.projectId,
    storageBucket: firebaseConfigValue.storageBucket,
    messagingSenderId: firebaseConfigValue.messagingSenderId,
    appId: firebaseConfigValue.appId
}

class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
    }

    getBooksByTitle = (title) =>{
        return new Promise((resolve, reject) => {
            this.db.collection('booklist').where('title', '==', title)
            .orderBy('author')
            .get()
            .then((items) =>{
               let returnData =[];
               items.forEach((item) => {
                   returnData.push({
                       id: item.id,
                       title: item.data().title,
                       author: item.data().author,
                       status: item.data().status
                    })
               })
               resolve(returnData) 
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                reject(error);
            })
        })
    }

    getBooksByAuthor = (author) =>{
        return new Promise((resolve, reject) => {
            this.db.collection('booklist').where('author', '==', author)
            .orderBy('title')
            .get()
            .then((items) =>{
               let returnData =[];
               items.forEach((item) => {
                   returnData.push({
                       id: item.id,
                       title: item.data().title,
                       author: item.data().author,
                       status: item.data().status
                    })
               })
               resolve(returnData) 
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                reject(error);
            })
        })
    }


    getBookById = (id) => {
        return new Promise((resolve, reject) => {
            this.db.collection('booklist').doc(id)
            .get()
            .then((item) => {
                resolve(item.data());
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                reject(error);
            })
        })
    }

    // set borrow status
    setBookStatus = (id, status) => {
        return new Promise((resolve, reject) => {
            this.db.collection('booklist').doc(id).update({status: status })
            .then(() => {
                resolve(status)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                reject(error);
            })
        })
    }

}

export default new Firebase();