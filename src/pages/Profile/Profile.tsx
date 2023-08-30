import styles from './profile.module.scss';
import { ReactElement, useState } from 'react';
import { Tabs } from '../../components/Profile/Tabs';
import { GreetingTitle } from '../../components/Profile/GreetingTitle';

export default function Profile(): ReactElement {
  const [isEditing, setIsEditing] = useState(false); //! REMOVE!

  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        {!isEditing && <GreetingTitle />}
        <Tabs isTabListHidden={isEditing} setIsEditing={setIsEditing} />
      </div>
    </div>
  );
}
