window.addEventListener('load', function() {
    document.getElementById('container').classList.add('loaded'); // Add class to trigger fade-in
});

// popups
function createPopup(popupNode) {
    let overlay = popupNode.querySelector(".overlay");
    let closeButton = popupNode.querySelector(".close-popup"); // Add a close button with a specific class (e.g., FontAwesome close icon)

    function openPopup() {
        popupNode.classList.add("active");
    }

    function closePopup() {
        popupNode.classList.remove("active");
    }

    // Close the popup when clicking the overlay
    overlay.addEventListener("click", closePopup);

    // Close the popup when clicking the close button (optional)
    if (closeButton) {
        closeButton.addEventListener("click", closePopup);
    }

    return openPopup;
}

// Attach click listeners to any element with 'data-popup-target'
document.querySelectorAll('[data-popup-target]').forEach(trigger => {
    let popupId = trigger.getAttribute('data-popup-target');
    let popupElement = document.querySelector(popupId);
    
    if (popupElement) {
        let openPopup = createPopup(popupElement);
        trigger.addEventListener("click", openPopup);
    }
});

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
