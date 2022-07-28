import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addContract' element={<AddEdit />} />
        <Route path='/editContract/:id' element={<AddEdit />} />
        <Route path='/info/:id' element={<Info />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
