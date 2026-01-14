'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What is KitchenPro?",
      answer:
        "KitchenPro is a premium kitchen tools brand that provides high-quality products to make cooking faster, easier, and more enjoyable.",
    },
    {
      id: 2,
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship to selected international countries. Shipping fees and delivery times vary depending on the destination.",
    },
    {
      id: 3,
      question: "Can I return a product if I'm not satisfied?",
      answer:
        "Absolutely! We have a 30-day return policy for all products. Please check our Returns & Refunds section for more details.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use it to track your package on our courier partner's website.",
    },
    {
      id: 5,
      question: "Do you offer any discounts or promotions?",
      answer:
        "Yes! Subscribe to our newsletter to get exclusive discounts, offers, and updates on new products.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="w-10/12 mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#CE8946]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-[#FFF8E7] text-[#3A2A14] rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:bg-[#FCEFC8] transition"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
              {openFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {openFAQ === faq.id && (
              <div className="px-6 py-4 border-t border-[#E0CBA6] text-[#3A2A14]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
