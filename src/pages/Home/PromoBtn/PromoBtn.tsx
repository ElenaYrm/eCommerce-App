import classNames from 'classnames';
import styles from '../home.module.scss';
import { ReactElement, ReactNode, useState } from 'react';

interface IPromoBtn {
  dataCopy: string;
  children: ReactNode;
}

export default function PromoBtn({ ...props }: IPromoBtn): ReactElement {
  const [isClicked, setClicked] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const target = e.target;
    if (target && target instanceof HTMLButtonElement && !isClicked) {
      const textToCopy = target.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            setClicked(!isClicked);
            setTimeout(() => setClicked(false), 1000);
          })
          .catch(() => {
            throw new Error('Copy error');
          });
      }
    }
  }

  return (
    <button
      className={classNames(styles.footer__btnsContainer_btn, { [styles.active]: isClicked })}
      data-copy={props.dataCopy}
      onClick={handleClick}
      children={props.children}
    />
  );
}
