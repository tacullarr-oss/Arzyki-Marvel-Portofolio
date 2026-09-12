const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.register-link');
const registerLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Mobile Menu Toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Active Link Logic
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

registerLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});

// --- JAVASCRIPT MODAL DETAIL PROYEK ---
const projectModal = document.getElementById("portfolio-modal");
const closeProjectModal = document.querySelector(".close-portfolio-modal");
const modalProjectTitle = document.getElementById("modal-project-title");
const modalProjectDesc = document.getElementById("modal-project-desc");

document.querySelectorAll(".open-detail").forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        
        const box = this.closest(".portfolio-box");
        const title = box.querySelector(".portfolio-layer h4").innerText;
        const description = box.querySelector(".portfolio-desc").innerText;

        modalProjectTitle.innerText = title;
        modalProjectDesc.innerText = description;

        projectModal.style.display = "flex";
    });
});

if(closeProjectModal) {
    closeProjectModal.onclick = () => {
        projectModal.style.display = "none";
    };
}

window.addEventListener("click", (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = "none";
    }
});
