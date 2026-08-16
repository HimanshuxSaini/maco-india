import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Facilities from './pages/Facilities';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

function App() {
 return (
 <Router>
 <ScrollToTop />
 <MainLayout>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/products" element={<Products />} />
 <Route path="/products/:slug" element={<ProductDetails />} />
 <Route path="/facilities" element={<Facilities />} />
 <Route path="/quality" element={<Quality />} />
 <Route path="/contact" element={<Contact />} />
 </Routes>
 </MainLayout>
 </Router>
 );
}

export default App;
