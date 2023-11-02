// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterElement = document.getElementById('value');
let counterValue = 0;

document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {
    counterValue -= 1;
    counterElement.textContent = counterValue;
  });
  
  document.querySelector('button[data-action="increment"]').addEventListener('click', () => {
    counterValue += 1;
    counterElement.textContent = counterValue;
  });