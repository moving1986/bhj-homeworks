const imageLoader = document.querySelector('.loader');
const itemsRate = document.querySelector('#items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
let object;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        imageLoader.classList.remove('loader_active');

        object = JSON.parse(xhr.responseText);
        const value = object.response.Valute;
        
        for (let key in value) {
            itemsRate.insertAdjacentHTML('beforeEnd',
                `<div class="item">
           <div class="item__code">
                   ${value[key]['CharCode']}
               </div>
               <div class="item__value">
                   ${value[key]['Value']}
               </div>   
               <div class="item__currency">
                     руб.
                </div>                
         </div>`);                
        }
    };
};