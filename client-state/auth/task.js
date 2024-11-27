const signin = document.querySelector('#signin');
const form = signin.querySelector('#signin__form');
const welcome = document.querySelector('#welcome');
const userId = welcome.querySelector('#user_id')

let obj = {};

function saveStorge() {
    localStorage.text = JSON.stringify(obj.user_id);
}

function openStorge() {
    return JSON.parse(localStorage.text);
}

function showWelcome() {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = openStorge();

}

function sendData(event) {
    event.preventDefault();
    const url = 'https://students.netoservices.ru/nestjs-backend/auth';
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.send(formData);

    xhr.onload = () => {
        obj = JSON.parse(xhr.responseText);
        if (obj.success === true) {
            saveStorge();
            showWelcome();
        } else {
            alert('Неверный логин/пароль');
        }
    };
}

if (localStorage.text) {
    showWelcome();
    setTimeout(delete localStorage.text, 10000);
}

form.addEventListener('submit', sendData);
