import { PropertyCard, Property } from './PropertyCard';
import { useState, useMemo } from 'react';

interface PropertyGridProps {
  filters: {
    location: string;
    propertyType: string;
    priceRange: string;
    bedrooms: string;
  };
  properties: Property[];
}

export function PropertyGrid({ filters, properties }: PropertyGridProps) {
  // Filter properties based on search criteria and only show sale properties
  const filteredProperties = properties.filter(property => {
    // Only show sale properties in the property grid
    if (property.listingType !== 'sale') {
      return false;
    }

    // Location filter
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Property type filter
    if (filters.propertyType !== 'all' && property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
      return false;
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const price = property.price;
      if (filters.priceRange === '0-500000' && price >= 500000) return false;
      if (filters.priceRange === '500000-1000000' && (price < 500000 || price >= 1000000)) return false;
      if (filters.priceRange === '1000000-2000000' && (price < 1000000 || price >= 2000000)) return false;
      if (filters.priceRange === '2000000+' && price < 2000000) return false;
    }

    // Bedrooms filter
    if (filters.bedrooms !== 'all') {
      const minBedrooms = parseInt(filters.bedrooms);
      if (property.bedrooms < minBedrooms) return false;
    }

    return true;
  });

  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-gray-900 mb-2">Featured Properties</h2>
            <p className="text-gray-600">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              {filters.propertyType !== 'all' && ` in ${filters.propertyType}`}
            </p>
          </div>
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
  );
}