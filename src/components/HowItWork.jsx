import { FaShoppingCart, FaBoxOpen, FaTruck, FaCheckCircle } from 'react-icons/fa';

export default function HowItWork() {
  const steps = [
    {
      id: 1,
      icon: <FaShoppingCart size={40} className="text-red-500" />, 
      title: "Select Products",
      description: "Browse our premium kitchen tools and add your favorite items to the cart easily.",
    },
    {
      id: 2,
      icon: <FaBoxOpen size={40} className="text-blue-500" />, 
      title: "Secure Packaging",
      description: "We carefully pack each item to ensure it arrives safely at your doorstep.",
    },
    {
      id: 3,
      icon: <FaTruck size={40} className="text-yellow-500" />,
      title: "Fast Delivery",
      description: "Get your products delivered quickly and reliably with our trusted courier partners.",
    },
    {
      id: 4,
      icon: <FaCheckCircle size={40} className="text-green-500" />, 
      title: "Satisfaction Guaranteed",
      description: "Enjoy high-quality products with a 100% satisfaction guarantee.",
    },
  ];

  return (
    <section className="w-10/12 mx-auto my-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#CE8946]">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-[#fffdbf] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl text-[#CE8946] font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-black">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
