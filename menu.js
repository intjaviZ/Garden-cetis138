(() => {
    let navbar = document.querySelector("#navbar");
    let postNavbar = document.querySelector(".post-navbar");
    let alturaNavbar = navbar.getBoundingClientRect().height;
    let breakpoint = postNavbar.offsetTop - alturaNavbar;
    let posicion;
    let navbarFijado = false;

    const cambioEnPosicion = () => {
        posicion = window.scrollY;
    }

    const onScroll = () => {
        cambioEnPosicion();

        if (posicion >= breakpoint && !navbarFijado) {
            navbar.classList.add('navbar-fixed');
            postNavbar.style.cssText = "margin-top: " + alturaNavbar + 'px;';
            navbarFijado = true;
        } else if (posicion < breakpoint && navbarFijado) {
            navbar.classList.remove('navbar-fixed');
            postNavbar.style.cssText = "margin-top: " + 0 + 'px;';
            navbarFijado = false;
        }
    }

    document.addEventListener('scroll', onScroll);
})();
