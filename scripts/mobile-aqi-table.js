document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-info-btn");

    toggleButtons.forEach((toggleButton) => {
        // ใช้ closest เพื่อหาคอนเทนเนอร์ที่เกี่ยวข้อง
        const infoDetail = toggleButton.closest(".flex-column").querySelector(".info-detail");

        // ซ่อน info-detail ตั้งแต่เริ่มต้น
        infoDetail.style.display = "none";

        // เพิ่ม event listener ให้กับปุ่ม
        toggleButton.addEventListener("click", function () {
            // ตรวจสอบว่า info-detail ถูกแสดงหรือซ่อนอยู่
            if (infoDetail.style.display === "none") {
                // แสดง info-detail และเปลี่ยนไอคอน
                infoDetail.style.display = "block";
                toggleButton.src = "/svg/close.svg"; // เปลี่ยนเป็นไอคอนปิด
            } else {
                // ซ่อน info-detail และเปลี่ยนไอคอน
                infoDetail.style.display = "none";
                toggleButton.src = "/svg/open.svg"; // เปลี่ยนเป็นไอคอนเปิด
            }
        });
    });
});
