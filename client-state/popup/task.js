const modalWindow = document.querySelector('.modal');
const closeBtn = modalWindow.querySelector('.modal__close');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

const show = getCookie('showed');

function openModal() {
    modalWindow.classList.add('modal_active');
};

closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove('modal_active');
    document.cookie = 'showed=Да; secure;';
});

if (!show) {
    setTimeout(openModal, 10000);
};
