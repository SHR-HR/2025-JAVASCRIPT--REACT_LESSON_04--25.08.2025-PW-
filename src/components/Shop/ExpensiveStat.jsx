// Импорт React
import React from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";

// Компонент для отображения и настройки статистики "дорогих" товаров
// Принимает пропсы:
// - expensiveThreshold: текущее значение порога для определения "дорогих" товаров
// - setExpensiveThreshold: функция для установки нового значения порога
// - expensiveInFiltered: количество товаров дороже установленного порога в текущей выборке
export default function ExpensiveStat({
  expensiveThreshold,
  setExpensiveThreshold,
  expensiveInFiltered,
}) {
  // Возвращаем JSX разметку компонента
  return (
    // Контейнер элемента управления (статистики)
    <div className={s.control}>
      {/* Метка для элемента управления */}
      <label className={s.label}>Порог «дорогих» товаров</label>
      
      {/* Горизонтальный контейнер для поля ввода и бейджа */}
      <div className={s.row}>
        {/* Поле ввода числового значения порога */}
        <input
          className={s.inputNumber}
          type="number"
          min="0" // Минимальное значение 0
          value={expensiveThreshold} // Текущее значение порога
          // Обработчик изменения: преобразуем значение в число или используем 0 если преобразование не удалось
          onChange={(e) => setExpensiveThreshold(Number(e.target.value) || 0)}
        />
        
        {/* Бейдж с количеством "дорогих" товаров в текущей выборке */}
        <span className={s.badge}>
          Дороже: <b>{expensiveInFiltered}</b> {/* Жирное отображение количества */}
        </span>
      </div>
      
      {/* Подсказка с пояснением логики расчета */}
      <small className={s.hint}>Считается по текущей выборке (после фильтров).</small>
    </div>
  );
}




