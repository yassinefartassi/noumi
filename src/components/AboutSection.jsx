import logo from "../assets/logo.jpeg";
const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-gray-200 rounded">
          <div className="aspect-square bg-gray-200 rounded overflow-hidden">
            <img
              src={logo}
              alt="Our Story Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            We source the finest dates from sustainable farms, ensuring premium
            quality and exceptional taste in every bite.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
