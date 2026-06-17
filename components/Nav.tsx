'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services-we-offer', label: 'Services' },
  { href: '/areas-we-serve', label: 'Areas We Serve' },
  { href: '/learn-more', label: 'Learn More' },
  { href: '/contact-us', label: 'Contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[#0A4D68] flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-tighter">AC</span>
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tight">Advanced Cleaning Tech</div>
              <div className="text-[10px] text-gray-500 -mt-1">Aiken • Augusta • Columbia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#0A4D68] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8032334408"
              className="ml-2 inline-flex items-center rounded-full bg-[#0A4D68] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#083a52] transition"
            >
              (803) 233-4408
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#0A4D68]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8032334408"
              className="inline-flex w-fit items-center rounded-full bg-[#0A4D68] px-5 py-2 text-sm font-semibold text-white"
            >
              Call (803) 233-4408
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
