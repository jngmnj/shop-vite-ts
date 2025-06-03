import { Link } from 'react-router-dom';

import CameraIcon from '@/assets/icons/48px/Cameras.svg';
import ComputerIcon from '@/assets/icons/48px/Computers.svg';
import GamingIcon from '@/assets/icons/48px/Gaming.svg';
import HeadphoneIcon from '@/assets/icons/48px/Headphones.svg';
import phoneIcon from '@/assets/icons/48px/Phones.svg';
import WatchIcon from '@/assets/icons/48px/Smart Watches.svg';

const CategoryTab = () => {
  return (
    <div className="bg-[#FAFAFA] py-16 lg:py-20">
      <div className="inner px-4 lg:px-0">
        <h2 className="mb-8 text-2xl font-bold">Browse By Category</h2>
        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
          <Link
            to=""
            className="flex flex-[1_1_calc((100%-16px)/2)] flex-col items-center justify-center rounded-2xl bg-[#ededed] p-6 transition hover:bg-[#e3e2e2]"
          >
            <div className="mb-2">
              <img src={phoneIcon} alt="Phones" />
            </div>
            <p className="">Phones</p>
          </Link>
          <Link
            to=""
            className="flex flex-[1_1_calc((100%-16px)/2)] flex-col items-center justify-center rounded-2xl bg-[#ededed] p-6 transition hover:bg-[#e3e2e2]"
          >
            <div className="mb-2">
              <img src={WatchIcon} alt="Smart Watches" />
            </div>
            <p className="">Smart Watches</p>
          </Link>
          <Link
            to=""
            className="flex flex-[1_1_calc((100%-16px)/2)] flex-col items-center justify-center rounded-2xl bg-[#ededed] p-6 transition hover:bg-[#e3e2e2]"
          >
            <div className="mb-2">
              <img src={CameraIcon} alt="Cameras" />
            </div>
            <p className="">Cameras</p>
          </Link>
          <Link
            to=""
            className="flex flex-[1_1_calc((100%-16px)/2)] flex-col items-center justify-center rounded-2xl bg-[#ededed] p-6 transition hover:bg-[#e3e2e2]"
          >
            <div className="mb-2">
              <img src={HeadphoneIcon} alt="Headphones" />
            </div>
            <p className="">Headphones</p>
          </Link>
          <Link
            to=""
            className="flex flex-[1_1_calc((100%-16px)/2)] flex-col items-center justify-center rounded-2xl bg-[#ededed] p-6 transition hover:bg-[#e3e2e2]"
          >
            <div className="mb-2">
              <img src={ComputerIcon} alt="Computers" />
            </div>
            <p className="">Computers</p>
          </Link>
          <Link
            to=""
            className="flex flex-[1_1_calc((100%-16px)/2)] flex-col items-center justify-center rounded-2xl bg-[#ededed] p-6 transition hover:bg-[#e3e2e2]"
          >
            <div className="mb-2">
              <img src={GamingIcon} alt="Gaming" />
            </div>
            <p className="">Gaming</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryTab;
