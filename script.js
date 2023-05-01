const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('you must write something!');
    }
    else { //
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); //agar display di li
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; //membuat close icon
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked'); //target element
        saveData();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);


//untuk menyimpan data pada broser/lokalstporage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();


//------buttun ketika klik tampil berhasil
// function addTask() {
//     console.log('Berhasil!');
// }

//-----Menampilkan data
// function addTask() {
//     const teks = document.getElementById('input-box');
//     const nilaiInput = teks.value;
//     console.log('Berhasil!' + nilaiInput);
// }
