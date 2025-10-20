import { useState, useRef, useEffect } from 'react';

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
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Update content heights when items open/close
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;
      if (openIndex === index) {
        ref.style.setProperty('max-height', `${ref.scrollHeight}px`, 'important');
      } else {
        ref.style.setProperty('max-height', '0px', 'important');
      }
    });
  }, [openIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (openIndex === null) return;
      const ref = contentRefs.current[openIndex];
      if (ref) {
        ref.style.setProperty('max-height', `${ref.scrollHeight}px`, 'important');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openIndex]);

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
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleToggle(index);
              }
            }}
          >
            <h4 className="bold uppercase mb10 mb-xs-16">{item.title}</h4>
          </div>
          <div 
            ref={(el) => (contentRefs.current[index] = el)}
            className="content"
          >
            <h5>{item.content}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
