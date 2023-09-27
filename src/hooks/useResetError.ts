import { useEffect } from 'react';
import { resetCartError } from '../store/cart/slice';
import { useAppDispatch } from '../store/store';

export function useResetError(error: string, time: number): void {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(resetCartError());
      }, time);

      return (): void => {
        clearTimeout(timer);
      };
    }
  }, [error, time, dispatch]);
}
