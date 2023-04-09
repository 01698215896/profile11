// Lấy danh sách các slide
const slides = document.querySelectorAll('.feedback_listItem');
// Khai báo biến index hiện tại
let currentIndex = 0;

// Hàm ẩn slide hiện tại và hiển thị slide tiếp theo
function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  currentIndex = index;
}

// Xử lý sự kiện click cho button chuyển slide trái
document.querySelector('.len').addEventListener('click', function() {
  const nextIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  showSlide(nextIndex);
});

// Xử lý sự kiện click cho button chuyển slide phải
document.querySelector('.xuong').addEventListener('click', function() {
  const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  showSlide(nextIndex);
});

// Hiển thị slide đầu tiên
showSlide(currentIndex);