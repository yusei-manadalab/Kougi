document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleButton");
    const imageContainer = document.getElementById("imageContainer");
  
    button.addEventListener("click", () => {
      imageContainer.style.display =
        imageContainer.style.display === "none" ? "block" : "none";
    });
  });