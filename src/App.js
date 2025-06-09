// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase-config";

import PeriodicTable from "./components/PeriodicTable";
import LessonPage from "./pages/LessonPage";

function App() {
  const [user, setUser] = useState(null);

  // Đăng nhập Google
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        alert(`Đăng nhập thành công! Xin chào ${result.user.displayName}`);
      })
      .catch((error) => {
        alert("Lỗi đăng nhập: " + error.message);
      });
  };

  // Đăng xuất
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("Bạn đã đăng xuất.");
      })
      .catch((error) => {
        alert("Lỗi đăng xuất: " + error.message);
      });
  };

  // Giao diện chính
  return (
    <Router>
      <div style={{ textAlign: "center", paddingTop: 20 }}>
        <h1>Ứng dụng Học Tập</h1>

        {user ? (
          <>
            <p>Xin chào, {user.displayName}</p>
            <button onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <button onClick={handleLogin}>Đăng nhập bằng Google</button>
        )}
      </div>

      {/* Chỉ hiện bảng tuần hoàn và trang bài học nếu đã đăng nhập */}
      {user && (
        <Routes>
          <Route path="/" element={<PeriodicTable />} />
          <Route path="/lesson/:symbol" element={<LessonPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;