import likeAnimation from '@assets/animations/like.json';
import likeImage from '@assets/icons/32px/Like.svg';
import likedImage from '@assets/icons/32px/Liked.svg';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
interface ProductItemProps {
  item: {
    id: number;
    imgSrc?: string;
    name: string;
    price: number;
  };
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
}
const ProductItem = ({ item, onError }: ProductItemProps) => {
  const [isLike, setIsLike] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const animationRef = useRef<LottieRefCurrentProps>(null);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US').format(price);

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLike) {
      // 좋아요 취소
      setIsLike(false);
      return;
    }

    // 좋아요 → 애니메이션 재생
    setPlayAnimation(true);
    setIsLike(true);
  };

  useEffect(() => {
    if (playAnimation && animationRef.current) {
      animationRef.current.goToAndPlay(0, true);

      const timer = setTimeout(() => {
        setPlayAnimation(false); // 재생 후 애니메이션 제거
      }, 5000); // JSON 애니메이션 길이에 맞게 조절 (ms 단위)

      return () => clearTimeout(timer);
    }
  }, [playAnimation]);

  return (
    <li>
      <Link to={`/products/${item.id}`}>
        <div className="relative rounded-2xl bg-[#F6F6F6] px-4 py-6 transition hover:bg-[#EDEDED]">
          <div className="mx-auto mb-2 h-26 w-26 overflow-hidden rounded-2xl md:h-40 md:w-40 lg:mb-4">
            <img
              src={item.imgSrc}
              alt={item.name}
              className="h-full w-auto object-contain"
              onError={onError}
            />
          </div>
          <div className="text-center">
            <div className="mb-4">{item.name}</div>
            <div className="mb-4 text-2xl font-bold lg:mb-6">
              ${formatPrice(item.price)}
            </div>
            <Button className="btn-xl btn-filled">Buy Now</Button>
          </div>
          <button
            type="button"
            className="absolute top-6 right-3 cursor-pointer md:right-4"
            onClick={handleLikeClick}
          >
            {playAnimation ? (
              <Lottie
                animationData={likeAnimation}
                lottieRef={animationRef}
                loop={false}
                autoplay={false}
                style={{
                  width: 40,
                  height: 40,
                  visibility: playAnimation ? 'visible' : 'hidden',
                  border: '1px solid red',
                }}
              />
            ) : (
              <img src={`${isLike ? likedImage : likeImage}`} alt="Like" />
            )}

            <span className="sr-only">Like</span>
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
