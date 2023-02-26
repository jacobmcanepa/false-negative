import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
