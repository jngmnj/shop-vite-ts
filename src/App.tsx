import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import FavoritesPage from './pages/FavoritesPage';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<MainPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
