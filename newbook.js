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

   const inputs=document.getElementById('add-book').getElementsByTagName('input');
    let isvalid=true;
    for(let i=0;i<inputs.length;i++){
        if(!inputs[i].checkValidity()){
            isvalid=false;
            document.getElementById("demo").innerHTML="Input required";
            break;
        }
    }
    if(isvalid){
        addBookToLibrary(title, author, edition, read);
        loopthroughLibrary();

        document.getElementById('add-book').reset();
        document.getElementById('add-book').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
    }
}/*
    addBookToLibrary(title, author, edition, read);
    loopthroughLibrary();

    document.getElementById('add-book').reset();
    document.getElementById('add-book').style.display = 'none';
}*/