import { PropertyCard, Property } from './PropertyCard';
import { Heart, Search, Filter, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface BuyPropertyPageProps {
  properties: Property[];
}

export function BuyPropertyPage({ properties }: BuyPropertyPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter properties for sale only
  let filteredProperties = properties.filter(property => {
    if (property.listingType !== 'sale') return false;

    // Search filter
    const matchesSearch = searchQuery === '' || 
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Price range filter
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = property.price;
      if (priceRange === '0-500000') matchesPrice = price < 500000;
      else if (priceRange === '500000-1000000') matchesPrice = price >= 500000 && price < 1000000;
      else if (priceRange === '1000000-2000000') matchesPrice = price >= 1000000 && price < 2000000;
      else if (priceRange === '2000000+') matchesPrice = price >= 2000000;
    }

    // Property type filter
    const matchesType = propertyType === 'all' || property.type === propertyType;

    // Bedrooms filter
    const matchesBedrooms = bedrooms === 'all' || property.bedrooms >= parseInt(bedrooms);

    return matchesSearch && matchesPrice && matchesType && matchesBedrooms;
  });

  // Sort properties
  filteredProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">Buy New Property</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover your perfect home from our curated listings. Our agents help you find properties 
            that match your budget, lifestyle, and future goals.
          </p>
        </div>
      </div>

      {/* Search and Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <label className="block text-sm text-gray-700 mb-2">Search Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="City, State, or ZIP"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Property Type</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Price Range</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="0-500000">Under $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000+">$2M+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Bedrooms</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl text-gray-900">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Available
              </h2>
              <p className="text-gray-600 mt-1">Find your dream home today</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">Sort by:</label>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search filters to see more results.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setPriceRange('all');
                  setPropertyType('all');
                  setBedrooms('all');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-4">Need Help Finding Your Perfect Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert agents are ready to guide you through every step of the buying process.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg">
              Contact an Agent
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition text-lg">
              Schedule a Viewing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
