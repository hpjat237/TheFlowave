document.querySelectorAll('.tower').forEach(tower => {
    tower.addEventListener('mouseenter', () => {
        const info = tower.querySelector('.info');
        if (info) info.style.display = 'block';
    });
    tower.addEventListener('mouseleave', () => {
        const info = tower.querySelector('.info');
        if (info) info.style.display = 'none';
    });
    // Mobile: toggle on click
    tower.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.stopPropagation();
            const info = tower.querySelector('.info');
            if (info) info.style.display = (info.style.display === 'block' ? 'none' : 'block');
        }
    });
});
document.body.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.tower .info').forEach(info => info.style.display = 'none');
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
if (menuToggle && navUl) {
    menuToggle.addEventListener('click', function(e) {
        navUl.classList.toggle('active');
        menuToggle.classList.toggle('active');
        e.stopPropagation();
    });
    document.body.addEventListener('click', function() {
        navUl.classList.remove('active');
        menuToggle.classList.remove('active');
    });
}

// Fullpage scroll
const sections = Array.from(document.querySelectorAll('.page-section'));
const dots = Array.from(document.querySelectorAll('.dot-nav .dot'));
let currentSection = 0;
let isScrolling = false;

// Helper: kiểm tra có đang mở menu không
function isMenuOpen() {
    return document.body.classList.contains('menu-open');
}

function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
    currentSection = index;
    setTimeout(() => { isScrolling = false; }, 700);
}

// Mouse wheel event
window.addEventListener('wheel', function(e) {
    if (isScrolling || isMenuOpen()) return;
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
    }
}, { passive: false });

// Dot click event
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        if (isScrolling || isMenuOpen()) return;
        scrollToSection(idx);
    });
});

// Arrow key navigation
window.addEventListener('keydown', function(e) {
    if (isScrolling || isMenuOpen()) return;
    if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
    } else if (e.key === 'ArrowUp' && currentSection > 0) {
        scrollToSection(currentSection - 1);
    }
});

// Cập nhật dot khi cuộn bằng touch hoặc kéo thủ công
window.addEventListener('scroll', function() {
    let found = false;
    sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (!found && rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[idx]) dots[idx].classList.add('active');
            currentSection = idx;
            found = true;
        }
    });
});

// On load, scroll to first section
window.addEventListener('DOMContentLoaded', () => {
    scrollToSection(0);
});

const offcanvasMenu = document.getElementById('offcanvasMenu');
const offcanvasClose = document.querySelector('.offcanvas-close');
const menuToggleBtn = document.querySelector('.menu-toggle');

// Mở menu
if (menuToggleBtn && offcanvasMenu) {
    menuToggleBtn.addEventListener('click', function(e) {
        offcanvasMenu.classList.add('active');
        document.body.classList.add('menu-open');
        e.stopPropagation();
    });
}

// Đóng menu khi bấm nút đóng hoặc click ra ngoài
if (offcanvasClose && offcanvasMenu) {
    offcanvasClose.addEventListener('click', function() {
        offcanvasMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
}
document.addEventListener('click', function(e) {
    if (
        offcanvasMenu.classList.contains('active') &&
        !offcanvasMenu.contains(e.target) &&
        !menuToggleBtn.contains(e.target)
    ) {
        offcanvasMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Đóng menu khi chọn link
document.querySelectorAll('.offcanvas-nav a').forEach(link => {
    link.addEventListener('click', function() {
        offcanvasMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

function updateHeaderVisibility() {
    const header = document.getElementById('header');
    if (currentSection === 0) {
        header.style.display = 'block';
    } else {
        header.style.display = 'none';
    }
}
window.addEventListener('scroll', updateHeaderVisibility);
window.addEventListener('DOMContentLoaded', updateHeaderVisibility);