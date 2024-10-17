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
