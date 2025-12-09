import { DollarSign, Home, Shield, Users, TrendingUp, Award } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">What Are You Looking For?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you want to sell or buy, we're here to help you every step of the way
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Sell Property Card */}
          <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 p-8 lg:p-12 rounded-3xl border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl text-gray-900 mb-4">Sell Your Property</h3>
              <p className="text-gray-700 text-lg mb-6">
                Get the best value for your property with our expert guidance and extensive network of buyers
              </p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Free property valuation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Professional photography
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Maximum market exposure
                </li>
              </ul>
              <button className="px-8 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all shadow-lg text-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* Buy Property Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12 rounded-3xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl text-gray-900 mb-4">Buy New Property</h3>
              <p className="text-gray-700 text-lg mb-6">
                Discover your perfect home from our curated listings and personalized recommendations
              </p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Personalized property matching
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Expert negotiation support
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Complete legal assistance
                </li>
              </ul>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg text-lg">
                Browse Properties
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl mb-4">Why Choose Ceyland Property?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you're busy or facing trust issues with others, don't waste your time—contact us. 
              We'll help you find your dream home, apartment, or the perfect commercial land for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-2">Reliable Service</h4>
              <p className="text-gray-400">Trusted by thousands of satisfied clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-2">Personalized Support</h4>
              <p className="text-gray-400">Dedicated agents for your unique needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-2">Stress-Free Process</h4>
              <p className="text-gray-400">Simple, safe, and transparent transactions</p>
            </div>
          </div>

          <div className="text-center text-2xl text-yellow-300">
            Making your property search <span className="underline decoration-yellow-500">simple, safe, and stress-free</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-5xl text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-lg">Properties Listed</div>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-5xl text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600 text-lg">Happy Clients</div>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-5xl text-blue-600 mb-2">100%</div>
            <div className="text-gray-600 text-lg">Trusted Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
