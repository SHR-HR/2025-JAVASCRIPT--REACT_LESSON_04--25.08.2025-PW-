// Импорт React
import React from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";
// Импорт компонента Button из UI-библиотеки
import Button from "../../UI/Button/Button";

// Компонент управления сортировкой по имени
// Принимает пропс setSortDir: функция для установки направления сортировки
export default function SortControl({ setSortDir }) {
  // Возвращаем JSX разметку компонента управления сортировкой
  return (
    // Контейнер элемента управления (сортировки)
    <div className={s.control}>
      {/* Метка для элемента управления сортировкой */}
      <label className={s.label}>Сортировка по имени</label>
      
      {/* Контейнер для кнопок сегментированного управления сортировкой */}
      <div className={s.segmentBtns}>
        {/* Кнопка для сортировки по возрастанию (а → я) */}
        <Button onClick={() => setSortDir("asc")}>
          {/* Текст кнопки: стрелка от а к я (по возрастанию) */}
          а → я
        </Button>
        
        {/* Кнопка для сортировки по убыванию (я → а) */}
        <Button onClick={() => setSortDir("desc")}>
          {/* Текст кнопки: стрелка от я к а (по убыванию) */}
          я → а
        </Button>
      </div>
    </div>
  );
}





