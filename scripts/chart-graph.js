const labels = [
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
];

const datasetsPM10 = [
  {
    label: "เขตคันนายาว",
    borderColor: "#0084FA",
    data: [
      30, 25, 35, 40, 45, 50, 60, 80, 55, 50, 40, 35, 30, 25, 20, 18, 22, 24,
      28, 30, 35, 38, 40,
    ],
  },
  {
    label: "เขตทุ่งครุ",
    borderColor: "#00DF8B",
    data: [
      20, 15, 25, 30, 35, 40, 55, 70, 65, 60, 50, 45, 40, 35, 30, 28, 25, 24,
      20, 18, 22, 24, 28,
    ],
  },
  { label: "เขตคลองสาน", borderColor: "#FEA617", data: [] },
  { label: "เขตจตุจักร", borderColor: "#FF3C55", data: [] },
];

const datasetsPM25 = [
  {
    label: "เขตคันนายาว",
    borderColor: "#0084FA",
    data: [
      15, 12, 18, 22, 24, 28, 32, 40, 38, 35, 30, 28, 24, 22, 18, 15, 12, 10, 8,
      6, 12, 14, 16,
    ],
  },
  {
    label: "เขตทุ่งครุ",
    borderColor: "#00DF8B",
    data: [
      12, 10, 15, 20, 22, 26, 30, 42, 38, 34, 28, 24, 20, 18, 15, 12, 10, 8, 6,
      5, 10, 12, 14,
    ],
  },
  {
    label: "เขตคลองสาน",
    borderColor: "#FEA617",
    data: [
      10, 8, 12, 15, 18, 22, 28, 36, 32, 28, 24, 22, 18, 15, 12, 10, 8, 6, 5, 4,
      8, 10, 12,
    ],
  },
  {
    label: "เขตจตุจักร",
    borderColor: "#FF3C55",
    data: [
      8, 6, 10, 12, 14, 18, 22, 30, 28, 25, 22, 18, 15, 12, 10, 8, 6, 5, 4, 3,
      6, 8, 10,
    ],
  },
];

function createChart(canvasId, title, datasets) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets.map((dataset) => ({
        label: dataset.label,
        borderColor: dataset.borderColor,
        borderWidth: 1,
        pointRadius: 0,
        fill: false,
        data: dataset.data,
      })),
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: title, font: { size: 14 } },
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true, // ใช้สไตล์จุดแทนสี่เหลี่ยม
            pointStyle: "circle", // เปลี่ยนเป็นวงกลม
            boxWidth: 4, // ปรับขนาดกล่อง
            boxHeight: 4, // ปรับขนาดกล่อง
            align: "end",
            font: {
              size: function (context) {
                const isMobile = window.innerWidth < 768;
                return isMobile ? 10 : 16;
              },
            },
          },
        },
      },
      scales: {
        y: {
          title: { display: true, text: "ug/m³", color: "red" },
          beginAtZero: true,
          ticks: {
            font: {
              size: function (context) {
                const isMobile = window.innerWidth < 768;
                return isMobile ? 10 : 16;
              },
              family: "Arial",
            },
          },
        },
        x: {
          ticks: {
            callback: function (value, index) {
              const isMobile = window.innerWidth < 768;
              return isMobile
                ? index % 2 === 0
                  ? this.getLabelForValue(value)
                  : ""
                : this.getLabelForValue(value);
            },
            maxRotation: 0,
            minRotation: 0,
            font: {
              size: function (context) {
                const isMobile = window.innerWidth < 768;
                return isMobile ? 10 : 16;
              },
              family: "Arial", // เปลี่ยนฟอนต์ (เปลี่ยนเป็นฟอนต์ที่ต้องการได้)
            },
          },
        },
      },
    },
  });
}

createChart("pm10Chart", "PM10", datasetsPM10);
createChart("pm25Chart", "PM2.5", datasetsPM25);
