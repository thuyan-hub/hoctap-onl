// src/firebase-config.js

// Import các hàm cần thiết từ Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Cấu hình Firebase lấy từ Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCDL8jc2s5kK5XW5irq6yAb8ng6FkX3nSQ",
  authDomain: "ung-dung-hoc-tap-5c418.firebaseapp.com",
  projectId: "ung-dung-hoc-tap-5c418",
  storageBucket: "ung-dung-hoc-tap-5c418.appspot.com", // chú ý: phải đúng đuôi .appspot.com
  messagingSenderId: "306252345775",
  appId: "1:306252345775:web:abfc3e32d9eb2f3cdeff5a",
  measurementId: "G-NCH2L2BBLH",
};

// Khởi tạo Firebase app
const app = initializeApp(firebaseConfig);

// Khởi tạo Analytics (nếu bạn dùng, không thì có thể bỏ dòng này)
const analytics = getAnalytics(app);

// Khởi tạo Firebase Authentication và Provider Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Xuất các biến để sử dụng ở nơi khác
export { auth, provider };