let myLibrary = new Array();

function Book(){
    
}

function addBookToLibrary (title, author, noOfPages, status, myLibrary){
    myLibrary.push(`${title} by ${author}, ${noOfPages} pages, ${status}`);
    return `${title} by ${author}, ${noOfPages} pafges, ${status}`;
}

function myLibraryLoop (myLibrary){
    for(i = 0; i < myLibrary.length; i++){

        //Create card
        const currentBook = document.createElement("div");
        currentBook.id = 'book' + i;
        
        
        
        const bookShelf = document.querySelector('#book-shelf');
        bookShelf.appendChild(currentBook);

        currentBook = ""; //Delete previous entry

    }

}