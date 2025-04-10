'use client';

import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Corporate Branding',
      description: 'Complete brand identity for a corporate client',
      category: 'Branding',
      images: [
        '/portfolio/corporate-branding-1.jpg',
        '/portfolio/corporate-branding-2.jpg',
        '/portfolio/corporate-branding-3.jpg',
      ],
      slug: 'corporate-branding',
    },
    {
      id: 2,
      title: 'Event Graphics',
      description: 'Designs for a major corporate event',
      category: 'Events',
      images: [
        '/portfolio/event-graphics-1.jpg',
        '/portfolio/event-graphics-2.jpg',
        '/portfolio/event-graphics-3.jpg',
      ],
      slug: 'event-graphics',
    },
    {
      id: 3,
      title: 'Product Packaging',
      description: 'Custom packaging design for a new product launch',
      category: 'Packaging',
      images: [
        '/portfolio/packaging-1.jpg',
        '/portfolio/packaging-2.jpg',
        '/portfolio/packaging-3.jpg',
      ],
      slug: 'product-packaging',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Social media graphics and digital content',
      category: 'Digital',
      images: [
        '/portfolio/digital-1.jpg',
        '/portfolio/digital-2.jpg',
        '/portfolio/digital-3.jpg',
      ],
      slug: 'digital-marketing',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span style={{ color: '#83580b' }}>Our Portfolio</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our creative work and see how we bring ideas to life through design.
        </p>
      </section>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-1"
          >
            <div className="relative h-64">
              <Image
                src={project.images[0]}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#83580b' }}>
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-500">Category:</span>
                <span className="px-2 py-1 text-sm rounded-full" style={{ backgroundColor: '#f5dd7b', color: '#83580b' }}>
                  {project.category}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{project.images.length} images</span>
                <a
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex justify-center py-2 px-4 border border-transparent rounded-lg font-medium transition-colors duration-300"
                  style={{ backgroundColor: '#f5dd7b', color: '#83580b' }}
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
