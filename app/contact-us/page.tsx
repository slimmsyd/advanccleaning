'use client';

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-semibold tracking-tighter">Contact Us</h1>
        <p className="mt-3 text-xl text-gray-600">
          Get a free estimate or call for 24/7 emergency service.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-5 gap-12">
        {/* Contact Form */}
        <div className="md:col-span-3">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! (This is a scaffold — connect to a real backend or service like Formspree/Resend later.)"); }}>
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input type="text" required className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:border-[#0A4D68]" placeholder="Your full name" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone</label>
                <input type="tel" required className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:border-[#0A4D68]" placeholder="(803) 555-1234" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input type="email" required className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:border-[#0A4D68]" placeholder="you@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Service Needed</label>
              <select className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:border-[#0A4D68]">
                <option>Water Damage Restoration</option>
                <option>Mold Remediation</option>
                <option>Carpet Cleaning</option>
                <option>Air Duct Cleaning</option>
                <option>Upholstery Cleaning</option>
                <option>Odor Removal</option>
                <option>Car Detailing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Message / Details</label>
              <textarea rows={5} className="w-full rounded-2xl border px-4 py-3 focus:outline-none focus:border-[#0A4D68]" placeholder="Tell us about your situation..."></textarea>
            </div>

            <button 
              type="submit"
              className="w-full md:w-auto rounded-full bg-[#0A4D68] hover:bg-[#083a52] px-10 py-3.5 text-white font-semibold transition"
            >
              Send Request
            </button>

            <p className="text-xs text-gray-500 pt-2">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 space-y-8 text-sm pt-2">
          <div>
            <div className="font-semibold mb-1 text-base">Call Us 24/7</div>
            <a href="tel:8032334408" className="text-3xl font-semibold tracking-tighter hover:underline text-[#0A4D68]">
              (803) 233-4408
            </a>
          </div>

          <div>
            <div className="font-semibold mb-1 text-base">Hours</div>
            <div className="text-gray-700">Open 24 Hours — Every Day</div>
            <div className="text-gray-500 mt-1">We respond to emergencies immediately.</div>
          </div>

          <div>
            <div className="font-semibold mb-1 text-base">Service Area</div>
            <div>Aiken SC • Augusta GA • Columbia SC<br />and surrounding communities</div>
          </div>

          <div className="pt-4 border-t text-gray-500 text-xs">
            Better yet, see us in person!<br />
            We proudly serve homeowners and businesses across the CSRA.
          </div>
        </div>
      </div>
    </div>
  );
}
