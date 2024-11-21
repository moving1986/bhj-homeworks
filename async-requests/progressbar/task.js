const progress = document.getElementById('progress');
const sendForm = document.querySelector('#form');
const file = sendForm.querySelector('#file');

sendForm.addEventListener('submit', (e) => {
   
    e.preventDefault();
   
    let xhr = new XMLHttpRequest();
    const formData = new FormData(sendForm);

    formData.append('file', file.files[0]);

    xhr.upload.onloadstart = function (e) {            
        progress.value = 0;            
    };

    xhr.upload.onprogress = function (e) {          
        progress.value = e.loaded/e.total;            
    };

    xhr.upload.onloadend = function () {
        progress.value = 1;
        setTimeout(()=> {
            alert('Данные полностью загружены на сервер!');
            progress.value = 0;
            sendForm.reset();
            sendForm.querySelector('.input__wrapper-desc').textContent = 'Имя файла...';
        }, 1000);                      
    };
    xhr.upload.onerror = function () {
        alert('Произошла ошибка при загрузке данных на сервер!');
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
  
});
