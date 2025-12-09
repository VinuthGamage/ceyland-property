import { Home, Phone, Mail, Menu, User, LogOut, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/b2715a5821d9e5c3eac21aa64921b7fa56c88433.png';

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  user: { name: string; email: string } | null;
  onLogout: () => void;
  onOpenPostAd: () => void;
  onFilterByType: (type: string) => void;
  onNavigate?: (page: 'home' | 'rentals' | 'houses' | 'commercial' | 'apartments' | 'villas' | 'allProperties') => void;
}

export function Header({ onOpenAuth, user, onLogout, onOpenPostAd, onFilterByType, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);

  const handlePropertyTypeClick = (page: 'houses' | 'commercial' | 'apartments' | 'villas' | 'allProperties') => {
    setPropertiesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleNavClick = (page: 'home' | 'rentals' | 'houses' | 'commercial' | 'apartments' | 'villas' | 'allProperties', sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
    
    // Scroll to section after a brief delay to allow page to load
    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Ceyland Property" className="w-12 h-12 object-contain" />
            <span className="text-xl text-gray-900">Ceyland Property</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
            
            {/* Properties Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPropertiesDropdownOpen(!propertiesDropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
              >
                Properties
                <ChevronDown className="w-4 h-4" />
              </button>
              {propertiesDropdownOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-200 z-50">
                  <button
                    onClick={() => handlePropertyTypeClick('houses')}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Houses
                  </button>
                  <button
                    onClick={() => handlePropertyTypeClick('commercial')}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Commercial Lands
                  </button>
                  <button
                    onClick={() => handlePropertyTypeClick('apartments')}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Apartments
                  </button>
                  <button
                    onClick={() => handlePropertyTypeClick('villas')}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Villas
                  </button>
                  <button
                    onClick={() => handlePropertyTypeClick('allProperties')}
                    className="block w-full text-left px-6 py-3 text-blue-600 hover:bg-gray-100 transition border-t border-gray-200"
                  >
                    View All Properties
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('rentals')} className="text-gray-700 hover:text-blue-600 transition">Rentals</button>
            <button onClick={() => handleNavClick('home', 'about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
            <button onClick={() => handleNavClick('home', 'contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
          </nav>

          {/* Auth & Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <button
                  onClick={onOpenPostAd}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Post Ad
                </button>
                <div className="relative">
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm">{user.name}</span>
                  </button>
                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                        My Profile
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                        Saved Properties
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                        My Listings
                      </button>
                      <button
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => onOpenAuth('register')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNavClick('home')} className="text-left text-gray-700 hover:text-blue-600 transition">Home</button>
              <div>
                <button
                  onClick={() => setPropertiesDropdownOpen(!propertiesDropdownOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition w-full"
                >
                  Properties
                  <ChevronDown className="w-4 h-4" />
                </button>
                {propertiesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <button
                      onClick={() => handlePropertyTypeClick('houses')}
                      className="block text-left text-gray-600 hover:text-blue-600 transition"
                    >
                      Houses
                    </button>
                    <button
                      onClick={() => handlePropertyTypeClick('commercial')}
                      className="block text-left text-gray-600 hover:text-blue-600 transition"
                    >
                      Commercial Lands
                    </button>
                    <button
                      onClick={() => handlePropertyTypeClick('apartments')}
                      className="block text-left text-gray-600 hover:text-blue-600 transition"
                    >
                      Apartments
                    </button>
                    <button
                      onClick={() => handlePropertyTypeClick('villas')}
                      className="block text-left text-gray-600 hover:text-blue-600 transition"
                    >
                      Villas
                    </button>
                    <button
                      onClick={() => handlePropertyTypeClick('allProperties')}
                      className="block text-left text-blue-600 hover:text-blue-700 transition"
                    >
                      View All
                    </button>
                  </div>
                )}
              </div>
              <button onClick={() => handleNavClick('rentals')} className="text-left text-gray-700 hover:text-blue-600 transition">Rentals</button>
              <button onClick={() => handleNavClick('home', 'about')} className="text-left text-gray-700 hover:text-blue-600 transition">About</button>
              <button onClick={() => handleNavClick('home', 'contact')} className="text-left text-gray-700 hover:text-blue-600 transition">Contact</button>
              {user ? (
                <>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-900 mb-2">{user.name}</p>
                    <button className="w-full text-left text-gray-700 hover:text-blue-600 transition mb-2">
                      My Profile
                    </button>
                    <button className="w-full text-left text-gray-700 hover:text-blue-600 transition mb-2">
                      Saved Properties
                    </button>
                    <button className="w-full text-left text-gray-700 hover:text-blue-600 transition mb-2">
                      My Listings
                    </button>
                    <button
                      onClick={onOpenPostAd}
                      className="w-full mb-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Post Ad
                    </button>
                    <button
                      onClick={onLogout}
                      className="w-full text-left text-red-600 hover:text-red-700 transition flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="pt-4 border-t border-gray-200 flex gap-2">
                  <button
                    onClick={() => onOpenAuth('login')}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => onOpenAuth('register')}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}