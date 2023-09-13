import classNames from 'classnames';
import styles from './teamProcess.module.scss';
import { ReactElement } from 'react';

function TeamProcess(): ReactElement {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Teamwork & Process</h3>
      <span className={classNames(styles.root__paragraph, styles.root__paragraphFirst)}>
        We recommend that you check out the tic-tac-toe game before continuing with the tutorial.{' '}
      </span>
      <span className={styles.root__paragraph}>
        One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This
        list gives you a history of all of the moves that have occurred in the game, and is updated as the game
        progresses.
      </span>
    </div>
  );
}

export default TeamProcess;
