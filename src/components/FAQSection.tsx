
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is VN Sender?",
      answer: "VN Sender is a powerful Windows application designed for email marketing campaigns. It allows you to send bulk emails, manage SMTP servers, verify email domains, and much more - all with an intuitive, modern interface."
    },
    {
      question: "Is VN Sender easy to use?",
      answer: "Yes! VN Sender features a modern, user-friendly interface that makes it easy to set up and run email campaigns, even if you're new to email marketing. Plus, it comes with comprehensive documentation to help you get started."
    },
    {
      question: "How many emails can I send with VN Sender?",
      answer: "VN Sender supports unlimited messages and mail lists, allowing you to scale your email marketing campaigns according to your needs without any artificial restrictions."
    },
    {
      question: "Does VN Sender support email personalization?",
      answer: "Absolutely! VN Sender offers dynamic variable insertion and Spintax support, allowing you to create highly personalized emails that feel custom-made for each recipient."
    },
    {
      question: "Can I track the performance of my campaigns?",
      answer: "Yes, VN Sender includes detailed reporting and analytics features that provide valuable insights into your campaign performance. You can also export these reports in Excel format for further analysis."
    },
    {
      question: "Is email verification included?",
      answer: "Yes, VN Sender includes smart domain and email verification to help ensure your messages reach legitimate recipients, improving deliverability and reducing bounce rates."
    },
    {
      question: "What operating systems is VN Sender compatible with?",
      answer: "VN Sender is designed specifically for Windows operating systems. It's optimized to run smoothly on Windows 10 and Windows 11."
    },
    {
      question: "Can I use multiple SMTP servers?",
      answer: "Yes, VN Sender supports unlimited SMTP server configurations and even offers SMTP rotation to enhance email deliverability by sending emails from the same campaign using different servers."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Find answers to common questions about VN Sender and its capabilities.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
