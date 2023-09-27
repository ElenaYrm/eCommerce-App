import { ITabsList } from '../types/interfaces';
import { UsedDataTab } from '../components/ProfileTabs/UsedDataTab';
import { AddressTab } from '../components/ProfileTabs/AddressTab';
import { PasswordTab } from '../components/ProfileTabs/PasswordTab';

export const tabsList: ITabsList[] = [
  {
    label: 'PERSONAL INFORMATION',
    content: <UsedDataTab />,
    title: 'Edit personal information',
  },
  {
    label: 'ADDRESSES',
    content: <AddressTab />,
    title: 'Add new address',
  },
  {
    label: 'PASSWORD',
    content: <PasswordTab />,
    title: 'Change password',
  },
];
