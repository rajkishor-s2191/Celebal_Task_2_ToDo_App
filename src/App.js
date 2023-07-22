import { Routes, Route } from 'react-router-dom';
import './App.css';
import { } from './components/Home';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
