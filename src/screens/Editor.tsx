
import { useParams, useNavigate } from 'react-router-dom';

export default function Editor() {
  // айди берется из адресной строки поэтому тип string
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Верхняя панель (Toolbar) */}
      <header className="h-14 border-b border-slate-300 flex items-center justify-between px-4 bg-white shadow-sm">
        <button
          //Возвращает на предыдущую страницу. можно сделать прямую ссылку на гелерею вместо этого но это немного бессмысленно
          onClick={() => navigate(-1)}
          className="px-3 py-1 bg-slate-200 rounded hover:bg-slate-300 transition">
          Назад
        </button>
        <h1 className="font-semibold text-lg">Редактирование проекта №{id}</h1>
        <button className="px-3 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
          Сохранить
        </button>
      </header>

      {/* Основная панель с Flexbox */}
      <div className="flex flex-1">
        {/* Узкая полоса с иконками (Выбор, Квадрат, Круг) */}
        <aside className="w-16 border-r border-slate-300 bg-white flex flex-col items-center py-4 space-y-4">
          <button className="text-2xl hover:text-cyan-500 transition" title="Выбор">🖱️</button>
          <button className="text-2xl hover:text-cyan-500 transition" title="Квадрат">⬛</button>
          <button className="text-2xl hover:text-cyan-500 transition" title="Круг">⚪</button>
        </aside>

        {/* Центральная зона (Холст) */}
        <main className="flex-1 bg-white shadow-lg m-4 rounded p-4">
          <p className="text-slate-400">Холст для рисования и правки проекта {id}</p>
        </main>

        {/* Правая панель (Свойства) */}
        <aside className="w-64 border-l border-slate-300 bg-white p-4">
          <h2 className="font-semibold mb-2">Свойства</h2>
          <p className="text-slate-600">Здесь будут настройки цвета, размеров и др.</p>
        </aside>
      </div>
    </div>
  );
}