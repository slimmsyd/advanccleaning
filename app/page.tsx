import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative bg-[#0A4D68] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="uppercase tracking-[3px] text-sm mb-4 text-white/70">24/7 Emergency Service</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-6">
            Water Damage Restoration &amp;<br />Cleaning Experts
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-4">Aiken • Augusta • Columbia</p>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10">
            Carpet Cleaning, Air Duct Cleaning, Upholstery Cleaning, Water &amp; Restoration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8032334408"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#0A4D68] px-8 h-14 text-lg font-semibold hover:bg-white/90 transition"
            >
              Give Us a Call
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 hover:bg-white/10 px-8 h-14 text-lg font-semibold transition"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[2px] text-xs font-semibold text-[#0A4D68]">WHY CHOOSE ADVANCED CLEANING TECH?</div>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">We’re more than a cleaning company —<br />we’re a local team that treats every home like our own.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <div className="space-y-4 text-gray-700">
            <p className="flex gap-3"><span className="mt-1.5 block h-2 w-2 rounded-full bg-[#0A4D68]" />Family-owned and operated across <strong>Aiken &amp; Augusta</strong></p>
            <p className="flex gap-3"><span className="mt-1.5 block h-2 w-2 rounded-full bg-[#0A4D68]" /><strong>97+ 5-Star Google Reviews</strong> from homeowners and business owners</p>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex gap-3"><span className="mt-1.5 block h-2 w-2 rounded-full bg-[#0A4D68]" />Free estimates and direct insurance coordination</p>
            <p className="flex gap-3"><span className="mt-1.5 block h-2 w-2 rounded-full bg-[#0A4D68]" />Locally based crews, not out-of-town subcontractors</p>
          </div>
        </div>
      </section>

      {/* Serving the CSRA */}
      <section className="bg-zinc-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight mb-3">Proudly Serving the CSRA</h2>
          <p className="text-center text-gray-600 mb-10">Professional water damage restoration and cleaning services in:</p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg font-medium text-center">
            {['Aiken SC', 'Augusta GA', 'North Augusta', 'Graniteville', 'Evans', 'Columbia SC', 'Charlotte NC'].map(area => (
              <span key={area} className="px-1">{area}</span>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            [Google Map placeholder — embed locations here]
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Emergency Water Damage Repair & Mold Remediation", desc: "24/7 water extraction, drying, and mold restoration. We stop water damage and restore your property quickly." },
            { title: "Carpet & Upholstery Cleaning", desc: "Deep cleaning that removes stains, allergens, and odors from carpets, rugs, and furniture." },
            { title: "Air Duct Cleaning", desc: "Improve indoor air quality and HVAC efficiency by removing dust, mold, and debris from your ducts." },
            { title: "Odor Removal & Car Detailing", desc: "Professional odor elimination and complete interior car cleaning services." },
          ].map((service, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:border-[#0A4D68]/30 transition">
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services-we-offer" className="text-[#0A4D68] font-semibold inline-flex items-center hover:underline">
            View all services we offer →
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="bg-white border-t border-b py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-6">About Advanced Cleaning Tech</h2>
          <div className="prose prose-gray max-w-none text-[15px] leading-relaxed text-gray-700">
            <p>
              Across the sprawling landscapes of Augusta, GA, Aiken, SC, Columbia, SC, Charlotte, NC, and their surrounding areas, 
              our team stands ready to deliver unmatched cleaning and restoration services. From carpet cleaning and air duct cleaning 
              to banishing mold and water damage restoration, we handle every task with the highest standards of quality.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/learn-more" className="text-sm font-medium underline">Learn more about us →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { quote: "Best carpet cleaning I’ve ever had. They removed stains I thought were permanent!", name: "Monica T." },
            { quote: "They handled water damage at my office in Augusta fast and professionally.", name: "Roy W." },
          ].map((t, index) => (
            <div key={index} className="bg-zinc-50 border border-gray-200 p-8 rounded-2xl">
              <p className="text-lg italic">“{t.quote}”</p>
              <p className="mt-6 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A4D68] py-16 text-white text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to restore your home or business?</h2>
        <p className="mb-8 text-white/80">Call now or request your free estimate online.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8032334408" className="rounded-full bg-white text-[#0A4D68] font-semibold px-8 h-14 inline-flex items-center justify-center">Call (803) 233-4408</a>
          <Link href="/contact-us" className="rounded-full border border-white/60 hover:bg-white/10 px-8 h-14 inline-flex items-center justify-center font-semibold">Get Free Estimate</Link>
        </div>
      </section>
    </div>
  );
}
