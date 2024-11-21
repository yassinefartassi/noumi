const FeaturedProducts = () => {
  const products = [
    {
      name: "Medjool Select",
      price: "$24.99",
      description: "Premium grade, 500g box",
    },
    {
      name: "Ajwa Dates",
      price: "$29.99",
      description: "Rare selection, 400g box",
    },
    {
      name: "Deglet Noor",
      price: "$19.99",
      description: "Classic variety, 500g box",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-light text-white mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group">
            <div className="aspect-square bg-gray-100 mb-4"></div>
            <h3 className="text-lg mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-lg">{product.price}</p>
            <button className="mt-2 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
