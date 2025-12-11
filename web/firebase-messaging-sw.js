importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBgQRm7PJdS9TU5tbhHBpLYtpNiNPSMjDc",
  authDomain: "ravolapp.firebaseapp.com",
  projectId: "ravolapp",
  storageBucket: "ravolapp.appspot.com",
  messagingSenderId: "652090209411",
  appId: "1:652090209411:web:6a5411a2f1875fa11097b6",
  databaseURL: "...",
});
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});