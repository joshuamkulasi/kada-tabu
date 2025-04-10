'use client';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Graphic Design',
      description: 'Professional graphic design services for all your branding needs',
      features: [
        'Logo Design',
        'Brand Identity',
        'Business Cards',
        'Brochures',
        'Posters',
        'Social Media Graphics'
      ],
    },
    {
      id: 2,
      title: 'Print Services',
      description: 'High-quality printing solutions for businesses and individuals',
      features: [
        'Digital Printing',
        'Offset Printing',
        'Large Format Printing',
        'Business Cards',
        'Flyers & Brochures',
        'Posters & Banners'
      ],
    },
    {
      id: 3,
      title: 'Custom Products',
      description: 'Customized products with your unique designs and branding',
      features: [
        'Custom T-Shirts',
        'Hoodies',
        'Polo Shirts',
        'Tote Bags',
        'Laptop Bags',
        'Backpacks'
      ],
    },
    {
      id: 4,
      title: 'Embroidery',
      description: 'Professional embroidery services for high-quality branding',
      features: [
        'Custom Embroidery',
        'Corporate Uniforms',
        'Team Apparel',
        'Hats & Caps',
        'Patches & Badges',
        'Custom Designs'
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span style={{ color: '#83580b' }}>Our Services</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of design and printing services tailored to meet your unique needs.
        </p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-1"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#83580b' }}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-kada-brown">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href={`/contact?product=${service.title}`}
                  className="inline-block px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  style={{ backgroundColor: '#f5dd7b', color: '#83580b' }}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
