const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropValue = dropdown.querySelector('.dropdown__value');
    const downList = dropdown.querySelector('.dropdown__list');
    const links = dropdown.querySelectorAll('.dropdown__link');

    dropValue.addEventListener('click', () => {
        downList.classList.toggle('dropdown__list_active')
    });

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            dropValue.textContent = link.textContent;
            downList.classList.remove('dropdown__list_active');
        })
    });
});


