import React from 'react';

import arrowIcon from '@assets/icons/24px/Arrow.svg';

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
};

const BreadCrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="py-10">
      <nav className="flex items-center gap-4 text-gray-500">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.href ? (
              <a href={item.href} className="text-gray-400 hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="font-semibold text-black">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <span className="text-gray-300">
                <img
                  src={arrowIcon}
                  alt="Arrow"
                  className="inline-block h-4 w-4"
                />
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default BreadCrumb;
