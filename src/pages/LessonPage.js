import React from "react";

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