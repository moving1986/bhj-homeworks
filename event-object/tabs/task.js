const tabKey = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

tabKey.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab_active'));
        document.querySelectorAll('.tab__content').forEach(content => content.classList.remove('tab__content_active'));

        tab.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active')
    }
    );
});