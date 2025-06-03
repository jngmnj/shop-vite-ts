import { Link } from 'react-router-dom';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css/navigation";
import { MAIN_BOTTOM_BANNER_CONTENT } from '@/constants/main';
import useMediaQuery from '@/hooks/useMediaQuery';
import { handleImageError } from '@/utils/handleImageError';
import 'swiper/css/pagination';
import Button from '../common/Button';

const BottomBanner = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  if (isMobile) {
    console.log('mobile');
    return (
      <Swiper
        grabCursor={true}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
      >
        {MAIN_BOTTOM_BANNER_CONTENT.map((item) => {
          const {
            title,
            description,
            imageSrc,
            backgroundStyle,
            isBannerDark,
            link,
          } = item;
          return (
            <SwiperSlide key={item.id} className="h-full overflow-hidden">
              <Link
                to={link}
                className="flex flex-col items-center justify-center px-8 py-14"
                style={backgroundStyle}
              >
                <div className="mb-4 aspect-square w-full overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div
                  className={`mb-4 text-5xl font-light ${isBannerDark ? 'text-white' : 'text-black'}`}
                >
                  {title}
                </div>
                <p
                  className={`mb-4 text-center text-[19px] leading-6 font-medium ${
                    isBannerDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {description}
                </p>
                <Button
                  variant={`${isBannerDark ? 'whiteOutlined' : 'outlined'}`}
                  size="lg"
                  className="mb-14 lg:mb-0"
                >
                  Shop Now
                </Button>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
  return (
    <div className={`relative flex w-full`}>
      {MAIN_BOTTOM_BANNER_CONTENT.map((item) => {
        const { title, imageSrc, backgroundStyle, isBannerDark, link } = item;
        return (
          <Link
            key={item.id}
            to={link}
            className="block h-full p-8 lg:flex-1"
            style={backgroundStyle}
          >
            <div className="aspect-square w-full lg:mb-8">
              <img
                src={imageSrc}
                alt={title}
                className="h-full w-full object-cover"
                onError={handleImageError}
              />
            </div>
            <div
              className={`mb-4 text-3xl font-light ${isBannerDark ? 'text-white' : 'text-black'}`}
            >
              {title}
            </div>
            <Button
              variant={`${isBannerDark ? 'whiteOutlined' : 'outlined'}`}
              size="lg"
            >
              Shop Now
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBanner;
