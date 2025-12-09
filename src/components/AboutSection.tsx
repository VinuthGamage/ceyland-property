import { Shield, Users, Award, TrendingUp, Heart, CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">About Ceyland Property</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect property. We make real estate simple, safe, and stress-free.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="About Ceyland Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl mb-2">Making Dreams Reality</h3>
                <p className="text-blue-100">Since our inception, we've helped thousands find their dream homes</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl text-gray-900 mb-6">Why Choose Ceyland Property?</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              If you're busy or facing trust issues with others, don't waste your time—contact us. 
              We'll help you find your dream home, apartment, or the perfect commercial land for your business. 
              With reliable service and personalized support, we make your property search simple, safe, and stress-free.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Trusted Service</h4>
                  <p className="text-gray-600">100% reliable and transparent process from start to finish</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Personalized Support</h4>
                  <p className="text-gray-600">Dedicated agents who understand your unique needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Stress-Free Process</h4>
                  <p className="text-gray-600">We handle all the details so you can focus on what matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-blue-200">Properties Listed</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">1000+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">100%</div>
              <div className="text-blue-200">Trusted Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}