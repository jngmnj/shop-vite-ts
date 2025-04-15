import cartIcon from '@/assets/icons/32px/Cart.svg';
import favorIcon from '@/assets/icons/32px/Favorites.svg';
import userIcon from '@/assets/icons/32px/User.svg';
import logo from '@/assets/images/common/Logo.png';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Header = () => (
  <header className="border-b border-b-[#B5B5B5] p-4">
    <div className="inner flex items-center justify-between gap-14">
      <Link to="/">
        <img src={logo} />
      </Link>
      <SearchBar />
      <NavBar />
      <div className="flex gap-6">
        <Link to="/favorites">
          <img src={favorIcon} />
        </Link>
        <Link to="/cart">
          <img src={cartIcon} />
        </Link>
        <Link to="/user">
          <img src={userIcon} />
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
