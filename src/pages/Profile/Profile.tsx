import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserID } from '../../store/auth/selectors';
import { resetError } from '../../store/auth/slice';
import { useAppDispatch } from '../../store/store';
import { getCustomerThunk } from '../../store/auth/thunks';

export default function Profile(): ReactElement {
  const userId = useSelector(selectUserID);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userId) {
      dispatch(getCustomerThunk());
    }

    return (): void => {
      dispatch(resetError());
    };
  }, [userId]);

  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Profile</h1>
    </div>
  );
}
