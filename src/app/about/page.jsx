'use client';
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="w-10/12 mx-auto my-20 space-y-20">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#CE8946] mb-4">
          About KitchenPro
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          KitchenPro provides high-quality, premium kitchen tools to make cooking faster, easier, and more enjoyable. Our mission is to bring professional-grade products to every home chef.
        </p>
      </div>

      
      <div className="flex mt-5 flex-col md:flex-row items-center gap-10 mb-20">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/4.jpg"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-[#CE8946]">Our Story</h2>
          <p className="text-gray-700">
            Founded to make cooking effortless, KitchenPro combines quality craftsmanship with smart design. Every product is carefully selected for durability, performance, and elegance.
          </p>
          <p className="text-gray-700">
            From home cooks to professional chefs, our tools are trusted to provide reliability, precision, and style. Great tools lead to great meals, creating happy moments around the dining table.
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-[#fdfbc8] p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-[#CE8946] mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To provide top-quality kitchen tools that simplify cooking and inspire culinary creativity for everyone.
          </p>
        </div>
        <div className="bg-[#fdfbc8] p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-[#CE8946] mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To become the go-to brand for premium, reliable, and innovative kitchen products that every home chef can trust.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center space-y-12">
        <h2 className="text-3xl font-bold text-[#CE8946]">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Maria Sultana", role: "Founder & CEO", image: "https://i.pravatar.cc/150?img=32", identity: "Master Chef & Visionary" },
            { name: "Monirul Islam", role: "Product Manager", image: "https://i.pravatar.cc/150?img=58", identity: "Recipe Organizer & Product Guru" },
            { name: "Sajib Hasan", role: "Lead Developer", image: "https://i.pravatar.cc/150?img=14", identity: "Kitchen Tech Wizard" },
            { name: "Tanvira Alam", role: "Marketing Head", image: "https://i.pravatar.cc/150?img=21", identity: "Flavor Storyteller & Brand Builder" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-[#fdfbc8] p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-[#CE8946]"
              />
              <h3 className="text-lg font-semibold text-[#CE8946]">{member.name}</h3>
              <p className="text-gray-700 text-sm mb-1">{member.role}</p>
              <p className="text-[#CE8946] text-sm italic">{member.identity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
