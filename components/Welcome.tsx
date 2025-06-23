import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2 } from 'lucide-react';

const WelcomeAboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-blue-200 font-medium uppercase tracking-wide">
                WELCOME TO
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                IET-DAVV
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-200 font-light">
                Institute of Engineering and Technology<br />
                Devi Ahilya Vishwavidyalaya
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. It has 
                survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
              >
                EXPLORE MORE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Main College Image */}
              <div className="relative h-80 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 flex items-center justify-center">
                <Building2 className="h-32 w-32 text-white opacity-80" />
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white font-bold text-xl mb-2">IET-DAVV Campus</h3>
                  <p className="text-white/90 text-sm">Modern Infrastructure & World-Class Facilities</p>
                </div>
              </div>
              
              {/* Bottom Section - Similar to reference */}
              <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h4 className="font-bold text-lg">DAVV Campus</h4>
                    <p className="text-sm opacity-90">Excellence in Engineering Education</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeAboutSection;