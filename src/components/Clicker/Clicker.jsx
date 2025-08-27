// Импорт React и хука useState для работы с состоянием компонента
import React, { useState } from 'react'
// Импорт компонента Button из UI-библиотеки
import Button from '../../UI/Button/Button';

// Компонент Clicker - простой счётчик кликов
function Clicker() {
// Инициализация состояния counter с начальным значением 0
// setCounter - функция для обновления значения counter
const [counter, setCounter] = useState(0);

  // Функция для увеличения счётчика на 1 при каждом вызове
  const increment = () => {
    // Обновление состояния: новое значение = текущее значение + 1
    setCounter(counter + 1);
  }

  // Возвращаем JSX разметку компонента
  return (
    <div>
        {/* Отображение текущего значения счётчика */}
        <p>{counter}</p>
        
        {/* Кнопка с обработчиком onClick, который вызывает функцию increment */}
        {/* Текст на кнопке: "click me" */}
        <Button onClick={increment}>click me</Button>
    </div>
  )
}

// Экспорт компонента Clicker по умолчанию
export default Clicker







