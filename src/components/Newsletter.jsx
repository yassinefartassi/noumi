const Newsletter = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-light mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to receive updates and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
          />
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-900 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
