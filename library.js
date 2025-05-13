function Book(title, author, edition, read){
    this.title = title;
    this.author = author;
    this.edition = edition;
    this.read = read;
}
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '1st', true);
const book2 = new Book('1984', 'George Orwell', '1st', false);
const book3 = new Book('To Kill a Mockingbird', 'Harper Lee', '1st', true);

const myLibrary=[book1,book2,book3];

function addBookToLibrary(title, author, edition, read){
    const book = new Book(title, author, edition, read);
    myLibrary.push(book);
}

function loopthroughLibrary() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear the list before adding new items

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        // Fetch the card template from card.html
        fetch('card.html')
            .then(response => response.text())
            .then(template => {
                // Replace placeholders with book data
                const cardHTML = template
                    .replace('${book.title}', book.title)
                    .replace('${book.author}', book.author)
                    .replace('${book.edition}', book.edition)
                    .replace('${book.read ? \'Yes\' : \'No\'}', book.read ? 'Yes' : 'No');

                // Create a temporary container to parse the HTML string
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = cardHTML.trim();

                // Add toggle read functionality
                const toggleReadButton = document.createElement('button');
                toggleReadButton.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
                toggleReadButton.addEventListener('click', () => {
                    book.read = !book.read; // Toggle the read status
                    loopthroughLibrary(); // Refresh the display
                });

                // Append the toggle button to the card
                const cardElement = tempDiv.firstChild; // Get the actual card element
                cardElement.appendChild(toggleReadButton);

                // Add delete functionality to the card's delete button
                const deleteButton = cardElement.querySelector('button');
                deleteButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    myLibrary.splice(i, 1); // Remove the book from the library
                    loopthroughLibrary(); // Refresh the display
                });

                // Append the card to the book list
                bookList.appendChild(cardElement);
            })
            .catch(error => console.error('Error loading card template:', error));
    }
}