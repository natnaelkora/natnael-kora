import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/natnael-kora/home" element={<Home />} />
        <Route path="/natnael-kora/about" element={<About />}/>
        <Route path="/natnael-kora/portfolio" element={<Portfolio />}/>
        <Route path="/natnael-kora/resume" element={<Resume />}/>
        <Route path="/natnael-kora/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
