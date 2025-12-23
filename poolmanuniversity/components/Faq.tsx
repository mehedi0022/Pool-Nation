import CustomButton from "./ui/CustomButton";
import faqs from "@/assets/data/faqs.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import ScrollToTop from "./ScrollToTop";

const Faq = () => {
  return (
    <div className="container mx-auto px-10 py-10 flex gap-10">
      <div className="basis-1/2">
        <CustomButton text="FAQ's" />
        <h1>Frequently Ask Questions</h1>
        <p className="my-6">
          Get detailed explanations about how our platform works, from employee
          management to course certifications
        </p>

        <div className="flex flex-col gap-4 mt-10">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="border dark:bg-gray-900/90 bg-[#FAF8FF] px-4 rounded-md cursor-pointer"
            >
              <AccordionItem value="item-1" className="cursor-pointer">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="basis-1/2 relative">
        <div className="">
          <Image
            src="/Dashboard.jpg"
            fill
            alt="Dashboard"
            className="absolute object-top-right top-0 border shadow-md rounded-xl"
          />
          <Image
            src="/dashboard-phone.jpg"
            width={200}
            height={100}
            alt="Dashboard"
            className="absolute top-10 -right-25 border shadow-md rounded-xl"
          />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Faq;
