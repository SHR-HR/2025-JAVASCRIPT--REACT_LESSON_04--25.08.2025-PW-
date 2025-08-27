// Импорт React и хука useState для работы с состоянием компонента
import React, { useState } from "react";
// Импорт компонента Button из UI-библиотеки
import Button from "../../UI/Button/Button";

// Компонент MyForm - форма для ввода и изменения текста
// Принимает пропс setText - функцию для изменения глобального текста
function MyForm({ setText }) {
    // Локальное состояние для хранения текста из input
    const [inputText, setInputText] = useState('')
    
    // Обработчик изменения значения в input поле
    const handleInput = (event) => {
        // Обновляем локальное состояние значением из input
        setInputText(event.target.value)
    }
    
    // Функция для изменения глобального текста и очистки input
    const changeGlobalText = () => {
        // Передаем текущий текст в глобальное состояние через пропс setText
        setText(inputText)
        // Очищаем локальное состояние input
        setInputText('')
    }
    
  // Возвращаем JSX разметку компонента
  return (
    <div>
        {/* Отображение текущего текста из локального состояния */}
        <p>{inputText}</p>
        
        {/* Поле ввода текста */}
        {/* value - привязка значения к локальному состоянию */}
        {/* onChange - обработчик изменения значения */}
        <input type="text" value={inputText} onChange={handleInput}/>
        
        {/* Кнопка для применения изменений */}
        {/* При клике вызывается функция changeGlobalText */}
        <Button onClick={changeGlobalText}>change text</Button>
    </div>
  );
}

// Экспорт компонента MyForm по умолчанию
export default MyForm;




