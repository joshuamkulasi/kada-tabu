'use client';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span style={{ color: '#83580b' }}>About Us</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover who we are and what drives us to create exceptional designs.
        </p>
      </section>

      {/* Company Info */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#83580b' }}>
              Our Story
            </h2>
            <p className="text-gray-600">
              Kada Tabu Graphic Design is a leading design studio based in Port Moresby, PNG. Founded with a passion for creating meaningful and impactful designs, we&#39;ve grown to become a trusted partner for businesses and individuals seeking professional design solutions.
            </p>
            <p className="text-gray-600">
              Our team of experienced designers combines creativity with technical expertise to deliver designs that not only look great but also achieve business objectives. We believe in the power of design to communicate, inspire, and transform.
            </p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#83580b' }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-kada-brown">•</span>
                  <span className="text-gray-600">Email: kadatabugraphicdesign@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-kada-brown">•</span>
                  <span className="text-gray-600">WhatsApp: +675 72881637</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-kada-brown">•</span>
                  <span className="text-gray-600">Location: Port Moresby, PNG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#83580b' }}>
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="relative h-64">
              <img
                src="/team/ronald.jpg"
                alt="Ronald Tukau"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#83580b' }}>
                Ronald Tukau
              </h3>
              <p className="text-gray-600">Founder & Creative Director</p>
              <p className="text-gray-600 mt-2">
                With years of experience in the design industry, Ronald leads our team with vision and passion.
              </p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#83580b' }}>
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#83580b' }}>
                Creativity
              </h3>
              <p className="text-gray-600">
                We believe in pushing boundaries and creating innovative solutions that stand out.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#83580b' }}>
                Quality
              </h3>
              <p className="text-gray-600">
                Our commitment to excellence ensures every project meets the highest standards.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#83580b' }}>
                Service
              </h3>
              <p className="text-gray-600">
                We prioritize our clients&#39; needs and maintain clear communication throughout the design process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
