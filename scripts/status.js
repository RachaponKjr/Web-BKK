document.querySelectorAll(".toggle-info-btn").forEach((button, index) => {
    button.addEventListener("click", function () {
      const box = document.querySelectorAll(".status-mobile-click")[index];
      const content = document.querySelectorAll(".content")[index]; 
  
      if (!box || !content) {
        console.error("ไม่พบ .status-mobile-click หรือ .content");
        return;
      }
      const date = box.getAttribute("date") || "-";
      const pm10 = box.getAttribute("pm10") || "-";
      const pm25 = box.getAttribute("pm25") || "-";
      const no2 = box.getAttribute("no2") || "-";
      const o3 = box.getAttribute("o3") || "-";
  
      const newContent = document.createElement("div");
      newContent.classList.add("table-content-wrapper");
      newContent.innerHTML = `
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">ข้อมูลล่าสุด</div>
          <div style="min-width: 150px; text-align: start; padding: 10px">${date}</div>
        </div>
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">PM10 (µg/m3) (avg 24 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px">${pm10}</div>
        </div>
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">PM2.5 (µg/m3) (avg 24 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px">${pm25}</div>
        </div>
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">NO2 (ppb) (avg 1 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px">${no2}</div>
        </div>
        <div class="table-content flex flex-center">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">O3 (ppb) (avg 8 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px">${o3}</div>
        </div>
      `;
  
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        content.classList.add("hidden");
        content.innerHTML = "";
        this.src = "/svg/open.svg";
      } else {
        this.classList.add("active");
        content.classList.remove("hidden");
        content.innerHTML = '';
        content.appendChild(newContent);
        this.src = "/svg/close.svg";
      }
  
      console.log(this)
    });
  });
  