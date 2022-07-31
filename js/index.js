let navMenuToggles = document.querySelectorAll('.js-nav-toggle')
let searchMenuToggles = document.querySelectorAll('.js-search-toggle')
let closeSearchMenu = document.querySelector('.js-close-search-menu')
let searchMenu = document.querySelector('.js-search-menu')
let navMenu = document.querySelector('.js-nav-menu')
let mainContent = document.querySelector('.js-main')
let moviesDropdown = document.querySelector('.js-movies-dropdown')
let showsDropdown = document.querySelector('.js-shows-dropdown')
let newsDropdown = document.querySelector('.js-news-dropdown')
let moviesDropdownToggle = document.querySelector('.js-movies-toggle')
let showsDropdownToggle = document.querySelector('.js-shows-toggle')
let newsDropdownToggle = document.querySelector('.js-news-toggle')

// Toggles for section dropdowns in navbar
moviesDropdownToggle.addEventListener('click', () => {
    moviesDropdown.classList.toggle('u-hide')
    showsDropdown.classList.add('u-hide')
    newsDropdown.classList.add('u-hide')
})

showsDropdownToggle.addEventListener('click', () => {
    showsDropdown.classList.toggle('u-hide')
    moviesDropdown.classList.add('u-hide')
    newsDropdown.classList.add('u-hide')
})

newsDropdownToggle.addEventListener('click', () => {
    newsDropdown.classList.toggle('u-hide')
    moviesDropdown.classList.add('u-hide')
    showsDropdown.classList.add('u-hide')
})

// Toggles to open/close nav menu
navMenuToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        if (navMenu.classList.contains('u-hide')) {
            navMenu.classList.remove('u-hide')
            // Use of display: none to avoid vertical scrolling in nav menu
            searchMenu.classList.add('u-d-none')
            // Don't display main content to avoid vertical scrolling in full-screen menus
            mainContent.classList.add('u-d-none')
        } else {
            navMenu.classList.add('u-hide')
            searchMenu.classList.remove('u-d-none')
            mainContent.classList.remove('u-d-none')
        }
        dropdownChevron.classList.remove('u-animate-chevron')
    })
})

searchMenuToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        navMenu.classList.add('u-hide')
        if (searchMenu.classList.contains('u-hide')) {
            searchMenu.classList.remove('u-hide')
            // Remove display: none in case it was added by the nav menu
            searchMenu.classList.remove('u-d-none')
            mainContent.classList.add('u-d-none')
        } else {
            searchMenu.classList.add('u-hide')
            mainContent.classList.remove('u-d-none')
        }
    })
})

closeSearchMenu.addEventListener('click', () => {
    searchMenu.classList.add('u-hide')
    mainContent.classList.remove('u-d-none')
})