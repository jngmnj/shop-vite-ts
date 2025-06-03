import { MAIN_PROMOTION_BANNER_CONTENT } from '@/constants/main';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const PromotionBanner = () => {
  const { title, highlight, description, imageSrc, isBannerDark, link } =
    MAIN_PROMOTION_BANNER_CONTENT[0];
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <Link to={link} className="block">
      <div
        className={`relative w-full flex-col bg-cover bg-center bg-no-repeat px-4 py-26`}
        style={{
          backgroundImage: `${isMobile ? `url(${imageSrc[0]})` : `url(${imageSrc[1]})`}`,
        }}
      >
        <div className="flex-center h-full flex-col text-center md:mb-0 md:text-left">
          <h2
            className={`mb-4 text-center text-5xl font-light lg:text-7xl ${isBannerDark ? 'text-white' : 'text-black'}`}
          >
            {title.replace(highlight, '')}
            <br className="lg:hidden" />
            <strong className="font-bold">{highlight}</strong>
          </h2>
          <p
            className={`font-mediu text-[19px] leading-6 ${isBannerDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {description}
          </p>
          <Button
            type="button"
            variant={`${isBannerDark ? 'whiteOutlined' : 'outlined'}`}
            size="lg"
            className="mt-10"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default PromotionBanner;
