const toggleButtonText = () => {
    const btn = document.getElementById('button');

    if (btn.textContent === 'Hello World') {
        btn.textContent = 'Happy Hacking!';
        btn.style.backgroundColor = 'red';
    } else {
        btn.textContent = 'Hello World';
        btn.style.backgroundColor = 'blue';
    }
};