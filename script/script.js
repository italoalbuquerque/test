/* Expander Menu */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener ('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
        })
    }
}

showMenu('header-toggle','nav-menu')

/* Active and Remove Menu */

const navLink = document.querySelectorAll('.nav_link')

function linkAction () {
    navLink.forEach (n => n.classList.remove('active'))
    this.classList.add ('active')
}

navLink.forEach (n => n.addEventListener('click', linkAction))

/* Form */

let nome = document.querySelector('input#nome')
let sobrenome = document.querySelector('input#sobre')
let email = document.querySelector('input#email')

function verify () {
if (String(nome.value).length == 0 || String(sobrenome.value).length == 0 || String(email.value).length == 0) {
    alert('Fill in the field with the desired information!')
}
}