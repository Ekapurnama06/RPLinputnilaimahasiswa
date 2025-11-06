// Konfigurasi koneksi Firebase (Dapatkan dari Firebase Console Anda)
const firebaseConfig = {
  apiKey: "AIzaSyCB3g-ElhXU1VR7ZyvrMnSEmWYochP2w1w",
    authDomain: "aplikasiinputnilaimahasiswa.firebaseapp.com",
    projectId: "aplikasiinputnilaimahasiswa",
    storageBucket: "aplikasiinputnilaimahasiswa.firebasestorage.app",
    messagingSenderId: "1068340165425",
    appId: "1:1068340165425:web:d2856e3337550e07d58e10",
    measurementId: "G-3B96ZB3W6V"
};

// Inisialisasi Firebase
// Inisialisasi harus dilakukan sekali
const app = firebase.initializeApp(firebaseConfig);

// Ambil referensi ke Cloud Firestore
// Variabel db ini akan digunakan di logic.js
const db = firebase.firestore();