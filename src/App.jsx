import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer'

import HomePage from './pages/home';
import AboutPage from './pages/about';
import LodgingPage from './pages/lodging';
import Fetch from './fetch'
import NotFound from './pages/not-found';


function App() {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/fetch" element={<Fetch />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/lodging/:id" element={<LodgingPage />} />
            <Route path="/*" element={<NotFound />}/>
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;