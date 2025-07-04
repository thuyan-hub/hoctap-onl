import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//BANG TUAN HOAN
function LessonPage({ element }) {
  if (!element) return <p>Chọn một nguyên tố để xem bài học</p>;

  return (
    <div>
      <h2>Bài học về {element.name} ({element.symbol})</h2>
      <p>Số hiệu nguyên tử: {element.number}</p>
      {/* Thêm nội dung bài học ở đây */}
    </div>
  );
}

export default LessonPage;