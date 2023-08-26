import { ReactElement, useState } from 'react';
import { ITabsList } from '../../types/interfaces';
import { Tabs } from '../../components/shared/Tabs';
import { FirstTab } from '../../components/Profile/FirstTab';
import { Input } from '../../types/enums';
import { IUserForm } from '../../components/RegisterForm/UserForm/UserForm';

export const testUser: IUserForm = {
  [Input.Password]: 'testPassword',
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
    { label: 'ADDRESSES', content: 'Содержимое таба 2', title: 'Add new address' },
    { label: 'PASSWORD', content: 'Содержимое таба 3', title: 'Change password' },
  ];

  const handleEditClick = function (): void {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          ''
        ) : (
          <>
            <div></div>
            <h2>Hello, {testUser.firstName}</h2>
            <p>Set your profile settings down below</p>
          </>
        )}
        <Tabs tabsList={tabsList} isTabListHidden={isEditing} />
      </div>
      <button onClick={handleEditClick}>{isEditing ? 'Close' : 'Edit'}</button>
    </div>
  );
}
