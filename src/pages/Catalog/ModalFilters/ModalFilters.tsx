import { ReactElement } from 'react';
import { Filters } from '../../../components/Filters';

import styles from './modalFilters.module.scss';
import classnames from 'classnames';

interface ModalFiltersProps {
  onClick: () => void;
  className?: string;
}

function ModalFilters({ className, onClick }: ModalFiltersProps): ReactElement {
  return (
    <div className={classnames(className || '', styles.modal)}>
      <button type="button" onClick={onClick} className={styles.modal__btn}>
        Cancel
      </button>
      <h3 className={styles.modal__title}>Filters</h3>

      <Filters className={styles.modal__filters} />
    </div>
  );
}

export default ModalFilters;
