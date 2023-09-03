import styles from './tabs.module.scss';
import { ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useIsEditMode } from '../../../pages/Profile/profileContext';
import { tabsList } from '../../../constant/profile';
import { Loader } from '../../shared/Loader';
import { useSelector } from 'react-redux';
import { selectUserLoadingInfo } from '../../../store/user/selectors';

function Tabs(): ReactElement {
  const { status, error } = useSelector(selectUserLoadingInfo);
  const [activeTab, setActiveTab] = useState(0);
  const isTabListHidden = useIsEditMode();

  useEffect(() => {
    const storedActiveTab = localStorage.getItem('activeTab');
    if (storedActiveTab !== null) {
      setActiveTab(parseInt(storedActiveTab, 10));
    }
  }, []);

  const handleTabClick = function (index: number): void {
    setActiveTab(index);
    localStorage.setItem('activeTab', index.toString());
  };

  return (
    <div className={classNames(styles.root, { [styles.rootEdit]: isTabListHidden })}>
      {status === 'loading' && <Loader />}
      {status === 'success' && !error && (
        <>
          {isTabListHidden && <h2 className={classNames(styles.root__title)}>{tabsList[activeTab].title}</h2>}
          <div
            className={classNames(
              styles.root__tabsList,
              { [styles.tabsList_hidden]: isTabListHidden },
              styles.tabsList,
            )}
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
        </>
      )}
    </div>
  );
}

export default Tabs;
