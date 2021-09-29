const nav = document.querySelector("header")
const sections = document.querySelectorAll("section")
const status = document.getElementById("status")
const loader = document.querySelector(".loader")
const body = document.querySelector("body")

let load = 0;





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


const path11 = "M0 202L37.5 219.7C75 237.3 150 272.7 225 277.3C300 282 375 256 450 268C525 280 600 330 675 331C750 332 825 284 862.5 260L900 236L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"

const path12 = "M0 418L37.5 412C75 406 150 394 225 377.8C300 361.7 375 341.3 450 335C525 328.7 600 336.3 675 350.2C750 364 825 384 862.5 394L900 404L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"

const path21 = "M0 212L37.5 210.8C75 209.7 150 207.3 225 232.3C300 257.3 375 309.7 450 327.2C525 344.7 600 327.3 675 294C750 260.7 825 211.3 862.5 186.7L900 162L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"

const path22 = "M0 332L37.5 342.3C75 352.7 150 373.3 225 381C300 388.7 375 383.3 450 385.7C525 388 600 398 675 388.8C750 379.7 825 351.3 862.5 337.2L900 323L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"


const animate = () => {
    const timeline1 = anime.timeline({
        duration: 1000,
        easing: "easeOutInQuad",
        loop: true
    })

    const timeline2 = anime.timeline({
        duration: 1000,
        easing: "easeInSine",
        loop: true
    })

    timeline1.add({
        targets: ".p11",
        d: [{ value: path21 }]
    })


    timeline1.add({
        targets: ".p11",
        d: [{ value: path11 }]
    })

    timeline2.add({
        targets: ".p12",
        d: [{ value: path22 }],
        delay: 000
    })

    timeline2.add({
        targets: ".p12",
        d: [{ value: path12 }],
        delay: 000
    })


}

animate()


window.addEventListener("load", () => {

    setTimeout(() => {
        setInterval(count, 30)

    }, 2000)

})





function count() {
    load++

    if (load >= 101) {
        clearInterval(setInterval(count, 30))
        loader.style.animation = "fadOut 1000ms ease"
        setTimeout(() => loader.style.display = "none", 1000)
        body.style.overflow = "auto";
    } else {
        status.innerHTML = `${load} %`
    }
}


if (window.innerWidth < 1000) {
    console.log("ah")
    let rect = document.querySelector("rect")
    rect.viewBox = "0 0 100% 100%"
}

