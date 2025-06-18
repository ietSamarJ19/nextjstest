import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuickLinks: React.FC = () => {
  const links = [
    { 
      category: 'IET DAVV', 
      items: [
        { name: 'Student Feedback', href: '#' },
        { name: 'Admissions', href: '#' },
        { name: 'Current Openings', href: '#' }
      ]
    },
    { 
      category: 'Academics', 
      items: [
        { name: 'Student Portal', href: '#' },
        { name: 'University Website', href: '#' },
        { name: 'Schedule', href: '#' }
      ]
    },
    { 
      category: 'Others', 
      items: [
        { name: 'RTI', href: '#' },
        { name: 'Notification', href: '#' },
        { name: 'Events', href: '#' }
      ]
    }
  ];

  return (
    <div className="bg-red-700 text-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">QUICK LINKS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((category) => (
            <Card key={category.category} className="bg-red-800/50 border-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-yellow-300">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.items.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-red-600/50 hover:text-yellow-300 p-2 h-auto"
                    asChild
                  >
                    <Link href={item.href} className="text-sm">
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
