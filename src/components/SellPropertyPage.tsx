import { TrendingUp, CheckCircle, DollarSign, Camera, FileText, Users } from 'lucide-react';

interface SellPropertyPageProps {
  onOpenPostAd: () => void;
}

export function SellPropertyPage({ onOpenPostAd }: SellPropertyPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">Sell Your Property</h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
            Get the best value for your property with our expert guidance. We handle marketing, 
            negotiations, and all paperwork to ensure a smooth selling process.
          </p>
          <button
            onClick={onOpenPostAd}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg inline-flex items-center gap-2"
          >
            <Camera className="w-5 h-5" />
            List Your Property Now
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to sell your property</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm">1</div>
              <h3 className="text-2xl text-gray-900 mb-4">Create Your Listing</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload photos, add property details, and set your price. Our easy-to-use form guides you through every step.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm">2</div>
              <h3 className="text-2xl text-gray-900 mb-4">Connect With Buyers</h3>
              <p className="text-gray-600 leading-relaxed">
                Your property gets featured on our platform. Interested buyers can contact you directly through our system.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm">3</div>
              <h3 className="text-2xl text-gray-900 mb-4">Close the Deal</h3>
              <p className="text-gray-600 leading-relaxed">
                We assist with negotiations and paperwork. Get the best value with our expert support throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Why Sell With Us?</h2>
            <p className="text-xl text-gray-600">The advantages of choosing Ceyland Property</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Maximum Exposure</h3>
                  <p className="text-gray-600">
                    Your property is showcased to thousands of active buyers searching on our platform daily.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Expert Marketing</h3>
                  <p className="text-gray-600">
                    Professional photography, compelling descriptions, and strategic pricing to attract buyers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Fast & Secure</h3>
                  <p className="text-gray-600">
                    Verified buyers, secure transactions, and quick turnaround times for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Full Support</h3>
                  <p className="text-gray-600">
                    Dedicated agents available to answer questions, schedule viewings, and negotiate on your behalf.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl p-12 text-center">
            <h3 className="text-3xl text-white mb-4">Ready to Sell Your Property?</h3>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied sellers who found the perfect buyer through our platform.
            </p>
            <button
              onClick={onOpenPostAd}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg inline-flex items-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Create Your Listing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
