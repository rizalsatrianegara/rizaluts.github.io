import { dataSectionClient, dataSectionServices } from "./data.js"

const btnHamburger = document.querySelector('.fa-bars')
const navBar = document.querySelector('.nav')

btnHamburger.addEventListener('click', (e) => {
    navBar.classList.toggle('active__nav')
})

const main = document.querySelector('main')
main.addEventListener('click', (e) => {
    navBar.classList.remove('active__nav')
})

const btnTitle = document.getElementById('header__logo__title')
btnTitle.addEventListener('click', (e) => {
    window.location.href = '#'
})

const btnHubungiSaya = document.getElementById('btn-hubungi-saya')
btnHubungiSaya.addEventListener('click', (e) => {
    window.location.href = '#contacts'
})

const clientsList = document.querySelector('.clients__list')
const clients = dataSectionClient.map((client) => `
    <section class="clients__item">
        <div class="clients__item__image">
            <img src=${client.urlImage} alt=${client.name}>
        </div>
    </section>
`)
clientsList.innerHTML = clients.join('')


const servicesList = document.querySelector('.services__list')
const services = dataSectionServices.map((service) => `
    <section class="services__item">
        <div class="services__item__title">
            <h2>${service.title}</h2>
        </div>
        <div class="services__item__image">
            <img src="${service.urlImage}" alt="${service.alt}">
        </div>
        <div class="services__item__text">
            <p>${service.desc}</p>
        </div>
    </section>
`)
servicesList.innerHTML = services.join()

const fabBtn = document.querySelector('.fab-btn')
fabBtn.addEventListener('click', (e) => {
    window.location.href = '#'
})

const currentScroll = window.scrollY.toString()
const asideFab = document.querySelector('.aside__fab')
const header = document.querySelector('header')
window.addEventListener('scroll', (e) => {

    if (currentScroll < window.scrollY) {
        asideFab.classList.add('show-fab')
        header.classList.add('show-shadow')
    } else {
        asideFab.classList.remove('show-fab')
        header.classList.remove('show-shadow')
    }
})
