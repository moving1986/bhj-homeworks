const editText = document.querySelector('#editor');
const reset = document.querySelector('#resetText');

if (localStorage.text) {
    editText.value = openStorge();
}

function saveStorge() {
    localStorage.text = JSON.stringify(editText.value);
}

function openStorge() {
    return JSON.parse(localStorage.text);
}

function resetText() {
    editText.value = '';
    delete localStorage.text;
}

editText.addEventListener('input', saveStorge);
reset.addEventListener('click', resetText);
