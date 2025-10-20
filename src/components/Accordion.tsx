import * as RAccordion from '@radix-ui/react-accordion';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  delay?: number;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: boolean;
}

const Accordion = ({ items, defaultOpen = false }: AccordionProps) => {
  return (
    <RAccordion.Root 
      type="single" 
      collapsible 
      className="accordion accordion-2 rdx"
      defaultValue={defaultOpen ? items[0]?.id : undefined}
    >
      {items.map((item, index) => (
        <RAccordion.Item 
          key={item.id} 
          value={item.id}
          data-aos="fade-up"
          data-aos-delay={item.delay || (index + 1) * 100}
        >
          <RAccordion.Header>
            <RAccordion.Trigger className="title">
              <h4 className="bold uppercase mb10 mb-xs-16">{item.question}</h4>
            </RAccordion.Trigger>
          </RAccordion.Header>
          <RAccordion.Content 
            className="content"
            data-aos="fade-up"
          >
            <h5>{item.answer}</h5>
          </RAccordion.Content>
        </RAccordion.Item>
      ))}
    </RAccordion.Root>
  );
};

export default Accordion;
