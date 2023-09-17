import { ReactElement } from 'react';
import { ContentBlock } from '../ContentBlock';
import { ITextBlock } from '../ContentBlock/ContentBlock';

import styles from './teamProcess.module.scss';

interface ITeamworkProps {
  content: ITextBlock[];
}

function TeamProcess({ content }: ITeamworkProps): ReactElement {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Teamwork & Process</h3>

      {content.map((textBlock) => (
        <ContentBlock title={textBlock.title} paragraphs={textBlock.paragraphs} result={textBlock.result} />
      ))}
    </div>
  );
}

export default TeamProcess;
