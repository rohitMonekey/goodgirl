// Ensure sunflowers stay within the garden
const giftBox = document.getElementById("giftBox");
const message = document.getElementById("message");
const catImage = document.querySelector('.main-cat');
const catAudio = document.getElementById('catAudio');
document.getElementById("garden").addEventListener("click", function (e) {
    const garden = e.currentTarget;
    const gardenRect = garden.getBoundingClientRect();
    const sunflower = document.createElement("div");
    sunflower.textContent = "🌻";
    sunflower.classList.add("sunflower");
  
    // Position sunflower within the garden
    sunflower.style.left = `${e.clientX - gardenRect.left}px`;
    sunflower.style.top = `${e.clientY - gardenRect.top}px`;
  
    garden.appendChild(sunflower);
  
    // Remove sunflower after animation
    setTimeout(() => sunflower.remove(), 4000);
  });
  catImage.addEventListener('click', function () {
    catAudio.play(); // Play the sound
  });
  magicButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    giftBox.classList.remove("hidden");  // Make sure the gift box is visible
    message.classList.add("hidden");  // Make sure the message is hidden initially
  });
  // Show popup on button click
  document.getElementById("magicButton").addEventListener("click", function () {
    document.getElementById("popup").classList.remove("hidden");
  });
  giftBox.addEventListener("click", () => {
    giftBox.classList.add("hidden"); // Hide the gift box
    message.classList.remove("hidden"); // Show the sweet message
  });
  // Close popup
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });
  