import { useSelector } from 'react-redux';
import { selectEditUserInfo } from '../store/user/selectors';
import { useContext, useEffect } from 'react';
import { ModeContext } from '../context/mode/ModeContext.ts';
import { useAppDispatch } from '../store/store.ts';
import { deleteSuccessState, resetEditError } from '../store/user/slice';
import { TStatus } from '../types/types.ts';

export function useProfileMessages(): [TStatus, string, boolean, boolean, () => boolean] {
  const { editStatus, editError, isSuccess } = useSelector(selectEditUserInfo);
  const { isEditMode, toggleEditMode } = useContext(ModeContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editStatus === 'success') {
      if (isEditMode) {
        toggleEditMode();
      }

      const timer = setTimeout(() => {
        dispatch(deleteSuccessState());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, editStatus]);

  useEffect(() => {
    if (editError) {
      const timer = setTimeout(() => {
        dispatch(resetEditError());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, editError]);

  return [editStatus, editError, isSuccess, isEditMode, toggleEditMode];
}
