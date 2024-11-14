document.getElementById("infoButton").addEventListener("click", function () {
  const imageContainer = document.getElementById("imageContainer");

  
  // Home button functionality
  document.getElementById('infoButton').addEventListener('click', function() {
    // Redirect to a different page 
    window.location.href = 'home.html'; 
  });


  // Clear any existing images
  imageContainer.innerHTML = "";

  // Array of image URLs
  const images = [
    "https://plus.unsplash.com/premium_photo-1661963318752-c7e105de9362?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naXN0aWNzfGVufDB8fDB8fHww",
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


