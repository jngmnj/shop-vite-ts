import { handleImageError } from '@/utils/handleImageError';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: {
    id: number;
    imgSrc: string;
    name: string;
    price: number;
  }[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} onError={handleImageError} />
      ))}
    </ul>
  );
};

export default ProductList;
