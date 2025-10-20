import * as React from 'react';
import * as RAccordion from '@radix-ui/react-accordion';

interface AccordionItem {
  title: string;
  content: string;
  delay?: number;
}

interface AccordionProps {
  items: AccordionItem[];
  oneOpen?: boolean;
}

const Accordion = ({ items, oneOpen = true }: AccordionProps) => {
  return (
    <RAccordion.Root type={oneOpen ? 'single' : 'multiple'} collapsible>
      <ul className="accordion accordion-2 rdx">
        {items.map((item, index) => (
          <RAccordion.Item key={index} value={`item-${index}`} asChild>
            <li data-aos="fade-up" data-aos-delay={item.delay || 0}>
              <RAccordion.Header asChild>
                <div className="title">
                  <RAccordion.Trigger className="w-full text-left" aria-label={item.title}>
                    <h4 className="bold uppercase mb10 mb-xs-16">{item.title}</h4>
                  </RAccordion.Trigger>
                </div>
              </RAccordion.Header>

              <RAccordion.Content className="content overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <h5>{item.content}</h5>
              </RAccordion.Content>
            </li>
          </RAccordion.Item>
        ))}
      </ul>
    </RAccordion.Root>
  );
};

export default Accordion;
