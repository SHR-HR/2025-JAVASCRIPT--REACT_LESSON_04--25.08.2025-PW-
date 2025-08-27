// Импорт React
import React from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";
// Импорт компонента Button из UI-библиотеки
import Button from "../../UI/Button/Button";

// Компонент переключателя вида отображения товаров
// Принимает пропсы:
// - view: текущий активный вид отображения ('tiles' или 'table')
// - setView: функция для установки нового вида отображения
export default function ViewSwitch({ view, setView }) {
  // Возвращаем JSX разметку компонента переключателя вида
  return (
    // Контейнер переключателя вида с применением стилей viewSwitch
    <div className={s.viewSwitch}>
      {/* Кнопка для переключения на вид "Плитка" */}
      <Button 
        onClick={() => setView('tiles')} // Обработчик: устанавливаем вид 'tiles'
        disabled={view==='tiles'} // Отключаем кнопку если текущий вид уже 'tiles'
      >
        {/* Текст кнопки */}
        Плитка
      </Button>
      
      {/* Кнопка для переключения на вид "Таблица" */}
      <Button 
        onClick={() => setView('table')} // Обработчик: устанавливаем вид 'table'
        disabled={view==='table'} // Отключаем кнопку если текущий вид уже 'table'
      >
        {/* Текст кнопки */}
        Таблица
      </Button>
    </div>
  );
}



