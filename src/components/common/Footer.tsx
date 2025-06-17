import { Link } from 'react-router-dom';

import facebookIcon from '@assets/icons/16px/Facebook.svg';
import instagramIcon from '@assets/icons/16px/Instagram.svg';
import tiktokIcon from '@assets/icons/16px/Tiktok.svg';
import xIcon from '@assets/icons/16px/Twitter.svg';
import logo from '@assets/images/common/Logo_w.png';
const Footer = () => {
  return (
    <footer className="bg-black px-8 py-12 text-[#CFCFCF] lg:px-0 lg:py-26">
      <div className="inner">
        <div className="mb-6 flex flex-col gap-8 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex-1 text-center lg:max-w-96">
            <img
              src={logo}
              alt="cyber"
              className="mx-auto mb-4 lg:mx-0 lg:mb-6"
            />
            <p className="leading-7">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-8 text-center lg:max-w-156 lg:flex-row lg:text-left">
            <ul className="flex flex-1 flex-col gap-2 text-sm">
              <li>
                <div className="text-base font-bold text-white">Services</div>
              </li>
              <li>
                <Link to="" className="leading-8 hover:text-white">
                  Bonus program
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Gift cards
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Credit and payment
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Service contracts
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Non-cash account
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Payment
                </Link>
              </li>
            </ul>
            <ul className="flex flex-1 flex-col gap-2 text-sm">
              <li>
                <div className="text-base font-bold text-white">
                  Assistance to the buyer
                </div>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Find an order
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Terms of delivery
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Exchange and return of goods
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Guarantee
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Frequently asked questions
                </Link>
              </li>
              <li>
                <Link to="" className="leading-8">
                  Terms of use of the site
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex justify-center gap-8 lg:justify-start">
          <li>
            <Link to="">
              <img src={xIcon} alt="cyber" className="size-6 lg:size-4" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src={facebookIcon}
                alt="cyber"
                className="size-6 lg:size-4"
              />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={tiktokIcon} alt="cyber" className="size-6 lg:size-4" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src={instagramIcon}
                alt="cyber"
                className="size-6 lg:size-4"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
