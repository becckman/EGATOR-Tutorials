// Change NAVBAR style on scroll

window.addEventListener("scroll", () => {
    document.querySelector(".nav").classList.toggle("window-scroll", window.scrollY > 0)
})



// show/hide faq answer

const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("faq--open");

        // change icon
        const icon = faq.querySelector(".faq__icon i")
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }
        else if(icon.className === "uil uil-minus"){
            icon.className = "uil uil-plus";
        }
    })
})


// collapsable nav menu
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex"
    menu.style.animation = "openNav .3s ease forwards"
    menuBtn.style.display = "none"
    closeBtn.style.display = "inline-block"
})

closeBtn.addEventListener("click", () => {
    menu.style.animation = "none"
    menu.style.animation = "closeNav .3s ease forwards"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
})