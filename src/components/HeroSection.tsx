import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';
import { TrendingUp, Heart } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (filters: any) => void;
  onNavigate?: (page: 'sellProperty' | 'buyProperty') => void;
}

export function HeroSection({ onSearch, onNavigate }: HeroSectionProps) {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');

  const handleSearch = () => {
    onSearch({
      location,
      propertyType,
      priceRange,
      bedrooms
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwbW9kZXJufGVufDF8fHx8MTc2NTI5Mzc4NHww&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-black/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl mb-6 tracking-tight leading-tight">
            Find Your Dream Home
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mt-2">
              Today
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
            Your trusted partner in real estate - making property dreams come true
          </p>

          {/* What We Offer Section */}
          <div className="mb-12">
            <h2 className="text-3xl text-white mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Sell Your Property Card */}
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-left shadow-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">Sell Your Property</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get the best value for your property with our expert guidance. We handle marketing, 
                  negotiations, and all paperwork to ensure a smooth selling process.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('sellProperty')}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg">Sell Property</span>
                </button>
              </div>

              {/* Buy New Property Card */}
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-left shadow-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">Buy New Property</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover your perfect home from our curated listings. Our agents help you find properties 
                  that match your budget, lifestyle, and future goals.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('buyProperty')}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-lg">Buy Property</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 lg:p-8 border border-white/50">
            <h3 className="text-2xl text-gray-900 mb-6 text-center">Start Your Property Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div className="lg:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="City, State, or ZIP"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Property Type</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Price Range</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="all">Any Price</option>
                  <option value="0-500000">&lt; $500K</option>
                  <option value="500000-1000000">$500K - $1M</option>
                  <option value="1000000-2000000">$1M - $2M</option>
                  <option value="2000000+">$2M+</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Bedrooms</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value="all">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              <Search className="w-5 h-5" />
              <span className="text-lg">Search Properties</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}