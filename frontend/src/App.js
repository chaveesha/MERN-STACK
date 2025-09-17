import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Workout from './pages/Workout'
import Menu from './pages/Menu'
import SignUp from './pages/SignUp';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/workout" element={<Workout />} /> {/* new route */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
