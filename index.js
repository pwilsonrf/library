let myLibrary = new Array();
addBookToLibrary ("Greatness", "Lewis Howes", 259, "Not Read", myLibrary)
addBookToLibrary ("Brand With Purpose", "Ivan Estrada", 148, "In Progress", myLibrary)
addBookToLibrary ("I will Teach you to Be Rich", "Ramit Sethi", 278, "Read", myLibrary)
myLibraryLoop(myLibrary);

function Book(){
    
}

function addBookToLibrary (title, author, noOfPages, status, myLibrary){
    myLibrary.push(`${title} by ${author}, ${noOfPages} pages, ${status}`);

    const bookShelf = document.querySelector('.book-shelf');

    //Create card
    let currentBook = document.createElement("div");
    currentBook.id = 'book' + myLibrary.length;
    currentBook.className = "book-item";

    //Organize Book Data
    let currentBookArray = myLibrary[myLibrary.length - 1].split(","); //Separate data
    console.log(currentBookArray)
     
    let currentBookTitle = document.createElement("h3");
    currentBookTitle.innerText = currentBookArray[0];

    let currentBookPages = document.createElement("p");
    currentBookPages.innerText = currentBookArray[1];

    let currentBookStatus = document.createElement("p");
    currentBookStatus.id = "book-status"
    currentBookStatus.innerText = currentBookArray[2];

    //Push book elements into Div

    currentBook.appendChild(currentBookTitle);
    currentBook.appendChild(currentBookPages);
    currentBook.appendChild(currentBookStatus);
    bookShelf.appendChild(currentBook);
    return `${title} by ${author}, ${noOfPages} pafges, ${status}`;
}

function myLibraryLoop (myLibrary){
    const bookShelf = document.querySelector('.book-shelf');
    for(i = 0; i < myLibrary.length; i++){

        //Create card
        let currentBook = document.createElement("div");
        currentBook.id = 'book' + i;
        currentBook.className = "book-item";

        //Organize Book Data
        let currentBookArray = myLibrary[i].split(","); //Separate data
        console.log(currentBookArray)
         
        let currentBookTitle = document.createElement("h3");
        currentBookTitle.innerText = currentBookArray[0];

        let currentBookPages = document.createElement("p");
        currentBookPages.innerText = currentBookArray[1];

        let currentBookStatus = document.createElement("p");
        currentBookStatus.id = "book-status"
        currentBookStatus.innerText = currentBookArray[2];

        //Push book elements into Div

        currentBook.appendChild(currentBookTitle);
        currentBook.appendChild(currentBookPages);
        currentBook.appendChild(currentBookStatus);
        bookShelf.appendChild(currentBook);
        

        currentBook = ""; //Delete previous entry

    }
}


//Pop up form when AddBook button is clicked
let popUpForm = document.querySelector("#popUpForm"); //Pop-up Form
var button = document.getElementById("addBook"); //Add Book Button

//Button behavior
button.addEventListener("click", function () {
    document.getElementById("popUpForm").style.display = "block";
});



//Grab information from form
var titleValue = document.getElementById("form-id").addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    addBookToLibrary(formProps.title, formProps.author, formProps.noOfPages, formProps.status, myLibrary)
    console.log(formProps);
})
console.log(titleValue);




console.log(myLibrary)