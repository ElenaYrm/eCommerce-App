import { ReactElement } from 'react';
import { ProcessItem } from './ProcessItem';
import { IContentBlock } from './ProcessItem/ProcessItem.tsx';

import styles from './teamProcessList.module.scss';

interface ITeamworkProps {
  content: IContentBlock[];
}

function TeamProcessList({ content }: ITeamworkProps): ReactElement {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Teamwork & Process</h3>

      {content.map((textBlock, index) => (
        <ProcessItem key={index} title={textBlock.title} paragraphs={textBlock.paragraphs} result={textBlock.result} />
      ))}
    </div>
  );
}

export default TeamProcessList;
