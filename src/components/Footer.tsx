import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-purple-900 text-purple-100 relative overflow-hidden">
      {/* Animated bubbles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute rounded-full bg-white/10 animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`
      }} />)}
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        {/* Social Media */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-purple-800/50 rounded-full">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-purple-800/50 rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-purple-800/50 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-purple-800/50 rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center">
          <p className="text-purple-300">
            © {new Date().getFullYear()} Spoiled Vine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};