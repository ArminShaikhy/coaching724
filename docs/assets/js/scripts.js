const ServicesLink = document.getElementById('services-link');
const ChevronArrow = document.getElementById('chevron-arrow');

function ServicesClick() {
    if (ChevronArrow.classList.contains('rotated')) {
        ChevronArrow.classList.remove('rotated');
    } else {
        ChevronArrow.classList.add('rotated');
    }
}

ServicesLink.addEventListener("click", ServicesClick);



const navbar = document.getElementById("navbar");
let scrolled = false;
window.onscroll = () => {
    if (window.pageYOffset > 80) {
        navbar.classList.remove("top");
        if (!scrolled) {
            navbar.style.transform = "translateY(-70px)";
            setTimeout(() => {
                navbar.style.transform = "translateY(0)";
                scrolled = true;
            }, 200);
        }
    } else {
        navbar.classList.add("top");
        scrolled = false;
    }
};



