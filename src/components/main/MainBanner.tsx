import { MAIN_BANNER_CONTENT } from '@/constants/main';

const MainBanner = () => {
  const {
    title,
    highlight,
    subtitle,
    description,
    imageSrc,
    backgroundStyle,
    isBannerDark,
  } = MAIN_BANNER_CONTENT;

  return (
    <div style={backgroundStyle}>
      <div
        className={`inner relative flex min-h-[40rem] w-full flex-col items-center justify-between px-4 pt-22 md:flex-row md:pt-0`}
      >
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p
            className={`mb-4 text-2xl font-bold ${isBannerDark ? 'text-white opacity-50' : 'text-gray-600'}`}
          >
            {subtitle}
          </p>
          <h2
            className={`mb-4 text-7xl font-light ${isBannerDark ? 'text-white' : 'text-black'}`}
          >
            {title.replace(highlight, '')}
            <strong className="font-bold">{highlight}</strong>
          </h2>
          <p
            className={`font-mediu text-[19px] leading-6 ${isBannerDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {description}
          </p>
          <button
            className={`mt-8 rounded-lg border bg-[#F2F2F2] px-14 py-4 text-[20px] font-bold text-black transition-all duration-300 ease-in-out ${isBannerDark ? 'border-white bg-transparent text-white' : 'border-gray700 text-gray-600'}`}
          >
            Shop Now
          </button>
        </div>
        <div className="max-h-[66vw] max-w-2/3 overflow-hidden md:absolute md:right-0 md:bottom-0 md:max-h-max md:max-w-max">
          <img src={imageSrc} alt={`IPhone 14 Pro`} />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
