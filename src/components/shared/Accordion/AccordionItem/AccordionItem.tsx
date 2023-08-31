import { ReactElement, useState } from 'react';
import { splitToParagraphs } from '../../../../utils';

export interface IAccordionItem {
  title: string;
  content: string;
}

import styles from './accordionItem.module.scss';
import classnames from 'classnames';

export function AccordionItem({ title, content }: IAccordionItem): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion(): void {
    setIsOpen(!isOpen);
  }

  return (
    <li className={styles.accordion__item} onClick={toggleAccordion}>
      <div className={styles.accordion__item_header}>
        <h3 className={styles.title}>{title}</h3>
        <span
          className={classnames(styles.icon__toggle, isOpen ? styles.icon__toggle_up : styles.icon__toggle_down)}
        ></span>
      </div>
      {isOpen && <div className={styles.accordion__item_content}>{splitToParagraphs(content)}</div>}
    </li>
  );
}
