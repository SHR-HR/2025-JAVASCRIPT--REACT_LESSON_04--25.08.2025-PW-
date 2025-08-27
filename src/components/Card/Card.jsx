// Импорт React и необходимых модулей
import React from 'react'
// Импорт SCSS-модуля для стилей компонента Card
import s from './Card.module.scss'
// Импорт компонента Button из UI-библиотеки
import Button from '../../UI/Button/Button'

// Компонент Card для отображения карточки с заголовком, контентом и кнопкой
function Card({title, content, onClick}) {
  return (
    // Основной контейнер карточки с применением стилей из SCSS-модуля
    <div className={s.wrapper}>
        {/* Заголовок карточки с применением стилей для заголовка */}
        <h3 className={s.wrapper_title}>{title}</h3>
        
        {/* Содержимое карточки (текст) */}
        <p>{content}</p>
        
        {/* Кнопка с обработчиком onClick и фиксированным текстом "test" */}
        <Button onClick={onClick}>test</Button>
    </div>
  )
}

// Экспорт компонента Card по умолчанию
export default Card



