import { useState } from 'react';

import MetaTag from '@components/common/MetaTag';
import BottomBanner from '@components/main/BottomBanner';
import CategoryTab from '@components/main/CategoryTab';
import MainBanner from '@components/main/MainBanner';
import ProductGrid from '@components/main/ProductGrid';
import PromotionBanner from '@components/main/PromotionBanner';
import ProductList from '@components/products/ProductList';

const dummyCategories = [
  { id: 1, name: 'All', href: '/' },
  { id: 2, name: 'Clothes', href: '/' },
  { id: 3, name: 'Electronics', href: '/' },
  { id: 4, name: 'Furniture ', href: '/' },
  { id: 5, name: 'Shoes', href: '/' },
];

const dummyProducts = [
  {
    id: 1,
    imgSrc: 'assets/images/common/img_og.png',
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ',
    price: 900,
  },
  {
    id: 2,
    imgSrc: 'assets/images/common/img_og.png',
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ',
    price: 90000,
  },
  {
    id: 3,
    imgSrc: 'assets/images/common/img_og.png',
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ',
    price: 900,
  },
  {
    id: 4,
    imgSrc: 'assets/images/common/img_og123.png',
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ',
    price: 900,
  },
];

const MainPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <MetaTag
        title="cyber 메인페이지"
        url="https://cyber.com"
        keywords="cyber, shop, online, shopping, Apple, iphone, macbook, ipods, ipods max, galaxy"
      />
      <div>
        <MainBanner />
        <ProductGrid />
        <CategoryTab />
        {/* main product */}
        <div className="inner px-4 py-14 lg:px-0">
          <ul className="mb-8 flex touch-auto gap-6 overflow-x-auto whitespace-nowrap">
            {dummyCategories.map((category) => (
              <li key={category.id} className="">
                <button
                  type="button"
                  className="block cursor-pointer p-2 text-lg font-bold text-[#8B8B8B] hover:text-gray-600"
                  style={
                    activeCategory === category.name ? { color: '#000' } : {}
                  }
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
          <ProductList products={dummyProducts} />
        </div>
        <BottomBanner />
        <PromotionBanner />
      </div>
    </>
  );
};

export default MainPage;
