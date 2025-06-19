"use client"

import React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const Navbar: React.FC = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/people', label: 'People' },
    { href: '/activities', label: 'Activities' },
    { href: '/examinations', label: 'Examinations' },
    { href: '/tnp', label: 'T&P' },
    { href: '/results', label: 'Results' }
  ];

  return (
    <nav className="bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="flex space-x-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
