const button = document.getElementById('bookButton');
const toast = document.getElementById('toast');

button.addEventListener('click', () => {
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
});
