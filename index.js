document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var openModalBtn = document.getElementById("openModalBtn");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  var firstColumnText = document.querySelector(".first-column-text");
  // Change the text in the first column
  firstColumnText.textContent = "Follow Us!";
});
