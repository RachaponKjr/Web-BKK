document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger-menu");
    const menuOverlay = document.querySelector(".menumobile").parentElement;
    const closeButton = menuOverlay.querySelector("svg");
  
    // ซ่อนเมนูตอนเริ่มต้น
    menuOverlay.style.display = "none";
  
    // เมื่อกดปุ่มเมนู ให้แสดงเมนู
    menuButton.addEventListener("click", function () {
      menuOverlay.style.display = "block";
    });
  
    // เมื่อกดปุ่มปิด หรือคลิกนอกเมนู ให้ซ่อนเมนู
    closeButton.addEventListener("click", function () {
      menuOverlay.style.display = "none";
    });
  
    menuOverlay.addEventListener("click", function (event) {
      if (event.target === menuOverlay) {
        menuOverlay.style.display = "none";
      }
    });
  });
  