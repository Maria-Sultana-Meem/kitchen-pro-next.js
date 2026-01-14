import {
  FaStar,
  FaShieldAlt,
  FaShippingFast,
  FaRecycle,
  FaLeaf,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FaStar size={32} className="text-[#CE8946]" />,
      title: "Premium Quality",
      desc: "Every product is carefully selected to ensure durability, performance, and professional kitchen standards.",
    },
    {
      id: 2,
      icon: <FaShieldAlt size={32} className="text-[#CE8946]" />,
      title: "Trusted & Secure",
      desc: "We guarantee safe shopping with verified products and secure checkout for complete peace of mind.",
    },
    {
      id: 3,
      icon: <FaShippingFast size={32} className="text-[#CE8946]" />,
      title: "Fast Delivery",
      desc: "Get your kitchen tools delivered quickly and safely with our reliable logistics partners.",
    },
    {
      id: 4,
      icon: <FaRecycle size={32} className="text-[#CE8946]" />,
      title: "Eco Friendly",
      desc: "Our packaging and materials are environmentally friendly and safe for the planet.",
    },
    {
      id: 5,
      icon: <FaLeaf size={32} className="text-[#CE8946]" />,
      title: "Healthy Cooking",
      desc: "Designed to support oil-free, hygienic, and healthy cooking every day.",
    },
    {
      id: 6,
      icon: <FaHeadset size={32} className="text-[#CE8946]" />,
      title: "24/7 Support",
      desc: "Our support team is always ready to help you with any order or product queries.",
    },
  ];

  return (
    <section className="w-10/12 mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#CE8946]">
        Why Choose KitchenPro?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFDBF] p-8 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-[#3A2A14]">
              {item.title}
            </h3>

            <p className="text-[#5C4A2D] text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
