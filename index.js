console.log("this is index.js");

// Constructor
function Book(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

// Display Constructor
function Display() {}

// Add Methods to Display's prototypes
Display.prototype.add = function (book) {
  console.log("Adding to the form UI");
  let tableBody = document.getElementById("tableBody");
  let uiString = ` 
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
        </tr>`;
    tableBody.innerHTML += uiString
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// Add Submit event listener to form libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("Book added successfully");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;

  let fiction = document.getElementById("fiction");
  let selfhelp = document.getElementById("self-help");
  let nonfiction = document.getElementById("non-fiction");
  let genre;
  if (fiction.checked) {
    genre = fiction.value;
  } else if (selfhelp.checked) {
    genre = selfhelp.value;
  } else if (nonfiction.checked) {
    genre = nonfiction.value;
  }
  let book = new Book(name, author, genre);
  console.log(book);

  let display = new Display();
  display.add(book);
  display.clear();

//   if(name==null){
//       alert("Enter Book Name")
//   }
//   if(aurhor==null){
//       alert("Enter Author Name")
//   }
  e.preventDefault();
}
