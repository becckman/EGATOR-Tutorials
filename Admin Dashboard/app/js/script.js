const sideMenu = document.querySelector(".sidebar")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

const themeToggler = document.querySelector(".theme-toggler")
let active = document.querySelector(".active")
const links = document.querySelectorAll(".sidebar__link")

links.forEach(link => {
    link.addEventListener("click", () => {
        active.classList.remove("active")
        link.classList.add("active")

        active = document.querySelector(".active")
    })
})

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block"
    sideMenu.style.animation = "showMenu 0.4s ease forwards"
})

closeBtn.addEventListener("click", () => {
    sideMenu.style.animation = "hideMenu 0.4s ease forwards"
})

// change theme
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    themeToggler.querySelector('span:nth-child(1)').classList.toggle("active-theme")
    themeToggler.querySelector('span:nth-child(2)').classList.toggle("active-theme")
})


// fill orders in table
Orders.forEach(order => {
    const tr = document.createElement("tr")
    const trContent = 
    `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : order.shipping === 'Delivered' ? 'success' : ''}">${order.shipping}</td>
    <td class="primary">Details</td>
    `

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
})