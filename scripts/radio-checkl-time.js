document.addEventListener("DOMContentLoaded", function () {
  function handleRadioClick(radioClass) {
    const checkRadios = document.querySelectorAll(`.${radioClass}`);

    checkRadios.forEach((radio) => {
      radio.addEventListener("click", function () {
        const name = this.querySelector("input").getAttribute("name");

        document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
          input.closest(`.${radioClass}`).removeAttribute("active");
          input.checked = false;
        });

        this.setAttribute("active", "");
        this.querySelector("input").checked = true;
      });
    });
  }

  // ใช้ฟังก์ชันแยกกันตามคลาส
  handleRadioClick("check-radio");
  handleRadioClick("pattern");
});
