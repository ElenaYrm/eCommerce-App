import { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './modalWindow.module.scss';

interface IModalWindow {
  children: ReactElement;
  isOpen: boolean;
  isShowCloseBtn: boolean;
  onClose: () => void;
  borderType?: 'round' | 'straight';
  className?: string;
}

function ModalWindow({
  children,
  isOpen,
  onClose,
  isShowCloseBtn,
  className,
  borderType = 'straight',
}: IModalWindow): ReactElement | null {
  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent): void => {
      if (isOpen && e.target === document.querySelector(`.${styles.root}`)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('stop-scroll');
      document.addEventListener('click', handleBackdropClick);
    }

    return () => {
      document.body.classList.remove('stop-scroll');
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const parent: HTMLElement | null = document.getElementById('modal');
  if (!parent) return null;

  return createPortal(
    <div className={styles.root}>
      <div
        className={classnames(
          styles.root__container,
          className,
          borderType === 'round' ? styles.root__container_round : '',
        )}
      >
        {isShowCloseBtn && (
          <button className={styles.root__closeBtn} type="button" onClick={onClose}>
            Close
          </button>
        )}
        {children}
      </div>
    </div>,
    parent,
  );
}

export default ModalWindow;
