import styles from './profile.module.scss';
import { ReactElement } from 'react';
import { Tabs } from '../../components/Profile/Tabs';
import { useIsEditMode } from './profileContext';
import { GreetingTitle } from '../../components/Profile/GreetingTitle';

export default function Profile(): ReactElement {
  const isEditMode = useIsEditMode();

  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        {!isEditMode && <GreetingTitle />}
        <Tabs />
      </div>
    </div>
  );
}
