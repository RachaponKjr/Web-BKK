document.querySelectorAll(".toggle-info-btn").forEach((button, index) => {
  button.addEventListener("click", function () {
    const box = document.querySelectorAll(".status-mobile-click")[index];
    const content = document.querySelectorAll(".content")[index];

    if (!box || !content) {
      console.error("ไม่พบ .status-mobile-click หรือ .content");
      return;
    }

    const date = box.getAttribute("date") || "-";
    const pm10 = parseFloat(box.getAttribute("pm10")) || "-";
    const pm25 = parseFloat(box.getAttribute("pm25")) || "-";  
    const no2 = parseFloat(box.getAttribute("no2")) || "-";   
    const o3 = parseFloat(box.getAttribute("o3")) || "-";     

    // ตรวจสอบ pm10
    let statuspm10;
    if (pm10 !== "-") {
      if (pm10 <= 50) {
        statuspm10 = "blue"; 
      } else if (pm10 <= 80) {
        statuspm10 = "green"; 
      } else if (pm10 <= 100) {
        statuspm10 = "yellow";
      } else if (pm10 <= 150) {
        statuspm10 = "orange"; 
      } else {
        statuspm10 = "red"; 
      }
    }

    // ตรวจสอบ pm25
    let statuspm25;
    if (pm25 !== "-") {
      if (pm25 <= 25) {
        statuspm25 = "blue"; 
      } else if (pm25 <= 50) {
        statuspm25 = "green"; 
      } else if (pm25 <= 75) {
        statuspm25 = "yellow"; 
      } else if (pm25 <= 100) {
        statuspm25 = "orange"; 
      } else {
        statuspm25 = "red"; 
      }
    }

    // ตรวจสอบ no2
    let statusno2;
    if (no2 !== "-") {
      if (no2 <= 50) {
        statusno2 = "blue"; 
      } else if (no2 <= 100) {
        statusno2 = "green"; 
      } else if (no2 <= 150) {
        statusno2 = "yellow"; 
      } else if (no2 <= 200) {
        statusno2 = "orange"; 
      } else {
        statusno2 = "red"; 
      }
    }

    // ตรวจสอบ o3
    let statuso3;
    if (o3 !== "-") {
      if (o3 <= 50) {
        statuso3 = "blue"; 
      } else if (o3 <= 100) {
        statuso3 = "green"; 
      } else if (o3 <= 150) {
        statuso3 = "yellow"; 
      } else if (o3 <= 200) {
        statuso3 = "orange"; 
      } else {
        statuso3 = "red"; 
      }
    }

    const newContent = document.createElement("div");
    newContent.classList.add("table-content-wrapper");
    newContent.innerHTML = `
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">ข้อมูลล่าสุด</div>
          <div style="min-width: 150px; text-align: start; padding: 10px">${date}</div>
        </div>
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">PM10 (µg/m3) (avg 24 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px; display: flex; align-items: center; gap: 8px;">
            ${statuspm10 !== undefined && statuspm10 !== null ? `
              <div class="status-o status-b-${statuspm10}">
                <div class="status-${statuspm10}"></div>
              </div>
            ` : ""}
            ${pm10}
          </div>
        </div>
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">PM2.5 (µg/m3) (avg 24 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px; display: flex; align-items: center; gap: 8px;">
            ${statuspm25 !== undefined && statuspm25 !== null ? `
              <div class="status-o status-b-${statuspm25}">
                <div class="status-${statuspm25}"></div>
              </div>
            ` : ""}
            ${pm25}
          </div>
        </div>
        <div class="table-content flex flex-center" style="border-bottom: 1px solid #dddddd">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">NO2 (ppb) (avg 1 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px; display: flex; align-items: center; gap: 8px;">
            ${statusno2 !== undefined && statusno2 !== null ? `
              <div class="status-o status-b-${statusno2}">
                <div class="status-${statusno2}"></div>
              </div>
            ` : ""}
            ${no2}
          </div>
        </div>
        <div class="table-content flex flex-center">
          <div style="width: 100%; background: #e0e0e0; padding: 10px; color: #666666;">O3 (ppb) (avg 8 hr)</div>
          <div style="min-width: 150px; text-align: start; padding: 10px; display: flex; align-items: center; gap: 8px;">
            ${statuso3 !== undefined && statuso3 !== null ? `
              <div class="status-o status-b-${statuso3}">
                <div class="status-${statuso3}"></div>
              </div>
            ` : ""}
            ${o3}
          </div>
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
      content.innerHTML = "";
      content.appendChild(newContent);
      this.src = "/svg/close.svg";
    }

    console.log(this);
  });
});
