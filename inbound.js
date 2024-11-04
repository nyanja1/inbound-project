document.getElementById("infoButton").addEventListener("click", function () {
  const imageContainer = document.getElementById("imageContainer");

  // Clear any existing images
  imageContainer.innerHTML = "";

  // Array of image URLs
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];

  // Create and append images
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Image";
    img.style.margin = "10px"; // Optional: add some styling
    imageContainer.appendChild(img);
  });
});
