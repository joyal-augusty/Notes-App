const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//if reopen browser display notes from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//local storage of notes function
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//notes add button function
createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img')
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img)
    updateStorage()
});

//notes delete function
notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

//line break in notes
document.addEventListener("keydown", Event => {
    if (Event.key === "Enter") {
        document.execCommand("insertLineBreak");
        Event.preventDefault();
    }
})
