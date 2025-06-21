"use client"

import React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from './ui/button';


const Navbar: React.FC = () => {
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

  return (
    <nav className="bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:block py-3">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-blue-600 text-white data-[state=open]:bg-blue-600">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-48 p-2">
                            {item.dropdown.map((subItem, subIndex) => (
                              <NavigationMenuLink key={subIndex} asChild>
                                <Button
                                  variant="ghost" 
                                  className="w-full justify-start text-gray-800 hover:bg-gray-100"
                                >
                                  {subItem}
                                </Button>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Button 
                          variant="ghost" 
                          className="bg-transparent hover:bg-blue-600 text-white px-6"
                        >
                          {item.name}
                        </Button>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
