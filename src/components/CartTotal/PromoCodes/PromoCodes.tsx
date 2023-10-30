import { ReactElement, FormEvent, useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store.ts';
import { updateCartThunk, getDiscountsThunk } from '../../../store/cart/thunks';
import { selectCartData } from '../../../store/cart/selectors';
import { Button } from '../../shared/Button';
import { Notice } from '../../shared/Notice';
import { IPromoCode } from '../../../store/cart/types';
import { CODE_ERROR } from '../../../constant';

import styles from './promoCodes.module.scss';

export default function PromoCodes(): ReactElement {
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);

  const { basket, discounts } = useSelector(selectCartData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (discounts.length === 0) {
      dispatch(getDiscountsThunk());
    }
  }, [dispatch, discounts]);

  function getCodeName(codeId: string): string | undefined {
    const code = discounts.find((item) => item.id === codeId);

    return code?.code;
  }

  const applyCode = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      const isCodeValid = discounts.find((item) => item.code === code);

      if (!isCodeValid) {
        setIsError(true);
        return;
      }

      dispatch(
        updateCartThunk({
          id: basket.id,
          version: basket.version,
          actions: [
            {
              action: 'addDiscountCode',
              code: code,
            },
          ],
        }),
      );
      setCode('');
    },
    [basket, code, dispatch, discounts, setIsError, setCode],
  );

  const removeCode = useCallback(
    (item: IPromoCode): void => {
      dispatch(
        updateCartThunk({
          id: basket.id,
          version: basket.version,
          actions: [
            {
              action: 'removeDiscountCode',
              discountCode: {
                typeId: 'discount-code',
                id: item.id,
              },
            },
          ],
        }),
      );
    },
    [basket, dispatch],
  );

  return (
    <div className={styles.promo}>
      <h4 className={styles.promo__title}>Have a promo code?</h4>
      <form className={styles.promo__form} onSubmit={(e): void => applyCode(e)} noValidate>
        <input
          className={styles.promo__form_input}
          placeholder="Promo code"
          value={code}
          onInput={(event: React.FormEvent<HTMLInputElement>): void => setCode(event.currentTarget.value)}
          onChange={(): void => setIsError(false)}
          aria-label="Type promo code"
        />
        <Button type="submit" name="Apply" className={styles.promo__form_button} />
      </form>

      {isError && <Notice text={CODE_ERROR} className={styles.promo__error} type="text" />}

      {basket.codes.length > 0 && (
        <ul className={styles.promo__codes}>
          {basket.codes.map((item) => (
            <li key={item.id} className={styles.code__item}>
              {getCodeName(item.id) && (
                <span className={styles.code__item_label}>{getCodeName(item.id)} is applied</span>
              )}
              <Button
                type="button"
                name="Remove"
                className={styles.code__item_button}
                handleClick={(): void => removeCode(item)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
