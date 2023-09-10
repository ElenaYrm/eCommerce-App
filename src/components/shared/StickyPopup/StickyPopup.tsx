import styles from './stickyPopup.module.scss';
import { ReactElement, useState } from 'react';

function StickyPopup({ text }: { text: string }): ReactElement {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = (): void => {
    setIsVisible(true);
  };

  const hidePopup = (): void => {
    setIsVisible(false);
  };
  return (
    <div className={styles.root} onMouseEnter={showPopup} onMouseLeave={hidePopup}>
      {isVisible && <div className={styles.root__popup}>{text}</div>}
    </div>
  );
}

export default StickyPopup;
