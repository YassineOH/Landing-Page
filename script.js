const nav = document.querySelector("header")
const sections = document.querySelectorAll("section")




window.addEventListener("scroll", fixNav)
window.addEventListener("scroll", runAnimation)


function runAnimation() {
    let bottomScreen = window.innerHeight * 4 / 5

    sections.forEach((sect, index) => {
        let secTop = sect.getBoundingClientRect().top
        switch (index) {
            case 1:
                if (bottomScreen > secTop) {
                    sect.querySelectorAll(".container > *").forEach(item => item.style.animation = "appear 2s ease")
                } else {
                    sect.querySelectorAll(".container > *").forEach(item => item.style.animation = "")
                }
                break;

            case 2:
                if (bottomScreen > secTop) {
                    sect.querySelectorAll(".container > *").forEach(item => item.style.animation = "fromTop 2s ease")
                } else {
                    sect.querySelectorAll(".container > *").forEach(item => item.style.animation = "")
                }
                break;

            case 3:
                if (bottomScreen > secTop) {
                    sect.querySelector("form").style.animation = "appear 1s ease"
                } else {
                    sect.querySelector("form").style.animation = ""
                }
                break




        }

    })

}



function fixNav() {
    if (window.scrollY > 1750) {

        nav.className = "bg-primary"
        nav.style.zIndex = "100"
    } else if (window.scrollY > 200) {
        nav.className = "bg-dark"
        nav.style.zIndex = "100"
    }
    else {
        nav.className = ""
    }
}

