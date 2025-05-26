import { Link } from 'react-router-dom';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <Link
        to="/"
        className="order-3 flex flex-col items-center justify-center bg-white px-4 py-10 lg:order-1 lg:col-span-2 lg:row-span-1 lg:flex-row lg:justify-between lg:py-0 lg:pr-12 lg:pl-0"
      >
        <div className="mb-6 block lg:hidden">
          <img
            src="/assets/images/main/productGrid/PlayStation.png"
            alt="Playstation 5"
          />
        </div>
        <div className="hidden lg:block">
          <img
            src="/assets/images/main/productGrid/PlayStation_md.png"
            alt="Playstation 5"
          />
        </div>
        <div className="text-center lg:max-w-1/2 lg:text-left">
          <h2 className="mb-4 text-3xl font-light lg:text-5xl">
            Playstation <strong className="font-bold">5</strong>
          </h2>
          <p className="text-[#909090]">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </Link>

      <Link
        to="/"
        className="order-4 flex flex-col items-center justify-center bg-gray-100 px-4 py-10 lg:order-2 lg:col-span-2 lg:row-span-2 lg:flex-row lg:justify-between lg:py-0 lg:pr-0 lg:pl-14"
      >
        <div className="mb-6 block lg:hidden">
          <img
            src="/assets/images/main/productGrid/MacBook_Pro_14.png"
            alt="Macbook Air"
          />
        </div>
        <div className="hidden lg:order-2 lg:block">
          <img
            src="/assets/images/main/productGrid/MacBook_Pro_14_md.png"
            alt="Macbook Air"
          />
        </div>
        <div className="text-center lg:max-w-1/2 lg:text-left">
          <h2 className="mb-4 text-3xl font-light lg:text-6xl">
            <span className="lg:block">Macbook </span>
            <strong className="font-bold">Air</strong>
          </h2>
          <p className="text-[#909090]">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block w-full rounded-lg border bg-transparent px-6 py-4 text-black transition-all duration-300 ease-in-out hover:border-gray-700 hover:bg-[#ffffff78] lg:w-auto lg:border lg:px-14"
          >
            Shop Now
          </Link>
        </div>
      </Link>

      <Link
        to="/"
        className="order-1 flex flex-col items-center justify-center bg-gray-100 px-4 py-10 lg:order-3 lg:flex-row lg:justify-between lg:py-0 lg:pr-12 lg:pl-0"
      >
        <div className="mb-6 block lg:hidden">
          <img
            src="/assets/images/main/productGrid/Apple_AirPods_Max.png"
            alt="Apple AirPods Max"
          />
        </div>
        <div className="hidden lg:block">
          <img
            src="/assets/images/main/productGrid/Apple_AirPods_Max_md.png"
            alt="Apple AirPods Max"
          />
        </div>
        <div className="text-center lg:max-w-1/2 lg:text-left">
          <h2 className="mb-4 text-3xl font-light">
            <span className="lg:block">Apple </span>
            <span className="lg:block">AirPods </span>
            <strong className="font-bold">Max</strong>
          </h2>
          <p className="text-[#909090]">
            Computational audio. Listen, it's powerful
          </p>
        </div>
      </Link>

      <Link
        to="/"
        className="order-2 flex flex-col items-center justify-center bg-[#353535] px-4 py-10 text-white lg:order-4 lg:flex-row lg:justify-between lg:py-0 lg:pr-12 lg:pl-0"
      >
        <div className="mb-6 block lg:hidden">
          <img
            src="/assets/images/main/productGrid/Apple_Vision_Pro.png"
            alt="Apple Vision Pro"
          />
        </div>
        <div className="hidden lg:block">
          <img
            src="/assets/images/main/productGrid/Apple_Vision_Pro_md.png"
            alt="Apple Vision Pro"
          />
        </div>
        <div className="text-center lg:max-w-1/2 lg:text-left">
          <h2 className="mb-4 text-3xl font-light">
            <span className="lg:block">Apple </span>
            <span className="lg:block">
              Vision
              <strong className="font-bold"> Pro</strong>
            </span>
          </h2>
          <p className="text-[#909090]">
            An immersive way to experience entertainment
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductGrid;
