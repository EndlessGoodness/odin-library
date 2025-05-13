document.getElementById('add-book-btn').addEventListener('click', () => {
    const form = document.getElementById('add-book');
    // Toggle the form's visibility
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
});

function submitForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const edition = document.getElementById('edition').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, edition, read);
    loopthroughLibrary();

    document.getElementById('add-book').reset();
    document.getElementById('add-book').style.display = 'none';
}