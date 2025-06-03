import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="hidden gap-14 md:flex">
      <Link
        to="/"
        className={isActive('/') ? 'font-bold text-black' : 'text-gray-400'}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={
          isActive('/about') ? 'font-bold text-black' : 'text-gray-400'
        }
      >
        About
      </Link>
      <Link
        to="/contact"
        className={
          isActive('/contact') ? 'font-bold text-black' : 'text-gray-400'
        }
      >
        Contact Us
      </Link>
      <Link
        to="/blog"
        className={isActive('/blog') ? 'font-bold text-black' : 'text-gray-400'}
      >
        Blog
      </Link>
    </div>
  );
};

export default NavBar;
