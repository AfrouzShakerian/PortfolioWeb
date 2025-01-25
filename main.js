const toggleBackground = document.getElementById('toggle-background');
const bodyElement = document.body;
const headingElements = document.querySelectorAll('h2');

toggleBackground.addEventListener('click', () => {
    if (toggleBackground.textContent === 'Dark Mode') {
        toggleBackground.textContent = 'Light Mode';
        bodyElement.classList.add('dark-mode');
    } else if (toggleBackground.textContent === 'Light Mode') {
        toggleBackground.textContent = 'Dark Mode';
        bodyElement.classList.remove('dark-mode');
    }
});