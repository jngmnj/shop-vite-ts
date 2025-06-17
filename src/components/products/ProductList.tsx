import { handleImageError } from '@/utils/handleImageError';

import ProductItem from './ProductItem';

interface ProductListProps {
  products: {
    id: number;
    images: string[];
    title: string;
    price: number;
  }[];
  cols?: number;
  error?: Error | null;
}
const ProductList = ({ products, cols, error }: ProductListProps) => {
  let colClass = '';
  if (cols) {
    colClass =
      {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
      }[cols] || 'lg:grid-cols-4';
  }

  return (
    <ul className={`grid gap-4 ${colClass} grid-cols-2`}>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} onError={handleImageError} />
      ))}
    </ul>
  );
};

export default ProductList;
