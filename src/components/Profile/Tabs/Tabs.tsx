import './tabs.scss';
import { ReactElement, useState } from 'react';
import { ITabsList } from '../../../types/interfaces';

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
    <div className="root">
      {isTabListHidden ? <h2>{tabsList[activeTab].title}</h2> : ''}
      <div className={`tab-list ${isTabListHidden ? 'hidden' : ''}`}>
        {tabsList.map((tab, index) => {
          return (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
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
