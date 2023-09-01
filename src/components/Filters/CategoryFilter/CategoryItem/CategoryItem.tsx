import React, { ReactElement } from 'react';
import { IFilterItem } from '../../types';

import styles from './categoryItem.module.scss';

interface CategoryItemProps extends IFilterItem {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isActive: boolean;
}

function CategoryItem({ label, value, onClick, isActive }: CategoryItemProps): ReactElement {
  return (
    <button type="button" onClick={onClick} data-id={value} className={isActive ? styles.item_active : ''}>
      {label}
    </button>
  );
}

export default CategoryItem;
