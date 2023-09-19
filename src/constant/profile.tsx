import { ITabsList } from '../types/interfaces';
import { FirstTab } from '../components/Profile/Tabs/FirstTab';
import { SecondTab } from '../components/Profile/Tabs/SecondTab';
import { ThirdTab } from '../components/Profile/Tabs/ThirdTab';

export const tabsList: ITabsList[] = [
  {
    label: 'PERSONAL INFORMATION',
    content: <FirstTab />,
    title: 'Edit personal information',
  },
  {
    label: 'ADDRESSES',
    content: <SecondTab />,
    title: 'Add new address',
  },
  {
    label: 'PASSWORD',
    content: <ThirdTab />,
    title: 'Change password',
  },
];
