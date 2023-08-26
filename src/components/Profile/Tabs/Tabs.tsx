import styles from './tabs.module.scss';
import { ReactElement, useState } from 'react';
import { ITabsList } from '../../../types/interfaces';
import classNames from 'classnames';

interface ITabsProps {
  tabsList: ITabsList[];
  isTabListHidden: boolean;
}

function Tabs({ tabsList, isTabListHidden }: ITabsProps): ReactElement {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = function (index: number): void {
    setActiveTab(index);
  };

  return (
    <div className={styles.root}>
      {isTabListHidden ? <h2>{tabsList[activeTab].title}</h2> : ''}
      <div className={classNames(styles.root__tabList, { hidden: isTabListHidden }, styles.tabsList)}>
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
