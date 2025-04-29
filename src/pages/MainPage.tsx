import MetaTag from '@/components/common/MetaTag';
import BottomBanner from '@/components/main/BottomBanner';
import CategoryTab from '@/components/main/CategoryTab';
import MainBanner from '@/components/main/MainBanner';
import ProductGrid from '@/components/main/ProductGrid';
import PromotionBanner from '@/components/main/PromotionBanner';
import ProductList from '@/components/products/ProductList';

const MainPage = () => {
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
        <ProductList />
        <BottomBanner />
        {/* discount product */}
        <ProductList />
        <PromotionBanner />
      </div>
    </>
  );
};

export default MainPage;
