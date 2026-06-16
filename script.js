function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  
  ScrollReveal({ 
    reset: true ,
    distance: '60px',
    duration: 2500,
    delay:400
});

ScrollReveal().reveal(' .title',{delay:300,origin:"left"});
ScrollReveal().reveal(' .section__text__p2', { delay: 300,origin:"right" });

// ScrollReveal().reveal('#profile, .section__pic-container', { delay: 300,origin:"bottom" });

ScrollReveal().reveal('.btn-container,.btn btn-color-2', { delay: 300,origin:"left" });

ScrollReveal().reveal('.btn-container,.btn btn-color-1', { delay: 300,origin:"left" });

// ScrollReveal().reveal('.about-containers,.details-container', { delay: 300,origin:"right" });


ScrollReveal().reveal('.desktop-nav,.logo,.nav-links', { delay: 200,origin:"top" });

ScrollReveal().reveal('#hamburger-nav,.logo,#hamburger-menu,.hamburger-icon', { delay: 200,origin:"top" });
  