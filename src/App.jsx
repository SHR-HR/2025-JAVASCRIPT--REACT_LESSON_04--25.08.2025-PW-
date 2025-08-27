import { useEffect, useState } from 'react';
import './styles/globals.scss';

// Импорт компонентов магазина
import Shop from './components/Shop/Shop';

// Импорт демонстрационных компонентов для урока
import Card from './components/Card/Card';
import Clicker from './components/Clicker/Clicker';
import MyForm from './components/MyForm/MyForm';
import Button from './UI/Button/Button';

// Основной компонент приложения
function App() {
  // Состояние для текста (используется в демо-компонентах)
  const [text, setText] = useState('');
  
  // Состояние для отображения/скрытия демонстрационных компонентов урока
  const [showLessons, setShowLessons] = useState(false);

  // --- УПРАВЛЕНИЕ ТЁМНОЙ ТЕМОЙ (сохраняется в localStorage) ---
  
  // Состояние для текущей темы (light - светлая, dark - тёмная)
  // При инициализации читаем значение из localStorage или используем 'light' по умолчанию
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  
  // Эффект для сохранения темы в localStorage и применения к документу
  useEffect(() => {
    // Сохраняем текущую тему в localStorage
    localStorage.setItem('theme', theme);
    
    // Добавляем или удаляем класс 'theme-dark' у корневого элемента документа
    // в зависимости от выбранной темы
    document.documentElement.classList.toggle('theme-dark', theme === 'dark');
  }, [theme]); // Эффект срабатывает при изменении темы

  return (
    <div className="box">
      {/* Панель управления темой в правом верхнем углу */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12, margin:'8px 0 4px'}}>
        {/* Пустой элемент для выравнивания */}
        <div/>
        
        {/* Кнопка переключения темы */}
        <div>
          <Button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
            {/* Отображение текущей темы на русском языке */}
            Тема: {theme === 'dark' ? 'тёмная' : 'светлая'}
          </Button>
        </div>
      </div>

      {/* Основной компонент магазина - всегда отображается */}
      <Shop />

      {/* Кнопка для показа/скрытия демонстрационных компонентов урока */}
      <div style={{ margin: '24px 0' }}>
        <Button onClick={() => setShowLessons(v => !v)}>
          {/* Динамический текст кнопки в зависимости от состояния */}
          {showLessons ? 'Скрыть что проходили на уроке' : 'Показать что проходили на уроке'}
        </Button>
      </div>

      {/* Условный рендеринг демонстрационных компонентов урока */}
      {showLessons && (
        <>
          {/* Отображение текста из состояния */}
          <h1>{text}</h1>
          
          {/* Демонстрационная карточка с заголовком и контентом */}
          <Card title="My card" content="text" onClick={() => console.log(123)} />
          
          {/* Компонент-счётчик кликов */}
          <Clicker />
          
          {/* Форма для ввода текста с передачей функции setText */}
          <MyForm setText={setText} />
        </>
      )}
    </div>
  );
}

// Экспорт компонента App по умолчанию
export default App;




