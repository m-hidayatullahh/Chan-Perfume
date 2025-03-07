import React from 'react';
import { Phone, Mail, MapPin, ShoppingBag, Instagram } from 'lucide-react';

const products = [
  {
    name: "Get All 7 Best Scent",
    description: "VIP 30ml Extrait de perfume",
    image: "https://images.unsplash.com/photo-1741370235452-3af1c0362eb4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Natural Deodorant Collection",
    description: "Blush amour, Titan noir, Ivory breeze",
    image: "https://images.unsplash.com/photo-1741370227210-4ad422b4dbdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Blush",
    description: "Blush amour 30ml Extrait de perfume",
    image: "https://i.ibb.co.com/svqYWzMq/3.jpg",
  },
  {
    name: "Titan",
    description: "Titan noir 30ml Extrait de perfume",
    image: "https://i.ibb.co.com/whsMdjV1/2.jpg"
  }
];

function App() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Halo, saya mau beli parfum.");
    window.open(`https://wa.me/6287763249423?text=${message}`, '_blank');
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://picsvg.com/svg/1mKGpM.jpg" alt="Chan Perfume" className="h-16" /> Chan Perfume
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gold-600">Home</a>
            <a href="#products" className="text-gray-700 hover:text-gold-600">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-gold-600">Contact</a>
          </nav>
          <button 
            onClick={handleWhatsApp}
            className="bg-[#E4B649] text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#c99f3d] transition-colors"
          >
            <ShoppingBag size={20} />
            <span>Shop Now</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Discover Your Signature Scent
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Luxury fragrances crafted with passion and precision. Experience the essence of elegance with Chan Perfume.
              </p>
              <button 
                onClick={handleWhatsApp}
                className="bg-[#E4B649] text-white px-8 py-3 rounded-full text-lg hover:bg-[#c99f3d] transition-colors"
              >
                Shop Collection
              </button>
            </div>
            <div className="md:w-1/10">
            <img 
              src="https://picsvg.com/svg/1mKGpM.jpg" 
              alt="Chan Perfume" 
              className="rounded-lg w-[600px] h-auto" 
            />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full bg-[#E4B649] text-white py-2 rounded hover:bg-[#c99f3d] transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <Phone size={24} className="text-[#E4B649]" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+62 877-6324-9423</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-[#E4B649]" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>onkchanperfume@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
  <div className="flex items-center space-x-4">
    <Instagram size={24} className="text-[#E4B649]" />
    <div>
      <h3 className="font-semibold">Instagram</h3>
      <a
        href="https://www.instagram.com/chanofficial._"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-500 hover:underline"
      >
        @Chanofficial._
      </a>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Chan Perfume. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;