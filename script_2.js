const validateName = (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    errorMessage.textContent = '';
    successMessage.textContent = '';

    if (!nameInput.value.trim()) {
        errorMessage.textContent = '名前を入力してください';
        return;
    }

    if (nameInput.value.length < 3) {
        errorMessage.textContent = '名前は3文字以上で入力してください';
        return;
    }

    if (nameInput.value.length > 5) {
        errorMessage.textContent = '名前は5文字以下で入力してください';
        return;
    }

    successMessage.textContent = '送信されました';
    nameInput.value = '';

};

document.getElementById('nameForm').addEventListener('submit', validateName);

