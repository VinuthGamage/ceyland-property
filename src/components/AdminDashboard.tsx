import { useState } from 'react';
import { 
  Home, 
  Users, 
  Building2, 
  Settings, 
  LogOut, 
  Plus,
  Edit,
  Trash2,
  X,
  DollarSign,
  MapPin,
  Bed,
  Bath,
  Maximize
} from 'lucide-react';
import { Property } from './PropertyCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AdminDashboardProps {
  onLogout: () => void;
  properties: Property[];
  onAddProperty: (property: Omit<Property, 'id'>) => void;
  onEditProperty: (id: number, property: Partial<Property>) => void;
  onDeleteProperty: (id: number) => void;
}

export function AdminDashboard({ 
  onLogout, 
  properties, 
  onAddProperty, 
  onEditProperty, 
  onDeleteProperty 
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'properties' | 'users' | 'settings'>('properties');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);

  // Mock users data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 890', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 891', joinDate: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 892', joinDate: '2024-03-10' }
  ];

  const stats = [
    { label: 'Total Properties', value: properties.length, icon: Building2, color: 'blue' },
    { label: 'Total Users', value: users.length, icon: Users, color: 'green' },
    { label: 'Featured Properties', value: properties.filter(p => p.featured).length, icon: Home, color: 'purple' },
    { label: 'Total Value', value: `$${(properties.reduce((sum, p) => sum + p.price, 0) / 1000000).toFixed(1)}M`, icon: DollarSign, color: 'yellow' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8" />
              <div>
                <h1 className="text-2xl">Admin Dashboard</h1>
                <p className="text-sm text-purple-100">Ceyland Property Management</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('properties')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'properties'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-5 h-5 inline mr-2" />
                Properties
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'users'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="w-5 h-5 inline mr-2" />
                Users
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'settings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Settings className="w-5 h-5 inline mr-2" />
                Settings
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'properties' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl text-gray-900">Manage Properties</h2>
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Plus className="w-5 h-5" />
                    Add Property
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Property</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Location</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Price</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Type</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Listing</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Beds/Baths</th>
                        <th className="text-right py-3 px-4 text-sm text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties.map((property) => (
                        <tr key={property.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <ImageWithFallback
                                src={property.image}
                                alt={property.title}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <p className="text-sm text-gray-900">{property.title}</p>
                                {property.featured && (
                                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded mt-1">
                                    Featured
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{property.location}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">${property.price.toLocaleString()}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{property.type}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-2 py-1 rounded text-xs ${
                              property.listingType === 'sale' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-purple-100 text-purple-700'
                            }`}>
                              {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{property.bedrooms}/{property.bathrooms}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setEditingProperty(property)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded transition"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm('Are you sure you want to delete this property?')) {
                                    onDeleteProperty(property.id);
                                  }
                                }}
                                className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h2 className="text-xl text-gray-900 mb-6">Registered Users</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Name</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Email</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Phone</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-600">Join Date</th>
                        <th className="text-right py-3 px-4 text-sm text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-gray-900">{user.name}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{user.email}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{user.phone}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{user.joinDate}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded transition">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl text-gray-900 mb-6">System Settings</h2>
                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-sm text-gray-900 mb-2">Website Name</h3>
                    <input
                      type="text"
                      defaultValue="Ceyland Property"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-sm text-gray-900 mb-2">Contact Email</h3>
                    <input
                      type="email"
                      defaultValue="info@ceylandproperty.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-sm text-gray-900 mb-2">Contact Phone</h3>
                    <input
                      type="tel"
                      defaultValue="+1 (234) 567-890"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Property Modal */}
      <PropertyModal
        isOpen={isAddModalOpen || editingProperty !== null}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingProperty(null);
        }}
        property={editingProperty}
        onSave={(property) => {
          if (editingProperty) {
            onEditProperty(editingProperty.id, property);
          } else {
            onAddProperty(property as Omit<Property, 'id'>);
          }
          setIsAddModalOpen(false);
          setEditingProperty(null);
        }}
      />
    </div>
  );
}

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property | null;
  onSave: (property: Partial<Property>) => void;
}

function PropertyModal({ isOpen, onClose, property, onSave }: PropertyModalProps) {
  const [formData, setFormData] = useState({
    title: property?.title || '',
    price: property?.price || 0,
    location: property?.location || '',
    bedrooms: property?.bedrooms || 1,
    bathrooms: property?.bathrooms || 1,
    area: property?.area || 0,
    type: property?.type || 'House',
    listingType: property?.listingType || 'sale',
    image: property?.image || '',
    featured: property?.featured || false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl text-gray-900">
            {property ? 'Edit Property' : 'Add New Property'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-2">Property Title</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Price ($)</label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Property Type</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Land">Land</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Listing Type</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.listingType}
                onChange={(e) => setFormData({ ...formData, listingType: e.target.value as 'sale' | 'rent' })}
              >
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-2">Location</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Bedrooms</label>
              <input
                type="number"
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: parseInt(e.target.value) })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Bathrooms</label>
              <input
                type="number"
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: parseInt(e.target.value) })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Area (sqft)</label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: parseInt(e.target.value) })}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-2">Image URL</label>
              <input
                type="url"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Mark as Featured</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {property ? 'Update' : 'Add'} Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}