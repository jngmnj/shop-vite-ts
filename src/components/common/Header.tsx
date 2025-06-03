import { useState } from 'react';
import { Link } from 'react-router-dom';

import cartIcon from '@/assets/icons/32px/Cart.svg';
import favorIcon from '@/assets/icons/32px/Favorites.svg';
import searchIcon from '@/assets/icons/32px/Search.svg';
import userIcon from '@/assets/icons/32px/User.svg';
import sideMenuIcon from '@/assets/icons/40px/Burger.svg';
import logo from '@/assets/images/common/Logo.png';

import Fade from './Fade';
import SearchBar from './SearchBar';

const Header = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideOpen((prev) => !prev);
  };
  return (
    <header className="h-22 border-b border-b-[#B5B5B5] p-4 md:h-auto">
      <div className="inner flex h-full items-center justify-between gap-14">
        <div className="flex w-full items-center gap-14">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <SearchBar />
        </div>
        {/* <NavBar /> */}
        <div className="hidden gap-6 md:flex">
          <Link to="/favorites">
            <img src={favorIcon} alt="favorites" />
          </Link>
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <Link to="/user">
            <img src={userIcon} alt="user" />
          </Link>
        </div>
        <button
          className="flex cursor-pointer md:hidden"
          onClick={toggleSideMenu}
        >
          <img src={sideMenuIcon} alt="user" />
        </button>
      </div>
      {/* sideMenu */}
      <div>
        <Fade isOpen={isSideOpen} handleClick={toggleSideMenu} />
        <div
          className={`transition-allduration-300 fixed top-0 h-screen w-80 overflow-y-auto bg-white p-4 transition-all ease-in-out ${
            isSideOpen ? 'right-0' : '-right-full'
          }`}
        >
          <div className="mt-4 flex items-center gap-4">
            <>
              <Link
                to="/login"
                className="rounded-xl bg-gray-400 px-4 py-2 font-bold text-white transition hover:bg-gray-500"
              >
                sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-xl bg-transparent px-2 py-2 transition hover:text-gray-400"
              >
                sign up
              </Link>
            </>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <Link
              to="/search"
              className="flex items-center gap-2 text-gray-500"
            >
              <img src={searchIcon} alt="" />
              Search
            </Link>
            <Link
              to="/favorites"
              className="flex items-center gap-2 text-gray-500"
            >
              <img src={favorIcon} alt="favorites" />
              favorites
            </Link>
            <Link to="/cart" className="flex items-center gap-2 text-gray-500">
              <img src={cartIcon} alt="cart" />
              cart
            </Link>
            <Link to="/user" className="flex items-center gap-2 text-gray-500">
              <img src={userIcon} alt="user" />
              mypage
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
