console.log("Notes Taking App By Ankit Bansal   ")
showNotes();


//Adding A Node
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {
    let notes = document.getElementById('nodes-text-area');
    console.log(notes.value);

    let lStorage = localStorage.getItem("notes");
    if (lStorage == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(localStorage.getItem("notes"));
    }

    notesObj.push(notes.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
});


//To Show All the Notes Present
function showNotes() {

    let lStorage = localStorage.getItem("notes");
    if (lStorage == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(localStorage.getItem("notes"));
    }

    let html = ''
    Array.from(notesObj).forEach(function (element, index) {
        html += ` <div class="notes-card my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Note ${index+1}</h5>
                        <p class="card-text">${element}</p>
                        <button id=${index} onclick="deleteNode(this.id)" class="btn btn-primary">Delete</button>
                        </div>
                </div>`
    });

    let noteSpace  = document.getElementById('notes-space');
    noteSpace.innerHTML = html;
}


// To Delete the Node

function deleteNode(index){
    console.log("deleting ", index) ;   
    let lStorage = localStorage.getItem("notes");
    if (lStorage == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(localStorage.getItem("notes"));
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//Searching The Node

let search = document.getElementById('search-txt');
search.addEventListener('input', function(e){
    let found = search.value;

    let card = document.getElementsByClassName('notes-card');
    console.log(card)
    Array.from(card).forEach(function(e){
        let text = e.getElementsByTagName('p')[0].innerText;
  
        if(text.includes(found))
            e.style.display  = "block";
        else
            e.style.display = "none";
    });

})