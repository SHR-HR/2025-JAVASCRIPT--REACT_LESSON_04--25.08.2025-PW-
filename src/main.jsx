// Импорт StrictMode из React для активации строгого режима
import { StrictMode } from 'react'

// Импорт функции createRoot из react-dom/client для создания корневого элемента
import { createRoot } from 'react-dom/client'

// Импорт основного компонента приложения App
import App from './App.jsx'

// Создание корневого элемента React и рендеринг приложения в DOM
createRoot(document.getElementById('root')).render(
  // Оборачиваем приложение в StrictMode для выявления потенциальных проблем
  // StrictMode активирует дополнительные проверки и предупреждения в development-режиме
  <StrictMode>
    {/* Основной компонент приложения */}
    <App />
  </StrictMode>,
)






