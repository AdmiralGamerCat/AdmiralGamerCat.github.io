// theme switching
const checkbox = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'light-mode') {
    checkbox.checked = true;
  }
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');
  } else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark-mode');
  }
});

function openPopup(imageSrc) {
  var popup = document.getElementById("image-popup");
  var popupImg = document.getElementById("popup-img");
  popup.style.display = "flex"; // Display the popup
  popupImg.src = imageSrc; // Set the image source
}

function closePopup() {
  var popup = document.getElementById("image-popup");
  popup.style.display = "none"; // Hide the popup
}
