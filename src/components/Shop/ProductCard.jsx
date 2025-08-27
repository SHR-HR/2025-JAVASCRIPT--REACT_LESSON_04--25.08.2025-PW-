// Импорт React
import React from "react";
// Импорт SCSS-модуля со стилями для компонента карточки товара
import s from "./ProductCard.module.scss";

// Компонент карточки товара для отображения в виде плитки
// Принимает пропс product: объект с информацией о товаре
export default function ProductCard({ product }) {
  // Возвращаем JSX разметку компонента карточки товара
  return (
    // Основной контейнер карточки товара (семантический тег article)
    // Применяем стиль card из SCSS-модуля
    <article className={s.card}>
      {/* Верхняя часть карточки (контейнер для категории товара) */}
      {/* Применяем стиль top из SCSS-модуля */}
      <div className={s.top}>
        {/* Отображение категории товара в виде метки/бейджа */}
        {/* Применяем стиль category из SCSS-модуля */}
        <span className={s.category}>{product.category}</span>
      </div>
      
      {/* Название товара */}
      {/* Применяем стиль title из SCSS-модуля */}
      <div className={s.title}>{product.name}</div>
      
      {/* Блок с ценой товара и валютой */}
      {/* Применяем стиль price из SCSS-модуля */}
      <div className={s.price}>
        {/* Числовое значение цены товара (из объекта product) */}
        <span>{product.price}</span>
        {/* Отображение валюты (тенге) с отдельным стилем */}
        {/* Применяем стиль currency из SCSS-модуля */}
        <span className={s.currency}>тг.</span>
      </div>
    </article>
  );
}







