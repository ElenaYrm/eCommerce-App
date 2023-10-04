import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classNames from 'classnames';
import { selectIsNewUser } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { Page } from '../../router/types';
import { PATH } from '../../router/constants/paths';
import { deleteNotice } from '../../store/auth/slice';

import styles from './home.module.scss';
import { Notice } from '../../components/shared/Notice';
import PromoBtn from './PromoBtn/PromoBtn.tsx';
import { promoBtnProps } from '../../constant/home.ts';

export default function Home(): ReactElement {
  const isNewUser = useSelector(selectIsNewUser);
  const dispatch = useAppDispatch();
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (isNewUser) {
      const timer = setTimeout(() => {
        dispatch(deleteNotice());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isNewUser, dispatch]);

  function handleCopyBtnClick(): void {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <div className={styles.home} data-testid="home">
      <div className={styles.home__backgroundMobile} />
      <div className={classNames(styles.home__content, styles.content)}>
        <div className={classNames(styles.content__greetings, styles.greetings)}>
          <h1 className={styles.greetings__title}>Welcome to Scoop!</h1>
          <p className={styles.greetings__subTitle}>
            Discover a vast collection of modern artworks from renowned artists around the world. Scoop carefully
            curates its selection, ensuring access to the most exceptional and thought-provoking pieces.
          </p>
        </div>
        <Link className={styles.content__link} to={PATH[Page.Catalog]}>
          Explore the Art
        </Link>
        <div className={classNames(styles.home__footer, styles.footer)}>
          <div className={styles.footer__promoContainer}>PROMO CODES:</div>
          <div className={styles.footer__btnsContainer} onClick={handleCopyBtnClick}>
            {isCopied && <div className={styles.isCopied}>Copied!</div>}
            <PromoBtn {...promoBtnProps.ART}>ART</PromoBtn>
            <PromoBtn {...promoBtnProps.SPECIAL}>SPECIAL</PromoBtn>
          </div>
        </div>
      </div>
      {isNewUser && <Notice text="Hello and welcome!ヾ(☆▽☆)" type="success" />}
    </div>
  );
}
