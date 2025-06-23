import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const RecruitersSection = () => {
  const recruiters = [
    { name: 'LTI', logo: '🔷' },
    { name: 'Barclays', logo: '🏦' },
    { name: 'Capillary', logo: '💊' },
    { name: 'Cognizant', logo: '🔵' },
    { name: 'LG', logo: '⭕' },
    { name: 'Quantiphi', logo: '📊' },
    { name: 'ZS', logo: '⚡' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Google', logo: '🌈' },
    { name: 'IBM', logo: '💙' },
    { name: 'Accenture', logo: '🔺' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recruitment Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than 50+ companies visit IET-DAVV every year for campus placements, 
            offering excellent career opportunities to our students.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {recruiters.map((recruiter, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {recruiter.logo}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {recruiter.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
            View All Recruiters
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;