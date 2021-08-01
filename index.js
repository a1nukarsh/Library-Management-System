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
  tableBody.innerHTML += uiString;
};
// Implement the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// Implement the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

// Implemnt show function
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("msg");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
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
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your Book has been added successfully.");
  } else {
    //   show error to the user
    display.show(
      "danger",
      "Sorry This book cannot be added, you should check some of those fields below."
    );
  }
  e.preventDefault();
}
