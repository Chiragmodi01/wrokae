function toggleOnMenu () {
    const menuContainer = document.getElementsByClassName("ham-menu-container");
    const btnClose = document.getElementsByClassName("btn-close");
    const btnMenu = document.getElementsByClassName("btn-menu");
    const body = document.getElementsByTagName("body");
    alert('on')

    menuContainer.style.display = "none";
    btnClose.style.display = "block";
    btnMenu.style.display = "none";

    body.style.opacity = "60%";
    body.style.filter = "blur(1px)";
    body.style.overflow = "hidden";
    body.style.height = "100vh";
}


function toggleOffMenu () {
    const menuContainer = document.getElementsByClassName("ham-menu-container");
    const btnClose = document.getElementsByClassName("icone-close");
    const btnMenu = document.getElementsByClassName("icone-menu");
    const body = document.getElementsByTagName("body");
    alert('off')

    menuContainer.style.display = "flex";
    btnClose.style.display = "none";
    btnMenu.style.display = "block";

    body.style.opacity = "100%";
    body.style.filter = "none";
    body.style.overflow = "auto";
    body.style.height = "100vh";
}
