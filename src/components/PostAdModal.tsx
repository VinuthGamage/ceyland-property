import { X, Upload, MapPin, DollarSign, Home, Bed, Bath, Maximize, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface PostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (property: any) => void;
  isLoggedIn: boolean;
  onLoginRequired: () => void;
}

export function PostAdModal({ isOpen, onClose, onSubmit, isLoggedIn, onLoginRequired }: PostAdModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    bedrooms: '1',
    bathrooms: '1',
    area: '',
    type: 'House',
    listingType: 'sale', // Added listingType
    description: '',
    image: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.price || parseInt(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.area || parseInt(formData.area) <= 0) newErrors.area = 'Valid area is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact email is required';
    if (!formData.contactPhone.trim()) newErrors.contactPhone = 'Contact phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }

    if (!validateForm()) {
      return;
    }

    const propertyData = {
      title: formData.title,
      price: parseInt(formData.price),
      location: formData.location,
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      area: parseInt(formData.area),
      type: formData.type,
      listingType: formData.listingType, // Added listingType
      description: formData.description,
      image: formData.image || 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
      contact: {
        name: formData.contactName,
        email: formData.contactEmail,
        phone: formData.contactPhone
      },
      featured: false,
      status: 'pending'
    };

    onSubmit(propertyData);
    
    // Reset form
    setFormData({
      title: '',
      price: '',
      location: '',
      bedrooms: '1',
      bathrooms: '1',
      area: '',
      type: 'House',
      listingType: 'sale', // Added listingType
      description: '',
      image: '',
      contactName: '',
      contactEmail: '',
      contactPhone: ''
    });
    setErrors({});
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-lg z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl mb-1">Post Your Property</h2>
              <p className="text-sm text-blue-100">List your property and reach thousands of potential buyers</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {!isLoggedIn && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Notice:</strong> You need to be logged in to post a property ad. Click submit to login or create an account.
              </p>
            </div>
          )}

          {/* Property Details Section */}
          <div className="mb-6">
            <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              Property Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  Property Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Modern 3BR Apartment in Downtown"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Price (USD) *
                </label>
                <input
                  type="number"
                  placeholder="500000"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.price ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
                {errors.price && <p className="text-sm text-red-600 mt-1">{errors.price}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Property Type *
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Land">Land</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Listing Type *
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.listingType}
                  onChange={(e) => setFormData({ ...formData, listingType: e.target.value as 'sale' | 'rent' })}
                >
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location *
                </label>
                <input
                  type="text"
                  placeholder="City, State/Province, Country"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
                {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  <Bed className="w-4 h-4 inline mr-1" />
                  Bedrooms *
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  <Bath className="w-4 h-4 inline mr-1" />
                  Bathrooms *
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  <Maximize className="w-4 h-4 inline mr-1" />
                  Area (Square Feet) *
                </label>
                <input
                  type="number"
                  placeholder="1500"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.area ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                />
                {errors.area && <p className="text-sm text-red-600 mt-1">{errors.area}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your property, its features, amenities, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  <ImageIcon className="w-4 h-4 inline mr-1" />
                  Property Image URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank to use a default image</p>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mb-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-600" />
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.contactName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
                {errors.contactName && <p className="text-sm text-red-600 mt-1">{errors.contactName}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                />
                {errors.contactEmail && <p className="text-sm text-red-600 mt-1">{errors.contactEmail}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.contactPhone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                />
                {errors.contactPhone && <p className="text-sm text-red-600 mt-1">{errors.contactPhone}</p>}
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              {isLoggedIn ? 'Submit Property' : 'Login to Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}