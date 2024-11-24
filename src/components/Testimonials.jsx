const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "These are the best dates I've ever had! The quality is unmatched, and they taste amazing.",
      name: "Sarah A.",
      role: "Food Enthusiast",
      rating: 5,
    },
    {
      quote:
        "I love how these dates are sustainably sourced. A healthy and ethical choice for my family.",
      name: "James K.",
      role: "Nutritionist",
      rating: 4,
    },
    {
      quote:
        "Noumidia dates are perfect for every occasion. They’ve become a staple in my kitchen.",
      name: "Emma R.",
      role: "Chef",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check for half-star
    const totalStars = 5;

    return Array.from({ length: totalStars }, (_, i) => {
      if (i < fullStars) {
        // Render full star
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.919 1.514 8.272L12 18.902l-7.45 4.595 1.514-8.272L0 9.306l8.332-1.151z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        // Render half star
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.919 1.514 8.272L12 18.902l-7.45 4.595 1.514-8.272L0 9.306l8.332-1.151z" />
            <path
              d="M12 .587l-7.45 15.5 1.514 8.272L12 18.902V.587z"
              className="text-gray-300"
            />
          </svg>
        );
      } else {
        // Render empty star
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.919 1.514 8.272L12 18.902l-7.45 4.595 1.514-8.272L0 9.306l8.332-1.151z" />
          </svg>
        );
      }
    });
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
