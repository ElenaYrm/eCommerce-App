import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';
import { Filters } from '../../../components/Filters';

import styles from './modalFilters.module.scss';

interface ModalFiltersProps {
  onClick: () => void;
  className?: string;
}

function ModalFilters({ className, onClick }: ModalFiltersProps): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [prevParams] = useState(searchParams);

  useEffect(() => {
    document.body.className = 'stop-scroll';

    return () => {
      document.body.className = '';
    };
  }, []);

  function closeFilters(): void {
    setSearchParams(prevParams);
    onClick();
  }

  return (
    <div className={classnames(className || '', styles.modal)}>
      <button type="button" onClick={closeFilters} className={styles.modal__btn}>
        Cancel
      </button>
      <h3 className={styles.modal__title}>Filters</h3>

      <Filters className={styles.modal__filters} onClick={onClick} />
    </div>
  );
}

export default ModalFilters;
