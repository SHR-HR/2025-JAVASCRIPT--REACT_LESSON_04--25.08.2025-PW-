// Импорт React и хука useState для работы с состоянием компонента
import React, { useState } from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";
// Импорт компонента Button из UI-библиотеки
import Button from "../../UI/Button/Button";

// Компонент формы добавления нового товара
// Принимает пропсы:
// - categories: массив доступных категорий
// - onAdd: функция обратного вызова для добавления товара
export default function AddProductForm({ categories, onAdd }) {
  // Состояние для названия товара
  const [name, setName] = useState("");
  // Состояние для цены товара
  const [price, setPrice] = useState("");
  // Состояние для категории товара, по умолчанию первая категория (исключая "Все")
  const [category, setCategory] = useState(categories.find(c => c !== "Все"));

  // Проверка возможности добавления товара:
  // - название не пустое (после обрезки пробелов)
  // - цена больше 0
  const canAdd = name.trim().length > 0 && Number(price) > 0;

  // Обработчик добавления товара
  const handleAdd = () => {
    // Если нельзя добавить (не выполнены условия), выходим из функции
    if (!canAdd) return;
    
    // Вызываем функцию onAdd с данными нового товара:
    // - id: текущая временная метка (уникальный идентификатор)
    // - name: название с обрезанными пробелами
    // - price: цена преобразованная в число
    // - category: выбранная категория
    onAdd({ id: Date.now(), name: name.trim(), price: Number(price), category });
    
    // Сброс полей формы после добавления:
    // - очищаем название
    // - очищаем цену
    // - сбрасываем категорию на первую доступную (исключая "Все")
    setName(""); setPrice(""); setCategory(categories.find(c => c !== "Все"));
  };

  // Возвращаем JSX разметку компонента
  return (
    <div className={s.add}>
      {/* Заголовок формы */}
      <h2 className={s.h2}>Добавить товар</h2>
      
      {/* Строка с полями формы */}
      <div className={s.addRow}>
        {/* Поле ввода названия товара */}
        <input
          className={s.input}
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        {/* Поле ввода цены товара */}
        <input
          className={s.inputNumber}
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        
        {/* Выпадающий список категорий */}
        <select
          className={s.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {/* Фильтруем категории (убираем "Все") и создаем options */}
          {categories.filter(c => c !== "Все").map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        
        {/* Кнопка добавления товара, disabled если нельзя добавить */}
        <Button onClick={handleAdd} disabled={!canAdd}>Добавить</Button>
      </div>
      
      {/* Подсказка, если нельзя добавить товар */}
      {!canAdd && <small className={s.hint}>Введите название и цену &gt; 0</small>}
    </div>
  );
}




