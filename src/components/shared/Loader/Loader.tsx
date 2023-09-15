import { ReactElement } from 'react';

import styles from './loader.module.scss';

function Loader(): ReactElement {
  return <div className={styles.loader}>Loading...</div>;
}

export default Loader;
