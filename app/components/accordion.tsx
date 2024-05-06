"use client";
import { useState } from 'react';

export interface FaqItem {
    question: string;
    answer: string;
  }
  
interface AccordionProps {
  faqs: FaqItem[];
}

const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="border-b border-gray-200 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {activeIndex === index && (
              <div className="mt-2">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
