import React from "react";
import { Grape } from "lucide-react";
export const Header = () => {
  return <header className="fixed top-0 left-0 right-0 bg-purple-900/95 backdrop-blur-sm z-50 border-b border-purple-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Grape className="w-8 h-8 text-purple-300" />
              <div className="absolute -bottom-1 -right-1">
                <Grape className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">Spoiled Vine</span>
          </div>
          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a href="#about" className="text-purple-200 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-purple-200 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>;
};