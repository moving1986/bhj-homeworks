
const poloTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers')

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

let obj;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        obj = JSON.parse(xhr.responseText);
        poloTitle.textContent = obj.data.title;

        obj.data.answers.forEach(item => {
            pollAnswers.insertAdjacentHTML('beforeEnd', `
            <button class="poll__answer">
                 ${item}
            </button>
            `);
        })
        
        const buttons = pollAnswers.querySelectorAll('button');
        buttons.forEach(item => item.addEventListener('click', () => 
        alert('Спасибо, ваш голос засчитан!')
        )
        );  
    };
};
