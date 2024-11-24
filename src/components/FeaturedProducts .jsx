const FeaturedProducts = () => {
  const products = [
    {
      name: "Medjool Select",
      price: "$24.99",
      description: "Premium grade, 7 pieces sachet",
      image:
        "https://img.freepik.com/photos-gratuite/dattes-jaunes-seches-beton-autour-feuilles-vertes_114579-25223.jpg?t=st=1732227353~exp=1732230953~hmac=3dc7b1327770a9455cabc1a519301635dfa11fcb26c2047fb53dd0c33bf4dca0&w=1380", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$24.99",
      description: "Premium grade, 1kg box",
      image:
        "https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?b=1&s=612x612&w=0&k=20&c=bxg6UD0jzL1B7jkVoroYAMB6XKSXK5at7GYwkenO4sM=", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$24.99",
      description: "Premium grade, 500g box",
      image:
        "https://img.freepik.com/photos-gratuite/dattes-jaunes-seches-beton-autour-feuilles-vertes_114579-25223.jpg?t=st=1732227353~exp=1732230953~hmac=3dc7b1327770a9455cabc1a519301635dfa11fcb26c2047fb53dd0c33bf4dca0&w=1380", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$14.99",
      description: "downgraded grade, 7 pieces sachet",
      image:
        "https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?b=1&s=612x612&w=0&k=20&c=bxg6UD0jzL1B7jkVoroYAMB6XKSXK5at7GYwkenO4sM=", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$14.99",
      description: "downgraded grade, 1kg box",
      image:
        "https://img.freepik.com/photos-gratuite/dattes-jaunes-seches-beton-autour-feuilles-vertes_114579-25223.jpg?t=st=1732227353~exp=1732230953~hmac=3dc7b1327770a9455cabc1a519301635dfa11fcb26c2047fb53dd0c33bf4dca0&w=1380", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$14.99",
      description: "downgraded grade, 500g box",
      image:
        "https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?b=1&s=612x612&w=0&k=20&c=bxg6UD0jzL1B7jkVoroYAMB6XKSXK5at7GYwkenO4sM=", // Replace with the correct image URL
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center" id="nosProuits">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* Product Image */}
            <div className="aspect-square mb-4 rounded overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Product Details */}
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-lg font-semibold text-gray-900">
              {product.price}
            </p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Acheter via whatssApp
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
