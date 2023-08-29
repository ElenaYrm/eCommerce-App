import styles from './profile.module.scss';
import { ReactElement, useState } from 'react';
import { Tabs } from '../../components/Profile/Tabs';
// import classNames from 'classnames';
import { GreetingTitle } from '../../components/Profile/GreetingTitle';

export default function Profile(): ReactElement {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        {!isEditing ? <GreetingTitle /> : ''}
        <Tabs isTabListHidden={isEditing} setIsEditing={setIsEditing} />
        {/* {isEditing ? (
          ''
        ) : (
          <button
            className={classNames(styles.root__btn, { [styles.root__btn_edit]: isEditing })}
            onClick={handleEditClick}
          >
            Edit
          </button>
        )} */}
      </div>
    </div>
  );
}
