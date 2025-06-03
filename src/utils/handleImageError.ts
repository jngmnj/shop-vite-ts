import React from 'react';
import defaultImage from '/assets/images/common/img_default.png';

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = defaultImage;
  e.currentTarget.alt = 'Default Image';
};
