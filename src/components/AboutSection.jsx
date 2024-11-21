const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-200"></div>
          <div>
            <h2 className="text-3xl font-light mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              We source the finest dates from sustainable farms, ensuring
              premium quality and exceptional taste in every bite.
            </p>
            <button className="bg-transparent border border-black px-8 py-3 hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
