import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/shop' element={ <Shop /> } />
          <Route exact path='/news' element={ <News /> } />
          <Route exact path='/about' element={ <About /> } />
          <Route exact path='/contact' element={ <Contact /> } />
          <Route exact path='*' element={ <PageNotFound /> } />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
