import { useState } from 'react';

import CategoryFilterItem from './CategoryFilterItem';

export type FilterCategoryItem = {
  name: string;
  count: number;
};
export type FilterCategory = {
  categoryName: string;
  categoryItems: FilterCategoryItem[];
};
type ProductFilterProps = {
  filterCategory: FilterCategory[];
};

const ProductFilter = ({ filterCategory }: ProductFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      {filterCategory.map((category) => (
        <CategoryFilterItem
          key={category.categoryName}
          categoryName={category.categoryName}
          categoryItems={category.categoryItems}
          isOpen={activeCategory === category.categoryName}
          setOpen={(isOpen) =>
            setActiveCategory(isOpen ? category.categoryName : null)
          }
        />
      ))}
    </>
  );
};

export default ProductFilter;
