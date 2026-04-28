document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('button');
    if (!btn) return;
    btn.addEventListener('click', () => toggleButtonText(btn));
});

const toggleButtonText = (btn) => {
    if (btn.textContent === 'Hello World') {
        btn.textContent = 'Happy Hacking!!!';
        btn.style.backgroundColor = 'red';
    } else {
        btn.textContent = 'Hello World';
        btn.style.backgroundColor = 'blue';
    }
};