import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import searchIcon from '@/assets/icons/32px/Search.svg';

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('제출');
    const value = inputRef.current?.value || '';
    if (value) {
      navigate(`/search?keyword=${value}`);
    }
  };

  return (
    <div className="hidden w-full max-w-[24rem] flex-1 md:flex">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          className={`box-border w-full rounded-lg bg-gray-100 bg-[1rem_center] bg-no-repeat p-4 pl-12 outline-0`}
          style={{
            backgroundImage: `url("${searchIcon}")`,
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
