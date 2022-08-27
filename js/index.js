let navMenuToggles = document.querySelectorAll('.js-nav-toggle')
let searchMenuToggles = document.querySelectorAll('.js-search-toggle')
let closeSearchMenu = document.querySelector('.js-close-search-menu')
let searchMenu = document.querySelector('.js-search-menu')
let navMenu = document.querySelector('.js-nav-menu')
let mainContent = document.querySelectorAll('.js-main')
let moviesDropdown = document.querySelector('.js-movies-dropdown')
let showsDropdown = document.querySelector('.js-shows-dropdown')
let newsDropdown = document.querySelector('.js-news-dropdown')
let moviesDropdownToggle = document.querySelector('.js-movies-toggle')
let showsDropdownToggle = document.querySelector('.js-shows-toggle')
let newsDropdownToggle = document.querySelector('.js-news-toggle')
let sections = [...document.querySelectorAll('.o-section')]

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("u-fade-long")
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.1 })

// Don't use observer on hero section nor footer, since they have a different animation
sections.forEach(section => {
    if (![...section.classList].includes('c-hero') && ![...section.classList].includes('o-footer')) {
        observer.observe(section)
    }
})


// Toggles for section dropdowns in navbar
moviesDropdownToggle.addEventListener('click', () => {
    moviesDropdown.classList.toggle('u-hide')
    moviesDropdown.classList.toggle('u-fade')

    showsDropdown.classList.add('u-hide')
    showsDropdown.classList.remove('u-fade')

    newsDropdown.classList.add('u-hide')
    newsDropdown.classList.remove('u-fade')
})

showsDropdownToggle.addEventListener('click', () => {
    showsDropdown.classList.toggle('u-hide')
    showsDropdown.classList.toggle('u-fade')

    moviesDropdown.classList.add('u-hide')
    moviesDropdown.classList.remove('u-fade')

    newsDropdown.classList.add('u-hide')
    newsDropdown.classList.remove('u-fade')
})

newsDropdownToggle.addEventListener('click', () => {
    newsDropdown.classList.toggle('u-hide')
    newsDropdown.classList.toggle('u-fade')

    moviesDropdown.classList.add('u-hide')
    moviesDropdown.classList.remove('u-fade')

    showsDropdown.classList.add('u-hide')
    showsDropdown.classList.remove('u-fade')
})

// Toggles to open/close nav menu
navMenuToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        if (navMenu.classList.contains('u-hide')) {
            navMenu.classList.add('u-fade-long')
            navMenu.classList.remove('u-hide')
            // Use of display: none to avoid vertical scrolling in nav menu
            searchMenu.classList.add('u-d-none')
            // Don't display main content to avoid vertical scrolling in full-screen menus
            mainContent.forEach(content => {
                content.classList.add('u-d-none')
            })
        } else {
            navMenu.classList.remove('u-fade-long')
            navMenu.classList.add('u-hide')
            searchMenu.classList.remove('u-d-none')
            mainContent.forEach(content => {
                content.classList.remove('u-d-none')
            })
        }
        dropdownChevron.classList.remove('u-animate-chevron')
    })
})

searchMenuToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        navMenu.classList.add('u-hide')
        if (searchMenu.classList.contains('u-hide')) {
            searchMenu.classList.remove('u-hide')
            searchMenu.classList.add('u-fade-long')
            // Remove display: none in case it was added by the nav menu
            searchMenu.classList.remove('u-d-none')
            mainContent.forEach(content => {
                content.classList.add('u-d-none')
            })
        } else {
            searchMenu.classList.remove('u-fade-long')
            searchMenu.classList.add('u-hide')
            mainContent.forEach(content => {
                content.classList.remove('u-d-none')
            })
        }
    })
})

closeSearchMenu.addEventListener('click', () => {
    searchMenu.classList.remove('u-fade-long')
    searchMenu.classList.add('u-hide')
    mainContent.forEach(content => {
        content.classList.remove('u-d-none')
    })
})
