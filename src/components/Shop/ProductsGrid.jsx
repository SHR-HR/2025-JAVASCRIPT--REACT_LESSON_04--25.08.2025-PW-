// Импорт React
import React from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";
// Импорт компонента карточки товара
import ProductCard from "./ProductCard";

// Компонент сетки товаров для отображения в виде плиток
// Принимает пропс items: массив товаров для отображения
export default function ProductsGrid({ items }) {
  // Если массив товаров пустой, возвращаем сообщение "Нет товаров"
  if (items.length === 0) return <div className={s.empty}>Нет товаров</div>;
  
  // Возвращаем JSX разметку компонента сетки товаров
  return (
    // Контейнер сетки товаров с применением стилей grid
    <div className={s.grid}>
      {/* Маппинг массива товаров: для каждого товара создаем карточку */}
      {items.map(p => 
        // Компонент карточки товара с уникальным ключом (id товара)
        // и передачей объекта товара через проп product
        <ProductCard key={p.id} product={p} />
      )}
    </div>
  );
}



