// Импорт функции defineConfig из Vite для типизированной конфигурации
import { defineConfig } from 'vite'

// Импорт плагина React для Vite
import react from '@vitejs/plugin-react'

// Базовый URL конфигурации: https://vite.dev/config/
// Экспорт конфигурации по умолчанию с использованием defineConfig
export default defineConfig({
  // Массив плагинов, которые будут использоваться в Vite
  plugins: [
    // Плагин React для поддержки JSX, горячей перезагрузки (HMR) и других React-фич
    react()
  ],
})




