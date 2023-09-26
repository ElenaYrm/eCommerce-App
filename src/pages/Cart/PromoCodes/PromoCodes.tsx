import { ReactElement, FormEvent, useState, useEffect } from 'react';
import { AppDispatch } from '../../../store/store';
import { updateCartThunk, getDiscountsThunk } from '../../../store/cart/thunks';
import { Button } from '../../../components/shared/Button';
import { ICart, IDiscount, IPromoCode } from '../../../store/cart/types';
import { ErrorMessage } from '../../../components/shared/ErrorMessage';

import styles from './promoCodes.module.scss';

const CODE_ERROR = 'The code you entered is not valid.';

interface IPromoCodesProps {
  basket: ICart;
  discounts: IDiscount[];
  dispatch: AppDispatch;
}

export default function PromoCodes({ basket, discounts, dispatch }: IPromoCodesProps): ReactElement {
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (discounts.length === 0) {
      dispatch(getDiscountsThunk());
    }
  }, [dispatch, discounts]);

  function getCodeName(codeId: string): string | undefined {
    const code = discounts.find((item) => item.id === codeId);

    return code?.code;
  }

  function applyCode(e: FormEvent<HTMLFormElement>): void {
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
  }

  function removeCode(item: IPromoCode): void {
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
  }

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
        />
        <Button type="submit" name="Apply" className={styles.promo__form_button} />
      </form>

      {isError && <ErrorMessage text={CODE_ERROR} className={styles.promo__error} />}

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
