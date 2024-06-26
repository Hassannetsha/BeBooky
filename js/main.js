import { booksList } from "../modules/books.js"
import { renderNavBar } from "../modules/navBar.js"


const bookListSection = document.getElementById('book-list')

export function viewBookDetails(event) {

    window.location.href = '../pages/bookDetails.html'
    let selectedBook = booksList.filter(book => {
        return book.id == event.target.id
    })[0]
    
    sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))
}



document.addEventListener('click', function (event) {
    if (event.target.id) {
        // window.location.href = `./book.html?id=${event.target.id}`
        viewBookDetails(event)
    }
})



function getBooks() {
    let booksHtml = booksList.map(book => {
        return `<div class="book-item">
        <img src="${book.bookCover}" alt="${book.name} book" id="${book.id}">
        <h3>${book.name}</h3>
        <p>${book.author}</p>
        </div>`
    }).join('')
    
    return booksHtml
}



export function renderBooks(bookListConatiner) {
    if (bookListConatiner)
        bookListConatiner.innerHTML = getBooks()
}

renderBooks(bookListSection)

let navBar = document.getElementById('nav-bar')

if (navBar)
    navBar.innerHTML = renderNavBar(null)