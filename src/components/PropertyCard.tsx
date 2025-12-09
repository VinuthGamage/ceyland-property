import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: string;
  featured?: boolean;
  listingType: 'sale' | 'rent'; // Added listingType
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition"
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
            Featured
          </div>
        )}

        {/* Property Type */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-900">
          {property.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg text-gray-900 mb-1 line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="text-xs line-clamp-1">{property.location}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1 text-gray-600">
              <Bed className="w-3 h-3" />
              <span className="text-xs">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1 text-gray-600">
              <Bath className="w-3 h-3" />
              <span className="text-xs">{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-gray-600">
            <Maximize className="w-3 h-3" />
            <span className="text-xs">{property.area.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-blue-600">${property.price.toLocaleString()}</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}