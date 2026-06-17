import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-y-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold">AC</span>
            </div>
            <span className="text-white font-semibold">Advanced Cleaning Tech</span>
          </div>
          <p className="text-sm">
            Family-owned water damage restoration, carpet cleaning, air duct cleaning, and mold remediation experts serving the CSRA.
          </p>
        </div>

        <div>
          <div className="text-white font-semibold mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services-we-offer" className="hover:text-white">Water Damage Restoration</Link></li>
            <li><Link href="/services-we-offer" className="hover:text-white">Mold Remediation</Link></li>
            <li><Link href="/services-we-offer" className="hover:text-white">Carpet &amp; Upholstery Cleaning</Link></li>
            <li><Link href="/services-we-offer" className="hover:text-white">Air Duct Cleaning</Link></li>
            <li><Link href="/services-we-offer" className="hover:text-white">Odor Removal</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/learn-more" className="hover:text-white">About Us</Link></li>
            <li><Link href="/areas-we-serve" className="hover:text-white">Areas We Serve</Link></li>
            <li><Link href="/contact-us" className="hover:text-white">Contact</Link></li>
            <li><a href="tel:8032334408" className="hover:text-white">24/7 Emergency Line</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-4">Contact</div>
          <a href="tel:8032334408" className="block text-2xl font-semibold text-white hover:underline mb-1">
            (803) 233-4408
          </a>
          <p className="text-sm mb-4">Available 24 Hours</p>

          <div className="text-sm">
            <p>Aiken, SC • Augusta, GA • Columbia, SC</p>
            <p className="mt-1">North Augusta • Evans • Graniteville • Charlotte, NC</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Advanced Cleaning Tech. All rights reserved. 
        Serving homeowners and businesses across the CSRA.
      </div>
    </footer>
  );
}
