import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Article from './components/Article';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/article' element={<Article/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
