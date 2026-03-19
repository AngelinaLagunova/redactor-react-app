// import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Gallery from './screens/Gallery';
import Editor from './screens/Editor';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

//эта штука делает плавные переходы. все ссылки в нее обернуты здесь
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* Это роутер. Штука которая всегда должна использоваться для навигации если пишешь приложение на реакте. Параметры стандартные */}
      <Routes location={location} key={location.pathname}>
        
        <Route 
        // url
          path="/" 
        // компонент куда идет переход. так бы тут было просто <Gallery /> но для плавности переходов добавлен блок motion
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Gallery />
            </motion.div>
          } 
        />
        <Route
        // тут путь динамический
          path="/editor/:id" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Editor />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        {/* теги nav и main условные, то есть они особо не отличаются от div и нужны просто для читабельности кода. кроме них еще есть artical и footer */}
        <nav className="text-red-600 text-4xl font-bold flex items-center px-4 bg-slate-900 shadow-md">
          {/* тут снова ссылка на гелерею потому что по условию она должна быть видна на всех страницах */}
          <Link to="/" className="mr-4 hover:text-cyan-400 font-semibold">
            Галерея
          </Link>
        </nav>
        <main className="text-red-600 text-4xl font-bold">
          {/* а здесь только подключение компонента плавных переходов, там все нужные ссылки есть */}
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;