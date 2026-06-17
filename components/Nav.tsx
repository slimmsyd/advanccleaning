'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Areas We Serve' },
  { href: '#about', label: 'Learn More' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => {
      setHasScrolled(window.scrollY > 72);
    };

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrolledState);
    };
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // account for nav height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? 'border-b border-[#dfe8e2] bg-white/94 text-[#18221c] shadow-[0_18px_44px_rgba(12,31,20,0.08)] backdrop-blur-md'
          : 'text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className={`flex items-center gap-3 rounded-full border bg-white px-4 py-2 ring-1 ring-black/5 transition hover:-translate-y-0.5 ${
              hasScrolled
                ? 'border-[#e1ebe4] shadow-[0_12px_34px_rgba(12,31,20,0.12)] hover:shadow-[0_16px_44px_rgba(12,31,20,0.16)]'
                : 'border-white/65 shadow-[0_18px_54px_rgba(2,12,7,0.22)] hover:shadow-[0_24px_64px_rgba(2,12,7,0.28)]'
            }`}
          >
            <Image
              src="/images/advanced-cleaning-tech-logo.webp"
              alt="Advanced Cleaning Tech"
              width={188}
              height={48}
              priority
              className="h-8 w-auto object-contain sm:h-9"
            />
            <div className="sr-only">
              <div>Advanced Cleaning Tech</div>
              <div>Aiken, Augusta, Columbia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-[0.16em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  hasScrolled
                    ? 'text-[#334238] hover:text-[#017C40]'
                    : 'text-white/84 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] hover:text-white'
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8032334408"
              className={`ml-2 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-normal shadow-[0_16px_42px_rgba(0,0,0,0.18)] backdrop-blur-md transition normal-case ${
                hasScrolled
                  ? 'border-[#017C40] bg-[#017C40] text-white hover:bg-[#006934]'
                  : 'border-white/35 bg-white/14 text-white hover:bg-white/24'
              }`}
            >
              (803) 233-4408
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border bg-white/92 text-[#017C40] shadow-[0_16px_42px_rgba(0,0,0,0.18)] transition md:hidden ${
              hasScrolled ? 'border-[#dbe5dd]' : 'border-white/55'
            }`}
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
          <div className="md:hidden pb-5">
            <div className="rounded-2xl border border-[#e7ece8] bg-white p-4 shadow-[0_24px_70px_rgba(12,31,20,0.16)]">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#18221c] transition hover:bg-[#f1f6f2] hover:text-[#017C40]"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid gap-3 border-t border-[#e7ece8] pt-4">
                <a
                  href="tel:8032334408"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#017C40] px-5 text-sm font-semibold text-white transition hover:bg-[#006934]"
                >
                  Call (803) 233-4408
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#dbe5dd] px-5 text-sm font-semibold text-[#017C40] transition hover:border-[#017C40] hover:bg-[#f1f6f2]"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
