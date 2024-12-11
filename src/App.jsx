import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Investments from './pages/Investments';
import Rewards from './pages/Rewards';
import Goals from './pages/Goals';
import Reminders from './pages/Reminders';
import Community from './pages/Community';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">FinEdu App</div>
            <div className="space-x-4">
              <Link to="/" className="text-white hover:text-gray-200">Inicio</Link>
              <Link to="/tutorials" className="text-white hover:text-gray-200">Tutoriales</Link>
              <Link to="/investments" className="text-white hover:text-gray-200">Inversiones</Link>
              <Link to="/rewards" className="text-white hover:text-gray-200">Recompensas</Link>
              <Link to="/goals" className="text-white hover:text-gray-200">Metas</Link>
              <Link to="/reminders" className="text-white hover:text-gray-200">Recordatorios</Link>
              <Link to="/community" className="text-white hover:text-gray-200">Comunidad</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;