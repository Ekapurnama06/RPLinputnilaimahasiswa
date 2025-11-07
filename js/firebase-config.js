// js/firebase-config.js

/**
 * @fileoverview Modul ini berisi konfigurasi inisialisasi Firebase menggunakan gaya Compat (v8).
 * Catatan: Variabel 'db' harus dideklarasikan dengan 'var' atau diakses secara global agar terlihat di modul lain.
 */

const firebaseConfig = {
  apiKey: "AIzaSyCD0YIa97QYHx66QtxRgjJ5FE5E2Mi6N3E",
  authDomain: "inputnilaimahasiswa-c7634.firebaseapp.com",
  projectId: "inputnilaimahasiswa-c7634",
  storageBucket: "inputnilaimahasiswa-c7634.firebasestorage.app",
  messagingSenderId: "218015118409",
  appId: "1:218015118409:web:f87d6d27240e94413ffb98",
  measurementId: "G-ZFH883MW36"
};


// Inisialisasi Firebase (Gaya Compat)
firebase.initializeApp(firebaseConfig);

// Inisialisasi Cloud Firestore dan menjadikannya variabel global
var db = firebase.firestore();