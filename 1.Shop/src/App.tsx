import Header from './components/Header/Header';
import Main from './pages/Main';
import Card from './pages/Card';
import { Navigate, Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Basket from './pages/Basket';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/cart/:id" element={<Card />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
