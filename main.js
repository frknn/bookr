const hamburgerBtn = document.querySelector('.hamburger-toggle-btn')
const hamburgerToggle = document.querySelector('.hamburger-toggle')
const navList = document.querySelector('.nav-list')
const navListItems = document.querySelectorAll('.nav-list-item')

hamburgerBtn.addEventListener('click', () => {
  navList.classList.toggle('open')
  hamburgerToggle.classList.toggle('open')
})

navListItems.forEach(navListItem => {
  navListItem.addEventListener('click', () => {
    navList.classList.remove('open')
    hamburgerToggle.classList.remove('open')
  })
})