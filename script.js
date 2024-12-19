const notebook = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".note");

function showNotes(){
    notebook.innerHTML = localStorage.getItem("notes");
}

function saveData(){

    localStorage.setItem("notes", notebook.innerHTML);

}

creatBtn.addEventListener("click",()=>{

    let inputBox = document.createElement("p");
    let image = document.createElement("img");
    inputBox.className = 'note';
    inputBox.setAttribute('contenteditable','true');
    image.src = 'images/delete.png';
    notebook.appendChild(inputBox).appendChild(image);

})

notebook.addEventListener("click",function(e){

    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.note');

        notes.forEach(nt => {
            nt.onkeyup = function(){saveData();}
        })
    }
})

document.addEventListener("keydown",event => {

    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})
showNotes();
saveData();