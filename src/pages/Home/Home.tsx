import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectIsNewUser } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { deleteNotice } from '../../store/auth/slice';

interface INoticeReturnType {
  payload: undefined;
  type: 'auth/deleteNotice';
}

export default function Home(): ReactElement {
  const isNewUser = useSelector(selectIsNewUser);
  const dispatch = useAppDispatch();

  return (
    <div style={{ width: '100%' }}>
      <h1>Home</h1>

      {isNewUser && (
        <div>
          <span>Hello!</span>
          <button onClick={(): INoticeReturnType => dispatch(deleteNotice())}>Close</button>
        </div>
      )}
    </div>
  );
}
