const content = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        content[idx].classList.add('show')
        item.classList.add('active')
    })
})

function hideAllContents() {
    content.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}