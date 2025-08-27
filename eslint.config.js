// Импорт необходимых модулей для конфигурации ESLint
import js from '@eslint/js' // Базовые конфигурации ESLint
import globals from 'globals' // Глобальные переменные для разных сред (browser, node и т.д.)
import reactHooks from 'eslint-plugin-react-hooks' // Плагин для правил React Hooks
import reactRefresh from 'eslint-plugin-react-refresh' // Плагин для React Refresh (Hot Module Replacement)
import { defineConfig, globalIgnores } from 'eslint/config' // Функции для создания конфигурации ESLint

// Экспорт конфигурации ESLint по умолчанию
export default defineConfig([
  // Глобальное игнорирование директории dist (собранные файлы)
  globalIgnores(['dist']),
  
  {
    // Применять правила ко всем JavaScript и JSX файлам
    files: ['**/*.{js,jsx}'],
    
    // Расширяем базовые конфигурации
    extends: [
      js.configs.recommended, // Рекомендуемые правила от ESLint
      reactHooks.configs['recommended-latest'], // Последние рекомендуемые правила для React Hooks
      reactRefresh.configs.vite, // Правила для React Refresh в Vite
    ],
    
    // Настройки языка JavaScript
    languageOptions: {
      // Версия ECMAScript 2020
      ecmaVersion: 2020,
      
      // Глобальные переменные браузера (window, document, console и т.д.)
      globals: globals.browser,
      
      // Настройки парсера
      parserOptions: {
        // Использовать последнюю версию ECMAScript
        ecmaVersion: 'latest',
        
        // Включить поддержку JSX
        ecmaFeatures: { jsx: true },
        
        // Использовать модули ES6
        sourceType: 'module',
      },
    },
    
    // Кастомные правила
    rules: {
      // Правило для неиспользуемых переменных
      // 'error' - считать ошибкой
      // varsIgnorePattern - игнорировать переменные, начинающиеся с заглавной буквы или _
      // (часто используются для констант или компонентов React)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])





