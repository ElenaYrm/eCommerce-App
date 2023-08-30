import styles from './tabs.module.scss';
import { ReactElement, useState } from 'react';
import { ITabsList } from '../../../types/interfaces';
import classNames from 'classnames';
import { FirstTab } from './FirstTab';
import { SecondTab } from './SecondTab';
import { ThirdTab } from './ThirdTab';

interface ITabsProps {
  isTabListHidden: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

function Tabs({ isTabListHidden, setIsEditing }: ITabsProps): ReactElement {
  const [activeTab, setActiveTab] = useState(0);
  const tabsList: ITabsList[] = [
    {
      label: 'PERSONAL INFORMATION',
      content: <FirstTab isEditMode={isTabListHidden} setIsEditing={setIsEditing} />,
      title: 'Edit personal information',
    },
    {
      label: 'ADDRESSES',
      content: <SecondTab isEditMode={isTabListHidden} setIsEditing={setIsEditing} />,
      title: 'Add new address',
    },
    {
      label: 'PASSWORD',
      content: <ThirdTab isEditMode={isTabListHidden} setIsEditing={setIsEditing} />,
      title: 'Change password',
    },
  ];

  const handleTabClick = function (index: number): void {
    setActiveTab(index);
  };

  return (
    <div className={classNames(styles.root, { [styles.rootEdit]: isTabListHidden })}>
      {isTabListHidden && <h2 className={classNames(styles.root__title)}>{tabsList[activeTab].title}</h2>}
      <div
        className={classNames(styles.root__tabsList, { [styles.tabsList_hidden]: isTabListHidden }, styles.tabsList)}
      >
        {tabsList.map((tab, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.tabsList__tab, { [styles.tabsList__tab_active]: index === activeTab })}
              onClick={(): void => handleTabClick(index)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div className="tab-content">{tabsList[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
