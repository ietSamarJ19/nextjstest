import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Header: React.FC = () => {
  return (
    <header className="bg-red-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IET</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Institute Of Engineering and Technology</h1>
              <p className="text-red-100 mt-1 text-base">इंजीनियरिंग प्रौद्योगिकी संस्थान</p>
            </div>
          </div>
          <div className="hidden md:block">
            <Badge variant="secondary" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-4 py-2 font-bold">
              NAAC A+
            </Badge>
          </div>
        </div>
      </div>
      <Separator className="bg-red-600" />
    </header>
  );
};

export default Header;
