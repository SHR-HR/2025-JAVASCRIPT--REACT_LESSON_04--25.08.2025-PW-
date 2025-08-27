// Импорт React
import React from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";
// Импорт константы максимального лимита цены из файла данных
import { MAX_PRICE_LIMIT } from "./data";

// Компонент фильтра по максимальной цене
// Принимает пропсы:
// - maxPrice: текущее значение максимальной цены
// - setMaxPrice: функция для установки нового значения максимальной цены
export default function PriceFilter({ maxPrice, setMaxPrice }) {
  // Возвращаем JSX разметку компонента
  return (
    // Контейнер элемента управления (фильтра цены)
    <div className={s.control}>
      {/* Метка для элемента управления с отображением текущего значения */}
      <label className={s.label}>Макс. цена: <b>{maxPrice}</b></label>
      
      {/* Ползунок (range input) для визуального выбора максимальной цены */}
      <input
        className={s.range}
        type="range" // Тип input - ползунок
        min="0" // Минимальное значение 0
        max={MAX_PRICE_LIMIT} // Максимальное значение из константы
        value={maxPrice} // Текущее значение максимальной цены
        // Обработчик изменения: преобразуем значение в число и устанавливаем
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      
      {/* Числовое поле для точного ввода максимальной цены */}
      <input
        className={s.inputNumber}
        type="number" // Тип input - числовое поле
        min="0" // Минимальное значение 0
        max={MAX_PRICE_LIMIT} // Максимальное значение из константы
        value={maxPrice} // Текущее значение максимальной цены
        // Обработчик изменения: преобразуем значение в число или используем 0 если преобразование не удалось
        onChange={(e) => setMaxPrice(Number(e.target.value) || 0)}
      />
    </div>
  );
}






