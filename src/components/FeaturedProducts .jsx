import sevenPiece from "../assets/noumie7piece.jpeg";
import onekg from "../assets/noumie1kg.jpeg";
import twokg from "../assets/noumie2kg.jpeg";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Al Majhoul Select",
      price: "15 DH",
      description: "Premium grade, 7 pieces sachet",
      image: sevenPiece,
    },
    {
      name: "Al Majhoul Select",
      price: "165 DH",
      description: "Premium grade, 1kg boite",
      image: onekg,
    },
    {
      name: "Al Majhoul Select",
      price: "330 DH",
      description: "Premium grade, 2kg boite",
      image: twokg,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center" id="nosProuits">
        Nos Produits
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
            <a
              href="https://wa.me/+212637123821?text=Bonjour,%20je%20souhaite%20acheter%20ce%20produit."
              className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition flex justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acheter via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
