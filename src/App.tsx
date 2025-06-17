import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layout/DefaultLayout';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<MainPage />} />
            <Route path="products" element={<ProductListPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
