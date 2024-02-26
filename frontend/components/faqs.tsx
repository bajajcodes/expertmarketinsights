import { FAQ } from "@/app/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  faqs: FAQ[];
}

export function FAQ(props: Props) {
  return (
    <div className="max-w-4xl py-6">
      <h2 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {props.faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border rounded-md px-2"
          >
            <AccordionTrigger className="text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
