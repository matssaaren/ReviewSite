// Switching between tabs
const homeTab = document.getElementById('home-tab');
const tierlistTab = document.getElementById('tierlist-tab');
const aboutTab = document.getElementById('about-tab');

const homeSection = document.getElementById('home-section');
const tierlistSection = document.getElementById('tierlist-section');
const aboutSection = document.getElementById('about-section');

homeTab.addEventListener('click', () => {
    showSection(homeSection);
});

tierlistTab.addEventListener('click', () => {
    showSection(tierlistSection);
});

aboutTab.addEventListener('click', () => {
    showSection(aboutSection);
});

function showSection(section) {
    // Hide all sections
    homeSection.classList.remove('active');
    tierlistSection.classList.remove('active');
    aboutSection.classList.remove('active');

    // Show the selected section
    section.classList.add('active');
}
