import { ReactElement, useEffect } from 'react';
import styles from './modalWindow.module.scss';

interface IModalWindow {
  children: ReactElement;
  isOpen: boolean;
  onClose: () => void;
}

function ModalWindow({ children, isOpen, onClose }: IModalWindow): ReactElement | null {
  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent): void => {
      if (isOpen && e.target === document.querySelector(`.${styles.root}`)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('click', handleBackdropClick);
    } else {
      document.body.classList.remove('modal-open');
      document.removeEventListener('click', handleBackdropClick);
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div className={styles.root}>
          <div className={styles.root__container}>
            <div className={styles.root__closeBtn} onClick={onClose}>
              Close
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalWindow;
