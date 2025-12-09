import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PropertyGrid } from './components/PropertyGrid';
import { AboutSection } from './components/AboutSection';
import { RentalsSection } from './components/RentalsSection';
import { PropertyListingPage } from './components/PropertyListingPage';
import { SellPropertyPage } from './components/SellPropertyPage';
import { BuyPropertyPage } from './components/BuyPropertyPage';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { PostAdModal } from './components/PostAdModal';
import { Property } from './components/PropertyCard';
import { Toaster } from './components/ui/sonner';

const initialProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    price: 1250000,
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: 'https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NTI4NDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Villa',
    featured: true,
    listingType: 'sale'
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    price: 450000,
    location: 'Manhattan, NY',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjUyMjc2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Apartment',
    featured: true,
    listingType: 'sale'
  },
  {
    id: 3,
    title: 'Beachfront Villa with Pool',
    price: 2100000,
    location: 'Malibu, CA',
    bedrooms: 6,
    bathrooms: 5,
    area: 5800,
    image: 'https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NjUyMTgyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Villa',
    featured: true,
    listingType: 'sale'
  },
  {
    id: 4,
    title: 'Contemporary Townhouse',
    price: 650000,
    location: 'San Francisco, CA',
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    image: 'https://images.unsplash.com/photo-1624343385944-b99336163b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB0b3duaG91c2V8ZW58MXx8fHwxNzY1MjkyNjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'House',
    featured: false,
    listingType: 'sale'
  },
  {
    id: 5,
    title: 'Luxury Penthouse',
    price: 1850000,
    location: 'Miami, FL',
    bedrooms: 4,
    bathrooms: 4,
    area: 3800,
    image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2V8ZW58MXx8fHwxNzY1MjgzNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Apartment',
    featured: false,
    listingType: 'sale'
  },
  {
    id: 6,
    title: 'Ocean View Estate',
    price: 3200000,
    location: 'Laguna Beach, CA',
    bedrooms: 7,
    bathrooms: 6,
    area: 6500,
    image: 'https://images.unsplash.com/photo-1678788762802-0c6c6cdd89fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaGZyb250JTIwcHJvcGVydHl8ZW58MXx8fHwxNzY1MjkyNjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Villa',
    featured: false,
    listingType: 'sale'
  },
  {
    id: 7,
    title: 'Cozy Downtown Apartment',
    price: 2500,
    location: 'Seattle, WA',
    bedrooms: 2,
    bathrooms: 1,
    area: 950,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    type: 'Apartment',
    featured: false,
    listingType: 'rent'
  },
  {
    id: 8,
    title: 'Luxury Beachfront Condo',
    price: 4200,
    location: 'Miami Beach, FL',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    type: 'Apartment',
    featured: true,
    listingType: 'rent'
  },
  {
    id: 9,
    title: 'Modern Family Home',
    price: 3800,
    location: 'Austin, TX',
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    type: 'House',
    featured: false,
    listingType: 'rent'
  },
  {
    id: 10,
    title: 'Spacious Commercial Land',
    price: 850000,
    location: 'Dallas, TX',
    bedrooms: 0,
    bathrooms: 0,
    area: 15000,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    type: 'Commercial',
    featured: false,
    listingType: 'sale'
  },
  {
    id: 11,
    title: 'Prime Commercial Plot',
    price: 1200000,
    location: 'Houston, TX',
    bedrooms: 0,
    bathrooms: 0,
    area: 20000,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    type: 'Commercial',
    featured: true,
    listingType: 'sale'
  },
  {
    id: 12,
    title: 'Suburban Family House',
    price: 480000,
    location: 'Portland, OR',
    bedrooms: 4,
    bathrooms: 2,
    area: 2400,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
    type: 'House',
    featured: false,
    listingType: 'sale'
  }
];

export default function App() {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: 'all',
    priceRange: 'all',
    bedrooms: 'all'
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Admin states
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [properties, setProperties] = useState<Property[]>(initialProperties);

  // Post Ad state
  const [postAdModalOpen, setPostAdModalOpen] = useState(false);

  // Page navigation state
  const [currentPage, setCurrentPage] = useState<'home' | 'rentals' | 'houses' | 'commercial' | 'apartments' | 'villas' | 'allProperties' | 'sellProperty' | 'buyProperty'>('home');

  // Listen for admin login event from footer
  useEffect(() => {
    const handleOpenAdminLogin = () => setAdminLoginOpen(true);
    window.addEventListener('openAdminLogin', handleOpenAdminLogin);
    return () => window.removeEventListener('openAdminLogin', handleOpenAdminLogin);
  }, []);

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLogin = (email: string, password: string) => {
    // Mock login - in a real app, this would call an API
    console.log('Login:', email, password);
    setUser({ name: email.split('@')[0], email });
    setAuthModalOpen(false);
    toast.success('Successfully logged in!');
  };

  const handleRegister = (name: string, email: string, phone: string, password: string) => {
    // Mock registration - in a real app, this would call an API
    console.log('Register:', name, email, phone, password);
    setUser({ name, email });
    setAuthModalOpen(false);
    toast.success('Account created successfully!');
  };

  const handleLogout = () => {
    setUser(null);
    toast.success('Successfully logged out!');
  };

  const handleAdminLogin = (email: string, password: string) => {
    // Mock admin login - check credentials
    if (email === 'admin@ceylandproperty.com' && password === 'admin123') {
      setIsAdmin(true);
      setAdminLoginOpen(false);
      toast.success('Welcome, Administrator!');
    } else {
      toast.error('Invalid admin credentials!');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    toast.success('Admin logged out successfully!');
  };

  const handleAddProperty = (property: Omit<Property, 'id'>) => {
    const newProperty = {
      ...property,
      id: Math.max(...properties.map(p => p.id)) + 1
    };
    setProperties([...properties, newProperty]);
    toast.success('Property added successfully!');
  };

  const handleEditProperty = (id: number, updates: Partial<Property>) => {
    setProperties(properties.map(p => p.id === id ? { ...p, ...updates } : p));
    toast.success('Property updated successfully!');
  };

  const handleDeleteProperty = (id: number) => {
    setProperties(properties.filter(p => p.id !== id));
    toast.success('Property deleted successfully!');
  };

  const handleOpenPostAd = () => {
    setPostAdModalOpen(true);
  };

  const handlePostAdSubmit = (propertyData: any) => {
    if (!user) {
      // User needs to login
      setPostAdModalOpen(false);
      setAuthMode('login');
      setAuthModalOpen(true);
      return;
    }

    // Add the new property
    const newProperty: Property = {
      id: Math.max(...properties.map(p => p.id)) + 1,
      title: propertyData.title,
      price: propertyData.price,
      location: propertyData.location,
      bedrooms: propertyData.bedrooms,
      bathrooms: propertyData.bathrooms,
      area: propertyData.area,
      image: propertyData.image,
      type: propertyData.type,
      featured: false,
      listingType: propertyData.listingType
    };

    setProperties([newProperty, ...properties]);
    setPostAdModalOpen(false);
    toast.success('Your property has been posted successfully! It will be visible once approved by admin.');
  };

  const handleFilterByType = (type: string) => {
    setSearchFilters({
      ...searchFilters,
      propertyType: type === 'all' ? 'all' : type.toLowerCase()
    });
    // Navigate to home if not already there
    setCurrentPage('home');
  };

  const handleNavigate = (page: 'home' | 'rentals' | 'houses' | 'commercial' | 'apartments' | 'villas' | 'allProperties' | 'sellProperty' | 'buyProperty') => {
    setCurrentPage(page);
  };

  // Render page content based on current page
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection onSearch={setSearchFilters} onNavigate={handleNavigate} />
            <PropertyGrid filters={searchFilters} properties={properties} />
            <AboutSection />
          </>
        );
      case 'rentals':
        return <RentalsSection properties={properties.filter(p => p.listingType === 'rent')} />;
      case 'houses':
        return <PropertyListingPage title="Houses For Sale" properties={properties} propertyType="House" />;
      case 'commercial':
        return <PropertyListingPage title="Commercial Lands For Sale" properties={properties} propertyType="Commercial" />;
      case 'apartments':
        return <PropertyListingPage title="Apartments For Sale" properties={properties} propertyType="Apartment" />;
      case 'villas':
        return <PropertyListingPage title="Villas For Sale" properties={properties} propertyType="Villa" />;
      case 'allProperties':
        return <PropertyListingPage title="All Properties For Sale" properties={properties} />;
      case 'sellProperty':
        return <SellPropertyPage onOpenPostAd={handleOpenPostAd} />;
      case 'buyProperty':
        return <BuyPropertyPage properties={properties} />;
      default:
        return (
          <>
            <HeroSection onSearch={setSearchFilters} onNavigate={handleNavigate} />
            <PropertyGrid filters={searchFilters} properties={properties} />
            <AboutSection />
          </>
        );
    }
  };

  // Show admin dashboard if logged in as admin
  if (isAdmin) {
    return (
      <AdminDashboard
        onLogout={handleAdminLogout}
        properties={properties}
        onAddProperty={handleAddProperty}
        onEditProperty={handleEditProperty}
        onDeleteProperty={handleDeleteProperty}
      />
    );
  }

  // Show regular website
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        onOpenAuth={handleOpenAuth} 
        user={user} 
        onLogout={handleLogout}
        onOpenPostAd={handleOpenPostAd}
        onFilterByType={handleFilterByType}
        onNavigate={handleNavigate}
      />
      <main className="flex-1">
        {renderPageContent()}
      </main>
      <Footer />
      
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      <AdminLogin
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onAdminLogin={handleAdminLogin}
      />

      <PostAdModal
        isOpen={postAdModalOpen}
        onClose={() => setPostAdModalOpen(false)}
        onSubmit={handlePostAdSubmit}
        isLoggedIn={!!user}
        onLoginRequired={() => {
          setPostAdModalOpen(false);
          setAuthMode('login');
          setAuthModalOpen(true);
        }}
      />
      <Toaster />
    </div>
  );
}