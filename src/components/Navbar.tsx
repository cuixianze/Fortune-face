import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SmileIcon } from './icons/SmileIcon';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-amber-400/90 to-yellow-400/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SmileIcon className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">부자가될관상</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 text-white/90 font-medium">
            <a href="#" className="hover:text-white transition-colors">홈</a>
            <a href="#" className="hover:text-white transition-colors">서비스 소개</a>
            <a href="#" className="hover:text-white transition-colors">문의하기</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col gap-2 text-white/90 font-medium">
              <a href="#" className="hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg">홈</a>
              <a href="#" className="hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg">서비스 소개</a>
              <a href="#" className="hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg">문의하기</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}