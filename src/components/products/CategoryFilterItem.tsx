import { React, useState } from 'react';

import searchIcon from '@/assets/icons/32px/Search.svg';
import arrowIcon from '@assets/icons/24px/Arrow Down.svg';

export type FilterCategoryItem = {
  name: string;
  count: number;
};
type CategoryFilterItemProps = {
  categoryName: string;
  categoryItems: FilterCategoryItem[];
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const CategoryFilterItem = ({
  categoryName,
  categoryItems,
  isOpen,
  setOpen,
}: CategoryFilterItemProps) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const toggleChecked = (brand: string) => {
    setChecked((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filtered = categoryItems.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <button
        className="flex w-full cursor-pointer items-center justify-between border-b border-gray-300 py-3 font-medium text-black"
        onClick={() => setOpen(!isOpen)}
      >
        <span>{categoryName}</span>
        <img
          src={arrowIcon}
          alt="Arrow"
          className="inline-block h-6 w-6 transition"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {isOpen && (
        <div className="">
          {/* 검색창 */}
          <div className="my-4">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
              className={`box-border w-full rounded-lg bg-gray-100 bg-[1rem_center] bg-no-repeat p-4 pl-12 outline-0`}
              style={{
                backgroundImage: `url("${searchIcon}")`,
              }}
            />
          </div>

          {/* 체크박스 리스트 */}
          <ul className="max-h-80 space-y-2 overflow-y-auto pr-1">
            {filtered.map(({ name, count }) => (
              <li key={name} className="flex items-center space-x-2">
                <input
                  id={name}
                  type="checkbox"
                  checked={checked.includes(name)}
                  onChange={() => toggleChecked(name)}
                  className="h-4 w-4 accent-black"
                />
                <label htmlFor={name} className="text-[15px] text-black">
                  {name}
                  <span className="ml-1 text-xs text-gray-400">{count}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CategoryFilterItem;
