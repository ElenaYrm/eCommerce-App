import { useEffect } from 'react';
import { resetCartError } from '../store/cart/slice';
import { AppDispatch } from '../store/store';

export function useResetError(error: string, dispatch: AppDispatch, time: number): void {
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
