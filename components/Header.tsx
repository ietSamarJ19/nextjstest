'use client'
import React, { useState } from 'react';
import { Search, Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import Navbar from './Navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: ['History', 'Vision & Mission', 'Leadership', 'Infrastructure']
    },
    { 
      name: 'Academics', 
      href: '/academics',
      dropdown: ['Programs', 'Departments', 'Faculty', 'Curriculum']
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      dropdown: ['Requirements', 'Application', 'Fees', 'Scholarships']
    },
    { name: 'Hostel', href: '/hostel' },
    { name: 'Contact Us', href: '/contact' },
    { name: "Fresher's Corner", href: '/freshers' }
  ];

  const topBarItems = [
    'Placement',
    'Courses',
    'Notices',
    'Alumni'
  ];

  return (
    <header className="w-full bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              iet@ietdavv.edu.in
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              +91 99999 99999
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {topBarItems.map((item, index) => (
              <Button key={index} variant="link" className="text-white hover:text-blue-300 p-0 h-auto">
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <img src="logo.png" alt="#" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Institute of Engineering and Technology</h1>
              <p className="text-sm text-gray-600">Devi Ahilya Vishwavidyalaya</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 z-10" />
            <Input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 bg-gray-100 border-0 rounded-full"
            />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="w-full justify-between">
                            {item.name}
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-full">
                          {item.dropdown.map((subItem, subIndex) => (
                            <DropdownMenuItem key={subIndex}>
                              {subItem}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button variant="ghost" className="w-full justify-start">
                        {item.name}
                      </Button>
                    )}
                  </div>
                ))}
                
                {/* Mobile Search */}
                <div className="relative mt-4">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <Input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-10"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <Badge variant="secondary" className="bg-white text-red-600 mr-4 font-semibold">
              Announcements
            </Badge>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-sm">
                Lorem dolor: Autem corporis quidem suscipit voluptatum nesciunt! Sequi dolores quisquam nemo quam sint et, neque dicta sunt illum maxime maiores sed explicabo nobis non! Nam.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <Navbar/>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;