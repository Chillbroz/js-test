// Отримуємо необхідні елементи DOM
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('myModal');
const closeAndSubmitButton = document.getElementById('closeAndSubmitButton');
const myForm = document.getElementById('myForm');
const inputData = document.getElementById('inputData');

// Функція для відкриття модального вікна
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Функція для закриття модального вікна
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Функція для відправки форми та закриття модального вікна
closeAndSubmitButton.addEventListener('click', () => {
    // Отримуємо дані з поля вводу
    const inputDataValue = inputData.value;
    
    // Відправляємо дані (робіть що завгодно з цими даними)
    console.log('Введені дані:', inputDataValue);
    
    // Закриваємо модальне вікно
    modal.style.display = 'none';
    
    // Очищаємо поле вводу
    inputData.value = '';
});

// Закрийте модальне вікно, якщо користувач клікає поза ним
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Додайте інші обробники подій або функціональність за потребою
