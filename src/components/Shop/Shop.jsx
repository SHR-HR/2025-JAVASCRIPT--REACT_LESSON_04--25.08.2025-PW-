// Импорт React и необходимых хуков
import React, { useEffect, useMemo, useState } from "react";
// Импорт стилей из модуля Shop
import s from "./Shop.module.scss";

// Импорт начальных данных и констант
import { initialProducts, CATEGORIES, collatorRU } from "./data";
// Импорт функций для работы с localStorage
import { read, write } from "./persist";

// Импорт компонентов магазина
import ViewSwitch     from "./ViewSwitch";
import CategoryFilter from "./CategoryFilter";
import SearchBox      from "./SearchBox";
import PriceFilter    from "./PriceFilter";
import SortControl    from "./SortControl";
import ExpensiveStat  from "./ExpensiveStat";
import AddProductForm from "./AddProductForm";
import ProductsGrid   from "./ProductsGrid";
import ProductsTable  from "./ProductsTable";

// Основной компонент магазина
export default function Shop() {
  // Состояние для списка товаров (начальное значение из initialProducts)
  const [products, setProducts] = useState(initialProducts);

  // --- состояния для фильтров/сортировки/вида (с чтением из localStorage) ---
  
  // Поисковый запрос (чтение из localStorage или пустая строка по умолчанию)
  const [query, setQuery] = useState(() => read('shop:query', ''));
  // Максимальная цена (чтение из localStorage или 100000 по умолчанию)
  const [maxPrice, setMaxPrice] = useState(() => read('shop:maxPrice', 100000));
  // Направление сортировки (чтение из localStorage или 'asc' по умолчанию)
  const [sortDir, setSortDir] = useState(() => read('shop:sortDir', 'asc'));
  // Выбранная категория (чтение из localStorage или 'Все' по умолчанию)
  const [category, setCategory] = useState(() => read('shop:category', 'Все'));
  // Порог для "дорогих" товаров (чтение из localStorage или 5000 по умолчанию)
  const [expensiveThreshold, setExpensiveThreshold] = useState(() => read('shop:threshold', 5000));
  // Режим отображения (чтение из localStorage или 'tiles' по умолчанию)
  const [view, setView] = useState(() => read('shop:view', 'tiles'));

  // --- сохранение состояний в localStorage (persist) ---
  
  // Эффект для сохранения поискового запроса
  useEffect(()=>write('shop:query', query), [query]);
  // Эффект для сохранения максимальной цены
  useEffect(()=>write('shop:maxPrice', maxPrice), [maxPrice]);
  // Эффект для сохранения направления сортировки
  useEffect(()=>write('shop:sortDir', sortDir), [sortDir]);
  // Эффект для сохранения выбранной категории
  useEffect(()=>write('shop:category', category), [category]);
  // Эффект для сохранения порога "дорогих" товаров
  useEffect(()=>write('shop:threshold', expensiveThreshold), [expensiveThreshold]);
  // Эффект для сохранения режима отображения
  useEffect(()=>write('shop:view', view), [view]);

  // --- вычисления (мемоизированные) ---
  
  // Мемоизированный список отфильтрованных и отсортированных товаров
  const filtered = useMemo(() => {
    // Фильтрация по категории (если выбрано "Все" - все товары)
    const byCat  = category === "Все" ? products : products.filter(p => p.category === category);
    // Фильтрация по максимальной цене
    const byMax  = byCat.filter(p => Number(p.price) <= Number(maxPrice));
    // Фильтрация по текстовому запросу (чувствительно к регистру)
    const byText = query ? byMax.filter(p => p.name.includes(query)) : byMax;
    
    // Сортировка по имени в выбранном направлении с использованием коллатора для русского языка
    return [...byText].sort((a,b) =>
      sortDir === "asc" ? collatorRU.compare(a.name, b.name)
                        : collatorRU.compare(b.name, a.name)
    );
  }, [products, category, maxPrice, query, sortDir]);

  // Мемоизированное количество "дорогих" товаров в отфильтрованном списке
  const expensiveInFiltered = useMemo(
    () => filtered.filter(p => Number(p.price) > Number(expensiveThreshold)).length,
    [filtered, expensiveThreshold]
  );

  // --- обработка добавления товара ---
  
  // Функция для добавления нового товара (получаем объект из формы)
  const handleAdd = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  // Возвращаем JSX разметку компонента магазина
  return (
    <section className={s.shop}>
      {/* Шапка магазина */}
      <header className={s.header}>
        <div>
          <h1>Магазин</h1>
          <p className={s.sub}>Фильтры сохраняются в localStorage. Вид: «плитка» / «таблица».</p>
        </div>
        {/* Переключатель вида (плитка/таблица) */}
        <ViewSwitch view={view} setView={setView} />
      </header>

      {/* Панель управления фильтрами */}
      <div className={s.controls}>
        {/* Фильтр по категории */}
        <CategoryFilter
          categories={CATEGORIES}
          category={category}
          onChange={setCategory}
        />
        {/* Поисковая строка */}
        <SearchBox value={query} onChange={setQuery} />
        {/* Фильтр по цене */}
        <PriceFilter maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
        {/* Управление сортировкой */}
        <SortControl setSortDir={setSortDir} />
        {/* Статистика "дорогих" товаров */}
        <ExpensiveStat
          expensiveThreshold={expensiveThreshold}
          setExpensiveThreshold={setExpensiveThreshold}
          expensiveInFiltered={expensiveInFiltered}
        />
      </div>

      {/* Форма добавления нового товара */}
      <AddProductForm categories={CATEGORIES} onAdd={handleAdd} />

      {/* Условный рендеринг: плитки или таблица в зависимости от выбранного вида */}
      {view === 'tiles'
        ? <ProductsGrid items={filtered} />
        : <ProductsTable items={filtered} />
      }
    </section>
  );
}






