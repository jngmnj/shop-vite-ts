import { useCallback, useState } from 'react';

import { getProducts } from '@/api';
import SkeletonProductList from '@/components/products/SkeletonProductList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import arrowIcon from '@assets/icons/24px/Arrow.svg';
import FiltersIcon from '@assets/icons/24px/Filters.svg';
import Button from '@components/common/Button';
import Breadcrumb from '@components/products/BreadCrumb';
import ProductFilter from '@components/products/ProductFilter';
import ProductList from '@components/products/ProductList';
import useMediaQuery from '@hooks/useMediaQuery';

const ProductListPage = () => {
  const LIMIT = 12;
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = useCallback(
    async (currentItems: any[]) => {
      const skip = currentItems.length;

      const res = await getProducts({ skip, limit: LIMIT });

      if (res.products.length < LIMIT) {
        setHasMore(false);
      }

      return res.products;
    },
    [hasMore],
  );

  const { items, observerRef, loading } = useInfiniteScroll(fetchMore, hasMore);

  const isMobile = useMediaQuery('(max-width: 1024px)');

  const categoryItems1 = {
    categoryName: 'Brand',
    categoryItems: [
      { name: 'Apple', count: 110 },
      { name: 'Samsung', count: 125 },
      { name: 'Xiaomi', count: 68 },
      { name: 'Poco', count: 44 },
      { name: 'OPPO', count: 36 },
      { name: 'Honor', count: 10 },
      { name: 'Motorola', count: 34 },
      { name: 'Nokia', count: 22 },
      { name: 'Realme', count: 35 },
    ],
  };
  const categoryItems2 = {
    categoryName: 'Brand2212312',
    categoryItems: [
      { name: 'Apple', count: 110 },
      { name: 'Samsung', count: 125 },
      { name: 'Xiaomi', count: 68 },
      { name: 'Poco', count: 44 },
      { name: 'OPPO', count: 36 },
      { name: 'Honor', count: 10 },
      { name: 'Motorola', count: 34 },
      { name: 'Nokia', count: 22 },
      { name: 'Realme', count: 35 },
    ],
  };
  return (
    <div className="inner">
      {isMobile ? (
        <div className="flex items-center justify-between gap-4 py-10 lg:py-0">
          {/* filters */}
          <Button
            type="button"
            variant="outlined"
            className="flex-1 border-gray-300!"
          >
            <div className="flex w-full items-center justify-between">
              <span>Filters</span>
              <img src={FiltersIcon} alt="Filters" />
            </div>
          </Button>
          {/* sort */}
          <Button
            type="button"
            variant="outlined"
            className="flex-1 border-gray-300!"
          >
            <div className="flex w-full items-center justify-between">
              <span>By rating</span>
              <img src={arrowIcon} alt="Sort" className="rotate-90" />
            </div>
          </Button>
        </div>
      ) : (
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Catalog', href: '/catalog' },
            { label: 'Smartphones' }, // 현재 위치
          ]}
        />
      )}

      <div className="flex flex-col gap-8 pb-14 lg:flex-row lg:pt-6">
        <div className="hidden w-64 shrink-0 pb-2 lg:block">
          <ProductFilter filterCategory={[categoryItems1, categoryItems2]} />
        </div>
        <div className="w-full">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-400">
              Product Result :{' '}
              <span className="font-medium text-black">85</span>
            </p>
            <select className="hidden w-64 rounded-lg border border-gray-300! px-4 py-3 lg:block">
              <option value="rating">By rating</option>
              <option value="price">By price</option>
            </select>
          </div>
          <ProductList products={items} cols={3} />
          {loading && hasMore && <SkeletonProductList count={6} cols={3} />}
          <div ref={observerRef} style={{ height: 40, marginTop: 80 }} />
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
