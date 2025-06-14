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
        e.stopPropagation();
    });
    document.body.addEventListener('click', function() {
        navUl.classList.remove('active');
    });
}