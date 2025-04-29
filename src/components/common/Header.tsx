import cartIcon from '@/assets/icons/32px/Cart.svg';
import favorIcon from '@/assets/icons/32px/Favorites.svg';
import userIcon from '@/assets/icons/32px/User.svg';
import sideMenuIcon from '@/assets/icons/40px/Burger.svg';
import logo from '@/assets/images/common/Logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Header = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const toggleSideMenu = () => {
    setIsSideOpen((prev) => !prev);
  };
  return (
    <header className="h-22 border-b border-b-[#B5B5B5] p-4 md:h-auto">
      <div className="inner flex h-full items-center justify-between gap-14">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <SearchBar />
        <NavBar />
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
        <button className="flex md:hidden" onClick={toggleSideMenu}>
          <img src={sideMenuIcon} alt="user" />
        </button>
      </div>
    </header>
  );
};

export default Header;
