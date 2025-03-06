document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-pm");
  const tables = document.querySelectorAll(".table-mobile-status");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  let currentIndex = 0;

  function showTable(index) {
    // ซ่อนทุกตาราง
    console.log(index);
    tables.forEach((table) => (table.style.display = "none"));
    menuItems.forEach((item) => item.removeAttribute("active"));

    // แสดงตารางที่ตรงกับเมนูที่เลือก
    if (menuItems[index] && tables[index]) {
      menuItems[index].setAttribute("active", "true");
      tables[index].style.display = "table";
    }
    if (index === 0) {
      btnLeft.style.backgroundColor = "#DFDFDF";
      btnRight.style.backgroundColor = "#03754A";
    } else if (index < tables.length - 1) {
      btnLeft.style.backgroundColor = "#03754A";
      btnRight.style.backgroundColor = "#03754A";
    } else if (index === tables.length - 1) {
      btnLeft.style.backgroundColor = "#03754A";
      btnRight.style.backgroundColor = "#DFDFDF";
    }
  }

  btnLeft.addEventListener("click", function () {
    if (currentIndex === 0) {
      btnLeft.style.backgroundColor = "#DFDFDF";
      btnRight.style.backgroundColor = "#03754A";
    } else {
      currentIndex = (currentIndex - 1 + tables.length) % tables.length;
      showTable(currentIndex);
    }
  });

  btnRight.addEventListener("click", function () {
    if (currentIndex === tables.length - 1) {
      btnLeft.style.backgroundColor = "#03754A";
      btnRight.style.backgroundColor = "#DFDFDF";
    } else {
      currentIndex = (currentIndex + 1) % tables.length;
      showTable(currentIndex);
    }
  });

  menuItems.forEach((menu, index) => {
    menu.addEventListener("click", function () {
      currentIndex = index;
      showTable(currentIndex);
    });
  });

  // แสดงค่าเริ่มต้น (PM2.5)
  showTable(currentIndex);
});
