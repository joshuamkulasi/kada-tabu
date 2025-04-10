import Image from 'next/image';
import Link from 'next/link';

const products = {
  clothing: [
    {
      id: 1,
      name: 'Custom T-Shirt',
      description: 'High-quality cotton t-shirts with your unique design',
      price: 'From K45.00',
      image: '/products/tshirt.png',
    },
    {
      id: 2,
      name: 'Polo Shirt',
      description: 'Professional polo shirts with embroidered designs',
      price: 'From K65.00',
      image: '/products/polo.png',
    },
    {
      id: 3,
      name: 'Custom Hoodie',
      description: 'Comfortable hoodies with premium print quality',
      price: 'From K120.00',
      image: '/products/hoodie.png',
    },
  ],
  bags: [
    {
      id: 4,
      name: 'Tote Bag',
      description: 'Stylish and durable tote bags for everyday use',
      price: 'From K35.00',
      image: '/products/tote.png',
    },
    {
      id: 5,
      name: 'Laptop Bag',
      description: 'Professional laptop bags with custom designs',
      price: 'From K85.00',
      image: '/products/tote.png',
    },
    {
      id: 6,
      name: 'Backpack',
      description: 'High-quality backpacks with your unique style',
      price: 'From K95.00',
      image: '/products/tote.png',
    },
  ],
};

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span style={{ color: '#83580b' }}>Our Products</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our range of high-quality custom designed products. Each item is crafted with attention to detail and premium materials.
        </p>
      </section>

      {/* Clothing Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#83580b' }}>
          Custom Clothing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.clothing.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#83580b' }}>
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold" style={{ color: '#83580b' }}>
                    {product.price}
                  </span>
                  <Link
                    href={`/contact?product=${product.name}`}
                    className="inline-block px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                    style={{ backgroundColor: '#f5dd7b', color: '#83580b' }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bags Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#83580b' }}>
          Custom Bags
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.bags.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#83580b' }}>
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold" style={{ color: '#83580b' }}>
                    {product.price}
                  </span>
                  <Link
                    href={`/contact?product=${product.name}`}
                    className="inline-block px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                    style={{ backgroundColor: '#f5dd7b', color: '#83580b' }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4 rounded-2xl mb-8" style={{ backgroundColor: '#f5dd7b' }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#83580b' }}>
          Need a Custom Design?
        </h2>
        <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
          We offer personalized design services to match your specific requirements. Contact us to discuss your ideas.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-lg font-medium text-white transition-colors duration-300"
          style={{ backgroundColor: '#83580b' }}
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
