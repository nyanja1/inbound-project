//Home button
document.getElementById("infoButton").addEventListener("click", function () {
  alert(
    "Welcome to our company! We specialize in efficient logistics solutions tailored to meet your needs."
  );
});

//Aout us
document.getElementById("about us").onclick = function () {
  const info = document.getElementById("info");
  // Toggle the display of the info paragraph
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
};
