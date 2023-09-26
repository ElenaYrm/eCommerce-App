import { ReactElement } from 'react';

import styles from './loader.module.scss';

interface LoaderProps {
  type: 'text' | 'points';
}

function Loader({ type }: LoaderProps): ReactElement {
  return (
    <>
      {type === 'text' ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <span className={styles.point} data-testid="points"></span>
      )}
    </>
  );
}

export default Loader;
