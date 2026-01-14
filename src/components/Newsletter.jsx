export default function Newsletter() {
  return (
    <section className="w-10/12 mx-auto rounded-md bg-linear-to-r from-[#CE8946] to-[#b9773b] py-20 mt-20">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-white">

        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-lg text-white/90">
            Subscribe to our newsletter and be the first to know about new kitchen tools, special discounts, and exclusive deals.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg w-full">
          <h3 className="text-2xl font-semibold text-[#3A2A14] mb-4">
            Join Our Community
          </h3>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CE8946]"
            />

            <button
              type="submit"
              className="bg-[#CE8946] text-white px-6 py-3 rounded-md hover:bg-[#b9773b] transition font-semibold"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-3">
            We respect your privacy. No spam, ever.
          </p>
        </div>

      </div>
    </section>
  );
}
