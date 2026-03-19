import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  date: string;
};

export default function Gallery() {
  // состояния в реакте нужны чтобы хранить данные в рамках одной страницы (при перезагрузке они обнуляются). если использовать просто переменные для этой задачи, то не сработает, нужны именно состояния. В состояниях задается два параметра - название объекта (это или переменная любого типа или массив, у нас массив projects) и как бу функция замены значения (у нас setProjects, можно выбрать любое название но по правилам оно должно начинаться с set)
  const [projects, setProjects] = useState<Project[]>([]);


  // здесь уже прописываем функцию с условиями замены значения (применения setProjects). setProjects можно применить в любом месте кода, но часто для этого пишут такую обособленную функцию. Здесь я формирую айди проекта (длина массива + 1) и беру текущую дату.
  const addProject = () => {
    const newProject: Project = {
      id: projects.length + 1,
      date: new Date().toLocaleString(),
    };
    //такая запись с многоточием нужна именно для заполнения массивов, чтобы предыдущие значения не перезаписались. если у тебя projects это обычная переменная то запись будет просто setProjects(<новое значение>)
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <button
      // при нажатии на кнопку вызываем нашу функцию заполнения projects
        onClick={addProject}
        className="mb-4 px-4 py-2 bg-cyan-500 rounded shadow hover:bg-cyan-600 transition">
        Добавить проект
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* если массив пустой отображаем текст */}
        {projects.length === 0 && <p>Проектов пока нет.</p>}


        {/* map это функция для работы с массивами. получается здесь мы для каждого элемента массива формируем вот такой блок (который обернут в Link). Link это как тег <a> но используется только в реакте чтобы не перезагружать полностью страницу при переходах по ссылкам */}
        {projects.map((project) => (
          // здесь как раз вставляется айди для реализации динамического пути, который мы видим в файле App.tsx
          <Link key={project.id} to={`/editor/${project.id}`}> 
            <motion.div
              whileHover={{ y: -5 }} //плавный переход
              className="bg-slate-800 p-4 rounded shadow cursor-pointer select-none">
                {/* отображение айди и даты проекта */}
              <h3 className="font-semibold">Проект №{project.id}</h3>
              <p className="text-sm text-slate-400">{project.date}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}