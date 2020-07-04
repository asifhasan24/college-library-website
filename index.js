function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() {

}
Display.prototype.add = function (book) {
    console.log('Adding to UI');
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    tableBody.innerHTML += uiString;


}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}


Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    console.log('You have submitted Library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let Electrical = document.getElementById('Electrical');
    let Programming = document.getElementById('Programming');
    let Mechanical = document.getElementById('Mechanical');
    let Communication = document.getElementById('Communication');


    if (Electrical.checked) {
        type = Electrical.value;
    }
    else if (Programming.checked) {
        type = Programming.value;
    }
    else if (Mechanical.checked) {
        type = Mechanical.value;
    }
    else if (Communication.checked) {
        type = Communication.value;
    }
    let book = new Book(name, author, type);
    console.log('Book')

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added.');
    }
    else {
        display.show('danger', ' Sorry you cannot add this book.');
    }

    e.preventDefault();

}