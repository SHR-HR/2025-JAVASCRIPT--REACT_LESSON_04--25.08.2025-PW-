import React from 'react';
import s from './Button.module.scss';

// Компонент кнопки с поддержкой различных свойств
function Button({ onClick, children, disabled, className }) {
  // Формирование класса кнопки: объединяем базовый класс и переданный className
  // filter(Boolean) удаляет пустые значения, join(' ') объединяет в строку
  const cls = [s.wrapper, className].filter(Boolean).join(' ');
  
  return (
    // Элемент кнопки с обработчиком клика и состоянием disabled
    <button 
      type="button" // Тип кнопки - обычная кнопка (не submit)
      disabled={disabled} // Состояние disabled (true/false)
      className={cls} // CSS-классы кнопки
      onClick={onClick} // Обработчик клика
    >
      {/* Содержимое кнопки (текст или другие элементы) */}
      {children}
    </button>
  );
}

// Экспорт компонента Button по умолчанию
export default Button;




