// Импорт React
import React from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";

// Компонент фильтра по категориям
// Принимает пропсы:
// - categories: массив доступных категорий для фильтрации
// - category: текущая выбранная категория
// - onChange: функция обратного вызова при изменении категории
export default function CategoryFilter({ categories, category, onChange }) {
  // Возвращаем JSX разметку компонента
  return (
    // Контейнер элемента управления (фильтра)
    <div className={s.control}>
      {/* Метка для элемента управления */}
      <label className={s.label}>Категория</label>
      
      {/* Контейнер для кнопок-сегментов категорий */}
      <div className={s.segs}>
        {/* Маппинг массива категорий для создания кнопок */}
        {categories.map(cat => (
          // Кнопка-сегмент для каждой категории
          <button
            key={cat} // Уникальный ключ для React (название категории)
            type="button" // Тип кнопки - обычная кнопка (не submit)
            // Условное применение стилей: активный стиль если категория совпадает с текущей
            className={cat === category ? s.segActive : s.seg}
            // Обработчик клика: вызываем onChange с выбранной категорией
            onClick={() => onChange(cat)}
          >
            {/* Отображение названия категории на кнопке */}
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}





