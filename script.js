function toggleOnMenu() {
    const menuContainers = document.getElementsByClassName("ham-nav-pills-container");
    const btnClose = document.getElementsByClassName("btn-close");
    const btnMenu = document.getElementsByClassName("btn-menu");
    const body = document.getElementsByTagName("body")[0];
    const blurBg = document.getElementsByClassName("menu-bg-blur")[0];
    
    if (menuContainers.length > 0) {
        menuContainers[0].style.display = "flex";
    }
    if (btnClose.length > 0) {
        btnClose[0].style.display = "block";
    }
    if (btnMenu.length > 0) {
        btnMenu[0].style.display = "none";
    }
    if (blurBg) {
        blurBg.style.display = "block";
    }

    if (body) {
        body.style.overflow = "hidden";
        body.style.height = "100vh";
    }
}


function toggleOffMenu() {
    const menuContainers = document.getElementsByClassName("ham-nav-pills-container");
    const btnClose = document.getElementsByClassName("btn-close");
    const btnMenu = document.getElementsByClassName("btn-menu");
    const body = document.getElementsByTagName("body")[0];
    const blurBg = document.getElementsByClassName("menu-bg-blur")[0];
    alert('here')
    
    if (menuContainers.length > 0) {
        menuContainers[0].style.display = "none";
    }
    if (btnClose.length > 0) {
        btnClose[0].style.display = "none";
    }
    if (btnMenu.length > 0) {
        btnMenu[0].style.display = "block";
    }

    if (blurBg) {
        blurBg.style.display = "none";
    }

    if (body) {
        body.style.overflow = "auto";
        body.style.height = "100vh";
    }
}
