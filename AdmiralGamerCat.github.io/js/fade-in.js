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