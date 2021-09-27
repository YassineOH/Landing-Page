const nav = document.querySelector("header")


window.addEventListener("scroll", fixNav)

function fixNav() {
    if (window.scrollY > 200) {

        nav.className = "bg-dark"
        nav.style.zIndex = "100"
    } else {
        nav.className = ""
    }
}
