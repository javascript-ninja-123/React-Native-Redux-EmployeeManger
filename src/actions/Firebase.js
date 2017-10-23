import firebase from 'firebase';

const config = {
apiKey: "AIzaSyD5RLt_YwRnGcJcQOxcgDQ2tDXcm_FRbTw",
authDomain: "manager-b9843.firebaseapp.com",
databaseURL: "https://manager-b9843.firebaseio.com",
projectId: "manager-b9843",
storageBucket: "",
messagingSenderId: "24802955910"
};

firebase.initializeApp(config);

export const db = firebase.database();
export const auth = firebase.auth();
