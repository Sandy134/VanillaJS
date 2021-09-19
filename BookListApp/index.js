// Book Class : Represents a book

class Book {
    constructor(title, author, bid) {
        this.title = title;
        this.author = author;
        this.bid = bid;
    }
}


// UI class : Handle UI class
class UI {
    static displayBooks() {
        // const StoredBooks = [
        //     {
        //         title: 'Book One',
        //         author: 'Sandesh',
        //         bid: '343434'
        //     },
        //     {
        //         title: 'Book two',
        //         author: 'Ramnath',
        //         bid: '928364'
        //     }
        // ];
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.bid}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);

    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.style.textAlign = "center";
        div.style.fontSize = "18px";
        div.style.fontWeight = "700";
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        // Make Vanish in 3 seconds

        setTimeout(()=>document.querySelector('.alert').remove(),3000)
    }

    static clearFields() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }


}



//Store Class : Local Storage
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        let books = Store.getBooks();

        books.forEach((book,index)=>{
            if(book.bid === isbn){
                books.splice(index,1);
            }
        });

        localStorage.setItem('books',JSON.stringify(books));
    }
}











// Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => {

    // Prevent Actual Submit
    e.preventDefault();

    //Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;


    //Validate

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Please Fill all the fields","danger");
        UI.clearFields();
    } else {
        //Instantiate Book
        
        const book = new Book(title, author, isbn);
        console.log(book);
        
        //Add a Book
        UI.addBookToList(book);

        //Show Success Message
        UI.showAlert("Book Added Successfully","success");
        
        //Clear Fields
        UI.clearFields();
    }
    
    
    
});



// Event : Remove a Book

document.querySelector('#book-list').addEventListener('click', (e) => {
    //Remove Book From UI
    UI.deleteBook(e.target);

    //RemoveBook From Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //show delete message
    UI.showAlert("Book Removed Successfully","success");
});