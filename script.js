document.querySelectorAll(".tab p").forEach(function (event) {
  event.addEventListener("mouseover", function (event) {
    const name = event.target.innerHTML;
    document.querySelector("." + name).classList.add("active");
  });

  event.addEventListener("mouseout", function (event) {
    const name = event.target.innerHTML;
    document.querySelector("." + name).classList.remove("active");
  });
});
