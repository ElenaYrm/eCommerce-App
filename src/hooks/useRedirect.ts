import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthError, selectIsAuthorized } from '../store/auth/selectors';
import { useAppDispatch } from '../store/store';
import { PATH } from '../router/constants/paths';
import { Page } from '../router/types';
import { resetError } from '../store/auth/slice';

export function useRedirect(): string {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const error = useSelector(selectAuthError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized) {
      navigate(PATH[Page.Home]);
    }

    return (): void => {
      dispatch(resetError());
    };
  }, [isAuthorized, navigate, dispatch]);

  return error;
}
