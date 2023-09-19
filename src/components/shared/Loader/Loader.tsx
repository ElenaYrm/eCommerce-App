import { ReactElement } from 'react';

import styles from './loader.module.scss';

interface LoaderProps {
  type: 'spinner' | 'text' | 'points';
}

function Loader({ type }: LoaderProps): ReactElement {
  return (
    <>
      {type === 'spinner' && (
        <div className={styles.spinner} data-testid="spinner">
          <span className={styles.spinner__circle}></span>
        </div>
      )}
      {type === 'text' && <div className={styles.loader}>Loading...</div>}
      {type === 'points' && <span className={styles.point} data-testid="points"></span>}
    </>
  );
}

export default Loader;
