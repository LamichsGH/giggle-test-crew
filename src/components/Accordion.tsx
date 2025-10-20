import { useState } from 'react';

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (oneOpen) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <ul className="accordion accordion-2 one-open">
      {items.map((item, index) => (
        <li 
          key={index}
          className={openIndex === index ? 'active' : ''}
          data-aos="fade-up" 
          data-aos-delay={item.delay || 0}
        >
          <div 
            className="title"
            onClick={() => handleToggle(index)}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleToggle(index);
            }}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <h4 className="bold uppercase mb10 mb-xs-16">{item.title}</h4>
          </div>
          <div 
            className="content"
            style={{
              maxHeight: openIndex === index ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-in-out',
              opacity: openIndex === index ? 1 : 0,
              paddingTop: openIndex === index ? '10px' : '0',
              paddingBottom: openIndex === index ? '20px' : '0'
            }}
          >
            <h5>{item.content}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
