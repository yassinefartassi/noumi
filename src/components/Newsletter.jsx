const Newsletter = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Restez à jour</h2>
        <p className="text-gray-600 mb-6">
          Abonnez-vous pour recevoir des mises à jour et des offres exclusives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
