import { SyntheticEvent } from 'react';

import { Link } from 'react-router-dom';

import likeImage from '@assets/icons/32px/Like.svg';

import Button from '../common/Button';
interface ProductItemProps {
  item: {
    id: number;
    images?: string[];
    title: string;
    price: number;
  };
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
}
const ProductItem = ({ item, onError }: ProductItemProps) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US').format(price);

  return (
    <li>
      <Link to={`/products/${item.id}`}>
        <div className="relative h-full rounded-2xl bg-[#F6F6F6] px-4 py-6 transition hover:bg-[#EDEDED]">
          <div className="mx-auto mb-2 h-26 w-26 overflow-hidden rounded-2xl md:h-40 md:w-40 lg:mb-4">
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="h-full w-auto object-contain"
              onError={onError}
            />
          </div>
          <div className="text-center">
            <div className="mb-4">{item.title}</div>
            <div className="mb-4 text-2xl font-bold lg:mb-6">
              ${formatPrice(item.price)}
            </div>
            <Button className="btn-xl btn-filled">Buy Now</Button>
          </div>
          <button
            type="button"
            className="absolute top-6 right-3 cursor-pointer md:right-4"
          >
            <img
              src={likeImage}
              alt="Like"
              style={{
                width: 40,
                height: 40,
              }}
            />
            <span className="sr-only">Like</span>
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
