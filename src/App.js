// src/App.js
import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase-config";

function App() {
  const [user, setUser] = useState(null);

  // Hàm đăng nhập Google
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

  // Hàm đăng xuất
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

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
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
  );
}

export default App;