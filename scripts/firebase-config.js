<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDUYXwvQGNvG7FF1hmEY8T-nvtpnXCaWkI",
    authDomain: "instant-n1.firebaseapp.com",
    projectId: "instant-n1",
    storageBucket: "instant-n1.firebasestorage.app",
    messagingSenderId: "536848004939",
    appId: "1:536848004939:web:313de5f5478ee1870bdace",
    measurementId: "G-4YKGJN1W46"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>