import styles from './profile.module.scss';
import { ReactElement, useState } from 'react';
import { ITabsList } from '../../types/interfaces';
import { Tabs } from '../../components/Profile/Tabs';
import { FirstTab } from '../../components/Profile/Tabs/FirstTab';
import { Input } from '../../types/enums';
import { IUserForm } from '../../components/RegisterForm/UserForm/UserForm';
import { ThirdTab } from '../../components/Profile/Tabs/ThirdTab';
import { SecondTab } from '../../components/Profile/Tabs/SecondTab';
import classNames from 'classnames';

export const testUser: IUserForm = {
  [Input.Password]: 'passwordtest',
  [Input.Email]: 'test@mail.com',
  [Input.FirstName]: 'testFirstName',
  [Input.LastName]: 'testLastName',
  date: '25',
  month: 'May',
  year: '2000',
};

export default function Profile(): ReactElement {
  const [isEditing, setIsEditing] = useState(false);

  const tabsList: ITabsList[] = [
    { label: 'PERSONAL INFORMATION', content: <FirstTab isEditMode={isEditing} />, title: 'Edit personal information' },
    { label: 'ADDRESSES', content: <SecondTab isEditMode={isEditing} />, title: 'Add new address' },
    { label: 'PASSWORD', content: <ThirdTab isEditMode={isEditing} />, title: 'Change password' },
  ];

  const handleEditClick = function (): void {
    setIsEditing(!isEditing);
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        <div>
          {isEditing ? (
            ''
          ) : (
            <div className={classNames(styles.root__greeting, styles.greeting)}>
              <div className={styles.greeting__ava}></div>
              <h2 className={styles.greeting__title}>Hello, {testUser.firstName}</h2>
              <p className={styles.greeting__subtitle}>Set your profile settings down below</p>
            </div>
          )}
          <Tabs tabsList={tabsList} isTabListHidden={isEditing} />
        </div>
        <button onClick={handleEditClick}>{isEditing ? 'Close' : 'Edit'}</button>
      </div>
    </div>
  );
}
