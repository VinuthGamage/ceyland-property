import { PropertyCard, Property } from './PropertyCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface PropertyListingPageProps {
  title: string;
  properties: Property[];
  propertyType?: string; // Filter by specific type if provided
}

export function PropertyListingPage({ title, properties, propertyType }: PropertyListingPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');

  // Filter properties
  const filteredProperties = properties.filter(property => {
    // Filter by property type if specified
    if (propertyType && property.type !== propertyType) {
      return false;
    }

    // Only show sale properties
    if (property.listingType !== 'sale') {
      return false;
    }

    // Location search filter
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

    // Bedrooms filter
    const matchesBedrooms = bedrooms === 'all' || property.bedrooms >= parseInt(bedrooms);

    return matchesSearch && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl text-white text-center mb-8">{title}</h1>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City, State, or ZIP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
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
        </div>
      </div>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl text-gray-900">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
            </h2>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No properties found matching your criteria.</p>
              <p className="text-gray-500">Try adjusting your search filters.</p>
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
    </div>
  );
}
