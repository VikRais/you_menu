const toggleThemeButton = document.getElementById("toggle-theme-button");
const root = document.querySelector(':root');

function toggleTheme() {
  root.classList.toggle('dark-theme');
}

toggleThemeButton.addEventListener('click', toggleTheme);