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

// Project Data Object with Full Descriptions
const projectData = {
    1: {
        title: "Menanam Kangkung: Solusi Ketahanan Pangan",
        description: "Proyek penanaman kangkung dalam mata pelajaran Pengembangan Perangkat Lunak dan Gim (PPLG) ini menjadi langkah nyata dalam menghubungkan dunia vokasi dengan ketahanan pangan nasional. Melalui praktik langsung di lapangan, siswa SMK Krian 1 belajar menerapkan teknik pertanian modern untuk menghasilkan kangkung berkualitas tinggi. Proyek ini tidak hanya mengajarkan cara menanam dan merawat tanaman, tetapi juga membuka peluang bisnis bagi siswa untuk memahami value chain dalam agribisnis. Dengan dukungan teknologi informasi, dokumentasi proyek ini dilakukan secara sistematis untuk menciptakan best practices yang dapat diterapkan oleh komunitas lokal."
    },
    2: {
        title: "Membuat Web Portfolio Interaktif",
        description: "Pembuatan website portofolio interaktif menggunakan HTML, CSS, dan JavaScript modern di SMK Krian 1. Proyek ini dirancang untuk menampilkan kemampuan dan karya-karya terbaik sebagai bagian dari pembelajaran web development. Dengan menggunakan teknik responsive design, website ini dapat diakses dengan baik di berbagai perangkat dari desktop hingga mobile. Fitur-fitur interaktif seperti smooth scrolling, animated transitions, dan modal popup membuat pengalaman pengguna menjadi lebih engaging dan profesional. Proyek ini juga mengintegrasikan form contact dan login system untuk mendemonstrasikan kemampuan dalam handling form dan user authentication."
    },
    3: {
        title: "Penanaman Tanaman Herbal (PPLG)",
        description: "Proyek penanaman tanaman herbal ini merupakan dokumentasi praktis mengenai proses penanaman dan pemeliharaan tanaman herbal secara mandiri. Melalui aktivitas ini, siswa PPLG di SMK Krian 1 mempelajari berbagai jenis tanaman herbal yang memiliki nilai guna tinggi dalam bidang kesehatan dan industri farmasi. Proyek mencakup tahapan persiapan lahan, penanaman benih, irigasi, pemupukan, dan panen dengan standar keberlanjutan lingkungan. Selain aspek agronomis, proyek ini juga mengeksplorasi peluang komersial dengan mengidentifikasi pasar potensial untuk produk herbal berkualitas. Dokumentasi digital yang lengkap memudahkan berbagi pengetahuan dengan generasi siswa berikutnya dan komunitas yang tertarik mengembangkan pertanian herbal."
    }
};

document.querySelectorAll(".open-detail").forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        
        const projectId = this.getAttribute("data-project-id");
        const project = projectData[projectId];
        
        if (project) {
            modalProjectTitle.innerText = project.title;
            modalProjectDesc.innerText = project.description;
            projectModal.style.display = "flex";
        }
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
