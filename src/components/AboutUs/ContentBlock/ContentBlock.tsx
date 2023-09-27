import { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './contentBlock.module.scss';

export interface IContentBlock {
  title?: string;
  paragraphs?: string[];
  result?: string;
  classBase?: string;
}

function ContentBlock({ title, paragraphs, result, classBase }: IContentBlock): ReactElement {
  return (
    <>
      {title && (
        <h4 className={classnames(classBase ? styles[`${classBase}__subtitle`] : styles.root__subtitle)}>{title}</h4>
      )}
      {paragraphs &&
        paragraphs.map((content, index) => (
          <p key={index} className={classnames(classBase ? styles[`${classBase}__paragraph`] : styles.root__paragraph)}>
            {content}
          </p>
        ))}
      {result && (
        <p className={classnames(classBase ? styles[`${classBase}__paragraph`] : styles.root__paragraph)}>
          <span>Result:</span>
          {result}
        </p>
      )}
    </>
  );
}

export default ContentBlock;
