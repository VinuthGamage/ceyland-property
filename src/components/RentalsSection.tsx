import { Search, ChevronDown, Grid3x3, List, MapPin as MapIcon, Bed, Bath, Heart, Maximize } from 'lucide-react';
import { useState } from 'react';
import { Property } from './PropertyCard';

interface RentalsSectionProps {
  properties: Property[];
}

export function RentalsSection({ properties }: RentalsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState('newest');
  const [priceFilter, setPriceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [bedroomsFilter, setBedroomsFilter] = useState('all');
  const [bathroomsFilter, setBathroomsFilter] = useState('all');

  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showBedroomsDropdown, setShowBedroomsDropdown] = useState(false);
  const [showBathroomsDropdown, setShowBathroomsDropdown] = useState(false);

  // Filter properties based on search and filters
  const filteredProperties = properties.filter((property) => {
    // Location search filter
    const matchesSearch = searchQuery === '' || 
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Price filter (for rentals)
    let matchesPrice = true;
    if (priceFilter !== 'all') {
      const price = property.price;
      if (priceFilter === '0-1000') matchesPrice = price < 1000;
      else if (priceFilter === '1000-2000') matchesPrice = price >= 1000 && price < 2000;
      else if (priceFilter === '2000-3000') matchesPrice = price >= 2000 && price < 3000;
      else if (priceFilter === '3000+') matchesPrice = price >= 3000;
    }

    // Type filter
    const matchesType = typeFilter === 'all' || property.type.toLowerCase() === typeFilter.toLowerCase();

    // Bedrooms filter
    const matchesBedrooms = bedroomsFilter === 'all' || property.bedrooms >= parseInt(bedroomsFilter);

    // Bathrooms filter
    const matchesBathrooms = bathroomsFilter === 'all' || property.bathrooms >= parseInt(bathroomsFilter);

    return matchesSearch && matchesPrice && matchesType && matchesBedrooms && matchesBathrooms;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'beds') return b.bedrooms - a.bedrooms;
    return b.id - a.id; // newest first
  });

  return (
    <section id="rentals" className="py-16 bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white text-center mb-8">FIND YOUR PERFECT HOME</h1>
          
          {/* Search Bar */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Address, City, ZIP"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-2 transition-colors">
              <Search className="w-5 h-5" />
              SEARCH
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Price Filter */}
            <div className="relative">
              <button
                onClick={() => setShowPriceDropdown(!showPriceDropdown)}
                className="px-4 py-2 bg-transparent text-white border border-gray-500 rounded hover:bg-gray-700 flex items-center gap-2"
              >
                Price <ChevronDown className="w-4 h-4" />
              </button>
              {showPriceDropdown && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-48 z-10">
                  <button onClick={() => { setPriceFilter('all'); setShowPriceDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">Any Price</button>
                  <button onClick={() => { setPriceFilter('0-1000'); setShowPriceDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">Under $1,000</button>
                  <button onClick={() => { setPriceFilter('1000-2000'); setShowPriceDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">$1,000 - $2,000</button>
                  <button onClick={() => { setPriceFilter('2000-3000'); setShowPriceDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">$2,000 - $3,000</button>
                  <button onClick={() => { setPriceFilter('3000+'); setShowPriceDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">$3,000+</button>
                </div>
              )}
            </div>

            {/* Type Filter */}
            <div className="relative">
              <button
                onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                className="px-4 py-2 bg-transparent text-white border border-gray-500 rounded hover:bg-gray-700 flex items-center gap-2"
              >
                Type <ChevronDown className="w-4 h-4" />
              </button>
              {showTypeDropdown && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-48 z-10">
                  <button onClick={() => { setTypeFilter('all'); setShowTypeDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">All Types</button>
                  <button onClick={() => { setTypeFilter('apartment'); setShowTypeDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">Apartment</button>
                  <button onClick={() => { setTypeFilter('house'); setShowTypeDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">House</button>
                  <button onClick={() => { setTypeFilter('villa'); setShowTypeDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">Villa</button>
                </div>
              )}
            </div>

            {/* Bedrooms Filter */}
            <div className="relative">
              <button
                onClick={() => setShowBedroomsDropdown(!showBedroomsDropdown)}
                className="px-4 py-2 bg-transparent text-white border border-gray-500 rounded hover:bg-gray-700 flex items-center gap-2"
              >
                Bedrooms <ChevronDown className="w-4 h-4" />
              </button>
              {showBedroomsDropdown && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-48 z-10">
                  <button onClick={() => { setBedroomsFilter('all'); setShowBedroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">Any</button>
                  <button onClick={() => { setBedroomsFilter('1'); setShowBedroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">1+</button>
                  <button onClick={() => { setBedroomsFilter('2'); setShowBedroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">2+</button>
                  <button onClick={() => { setBedroomsFilter('3'); setShowBedroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">3+</button>
                  <button onClick={() => { setBedroomsFilter('4'); setShowBedroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">4+</button>
                </div>
              )}
            </div>

            {/* Bathrooms Filter */}
            <div className="relative">
              <button
                onClick={() => setShowBathroomsDropdown(!showBathroomsDropdown)}
                className="px-4 py-2 bg-transparent text-white border border-gray-500 rounded hover:bg-gray-700 flex items-center gap-2"
              >
                Bathrooms <ChevronDown className="w-4 h-4" />
              </button>
              {showBathroomsDropdown && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-48 z-10">
                  <button onClick={() => { setBathroomsFilter('all'); setShowBathroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">Any</button>
                  <button onClick={() => { setBathroomsFilter('1'); setShowBathroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">1+</button>
                  <button onClick={() => { setBathroomsFilter('2'); setShowBathroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">2+</button>
                  <button onClick={() => { setBathroomsFilter('3'); setShowBathroomsDropdown(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900">3+</button>
                </div>
              )}
            </div>

            {/* More Filters */}
            <button className="px-4 py-2 bg-transparent text-white border border-gray-500 rounded hover:bg-gray-700 flex items-center gap-2">
              More filters <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h2 className="text-3xl text-gray-900 mb-6">Rentals</h2>

        {/* Controls Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">{sortedProperties.length} results</div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="beds">Bedrooms</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <Grid3x3 className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 rounded hover:bg-gray-100">
                <MapIcon className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Property Listings */}
        {sortedProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No rental properties found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {sortedProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative md:w-80 h-64 md:h-auto flex-shrink-0">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded text-sm">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl text-gray-900 mb-2">{property.title}</h3>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <Heart className="w-6 h-6" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{property.location}</p>

                      {/* Features */}
                      <div className="flex items-center gap-6 mb-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Bed className="w-5 h-5" />
                          <span>{property.bedrooms} beds</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Bath className="w-5 h-5" />
                          <span>{property.bathrooms} baths</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Maximize className="w-5 h-5" />
                          <span>{property.area.toLocaleString()} sqft</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600 text-sm">{property.type}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600 text-sm">For rent</span>
                      </div>
                      <div className="text-3xl text-gray-900">${property.price.toLocaleString()}<span className="text-lg text-gray-600">/mo</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
