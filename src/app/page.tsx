export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6">
          <span style={{ color: "#83580b" }}>Kada Tabu</span> {" "}
          <span style={{ color: "#83580b" }}>Graphic Design</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto">
          Professional Graphic Design & Printing Services in Port Moresby
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/products"
            style={{ backgroundColor: "#f5dd7b", color: "#83580b" }}
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg font-medium hover:bg-[#83580b] hover:text-white transition-all duration-300 shadow-lg"
          >
            View Products
          </a>
        </div>
      </section>

      {/* Featured Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        <div 
          style={{ backgroundColor: "#FFFFFF" }}
          className="group p-6 md:p-8 rounded-xl border-2 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <h2 
            style={{ color: "#83580b" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Custom Clothing
          </h2>
          <p className="text-black text-base md:text-lg mb-6">
            Unique graphic designs printed on high-quality clothing.
          </p>
          <a 
            href="/products/clothing" 
            style={{ backgroundColor: "#f5dd7b", color: "#83580b" }}
            className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white transition-colors duration-300"
          >
            Learn More 
          </a>
        </div>

        <div 
          style={{ backgroundColor: "#FFFFFF" }}
          className="group p-6 md:p-8 rounded-xl border-2 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <h2 
            style={{ color: "#83580b" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Designer Bags
          </h2>
          <p className="text-black text-base md:text-lg mb-6">
            Stylish handbags featuring custom graphic designs.
          </p>
          <a 
            href="/products/bags" 
            style={{ backgroundColor: "#f5dd7b", color: "#83580b" }}
            className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white transition-colors duration-300"
          >
            Learn More
          </a>
        </div>

        <div 
          style={{ backgroundColor: "#FFFFFF"}}
          className="group p-6 md:p-8 rounded-xl border-2 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <h2 
            style={{ color: "#83580b" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Logo Design
          </h2>
          <p className="text-black text-base md:text-lg mb-6">
            Professional logo design services for businesses.
          </p>
          <a 
            href="/services" 
            style={{ backgroundColor: "#f5dd7b", color: "#83580b" }}
            className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
