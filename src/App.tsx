// import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Gallery from './screens/Gallery';
import Editor from './screens/Editor';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
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
        <nav className="text-red-600 text-4xl font-bold flex items-center px-4 bg-slate-900 shadow-md">
          <Link to="/" className="mr-4 hover:text-cyan-400 font-semibold">
            Галерея
          </Link>
        </nav>
        <main className="text-red-600 text-4xl font-bold">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;