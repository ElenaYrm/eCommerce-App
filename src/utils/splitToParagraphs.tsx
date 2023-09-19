import { ReactElement } from 'react';

export function splitToParagraphs(text: string, className?: string): ReactElement[] | ReactElement {
  const spans = text
    .replace(/\\n\n/g, '\n')
    .split('\n')
    .map((item, index) => (
      <span className={className} key={index}>
        {item}
      </span>
    ));
  return spans.length > 1 ? spans : <span className={className}>{text}</span>;
}
