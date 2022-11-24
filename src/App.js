import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import HomePage from './pages/HomePage';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
