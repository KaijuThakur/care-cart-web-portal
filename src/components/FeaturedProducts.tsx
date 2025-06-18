
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Paracetamol 500mg Tablets",
      price: 25,
      originalPrice: 30,
      image: "/placeholder.svg",
      manufacturer: "Cipla Ltd",
      rating: 4,
      prescription: false
    },
    {
      name: "Vitamin D3 Tablets",
      price: 180,
      originalPrice: 220,
      image: "/placeholder.svg",
      manufacturer: "Sun Pharma",
      rating: 5,
      prescription: false
    },
    {
      name: "Amoxicillin 250mg Capsules",
      price: 85,
      originalPrice: 95,
      image: "/placeholder.svg",
      manufacturer: "Ranbaxy",
      rating: 4,
      prescription: true
    },
    {
      name: "Omega-3 Fish Oil Capsules",
      price: 450,
      originalPrice: 550,
      image: "/placeholder.svg",
      manufacturer: "HealthKart",
      rating: 5,
      prescription: false
    },
    {
      name: "Crocin Pain Relief Tablet",
      price: 15,
      originalPrice: 18,
      image: "/placeholder.svg",
      manufacturer: "GSK",
      rating: 4,
      prescription: false
    },
    {
      name: "Multivitamin Tablets",
      price: 320,
      originalPrice: 400,
      image: "/placeholder.svg",
      manufacturer: "Revital",
      rating: 4,
      prescription: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular medicines and healthcare products, trusted by millions of customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
