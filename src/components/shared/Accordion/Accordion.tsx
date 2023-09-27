import { ReactElement } from 'react';
import { IAccordionItem } from './AccordionItem/AccordionItem';
import { AccordionItem } from './AccordionItem';

interface IAccordionProps {
  data: IAccordionItem[];
  className: string;
}

export default function Accordion({ data, className }: IAccordionProps): ReactElement {
  return (
    <ul className={className}>
      {data.map((item) => (
        <AccordionItem title={item.title} content={item.content} key={item.title} />
      ))}
    </ul>
  );
}
