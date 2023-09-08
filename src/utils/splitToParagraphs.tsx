import { ReactElement } from 'react';

export function splitToParagraphs(text: string): ReactElement[] | string {
  const spans = text
    .replace(/\\n\n/g, '\n')
    .split('\n')
    .map((item, index) => <span key={index}>{item}</span>);
  return spans.length > 1 ? spans : text;
}
