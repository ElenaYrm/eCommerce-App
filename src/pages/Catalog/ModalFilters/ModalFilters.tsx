import { ReactElement, useEffect } from 'react';
import classnames from 'classnames';
import { Filters } from '../../../components/Filters';

import styles from './modalFilters.module.scss';

interface ModalFiltersProps {
  onClick: () => void;
  className?: string;
}

function ModalFilters({ className, onClick }: ModalFiltersProps): ReactElement {
  useEffect(() => {
    document.body.className = 'stop-scroll';

    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className={classnames(className || '', styles.modal)}>
      <button type="button" onClick={onClick} className={styles.modal__btn}>
        Close
      </button>
      <h3 className={styles.modal__title}>Filters</h3>

      <Filters className={styles.modal__filters} isShowResults={true} onClick={onClick} />
    </div>
  );
}

export default ModalFilters;
