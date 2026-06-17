import Link from 'next/link';

const services = [
  {
    title: "Water Damage Restoration",
    description: "Our water damage restoration services include water extraction, drying, and dehumidification to prevent mold growth and further damage to your property. We use the latest equipment and techniques to ensure the best results.",
    details: "24/7 emergency response for flooding, burst pipes, roof leaks, and appliance failures."
  },
  {
    title: "Mold Remediation",
    description: "Our mold remediation services include identifying and treating mold, preventing future growth, and restoring your property to a healthy environment. We use eco-friendly and safe methods.",
    details: "Inspection, containment, removal, and prevention strategies."
  },
  {
    title: "Carpet & Upholstery Cleaning",
    description: "Refresh your home with our carpet and upholstery cleaning services. Enjoy renewed comfort and cleanliness, free from dust, allergens, and stains.",
    details: "Hot water extraction, stain treatment, pet odor removal, and fabric protection."
  },
  {
    title: "Air Duct Cleaning",
    description: "Breathe easier with our home air duct cleaning services. Enjoy improved indoor air quality, reduced allergens, and enhanced HVAC efficiency.",
    details: "Removes dust, mold, debris, and contaminants from your ductwork."
  },
  {
    title: "Odor Removal",
    description: "Freshen up your space with our odor removal services. Say goodbye to lingering scents and hello to freshness.",
    details: "Effective treatment for smoke, pet, mold, and general household odors."
  },
  {
    title: "Car Detailing",
    description: "Revive your ride with our interior car cleaning services. Enjoy a fresh, spotless interior without leaving your home.",
    details: "Full interior detailing, stain removal, and odor elimination for vehicles."
  },
];

export default function ServicesWeOffer() {
  return (
    <div>
      <div className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <p className="uppercase tracking-[2px] text-sm text-[#0A4D68] font-medium">Professional Services</p>
          <h1 className="text-5xl font-semibold tracking-tighter mt-2">Services We Offer</h1>
          <p className="mt-4 max-w-xl text-xl text-gray-600">
            Advanced Cleaning Tech provides expert carpet, upholstery, air duct, water restoration, and mold remediation services.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {services.map((service, index) => (
          <div key={index} className="grid md:grid-cols-5 gap-x-12 gap-y-4">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold tracking-tight">{service.title}</h2>
            </div>
            <div className="md:col-span-3 text-gray-700 space-y-4 text-[15px]">
              <p>{service.description}</p>
              <p className="text-gray-500">{service.details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-50 py-16 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">Need help right now?</h3>
          <p className="mt-3 text-gray-600">We respond to water damage and mold emergencies 24 hours a day.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="tel:8032334408" className="rounded-full bg-[#0A4D68] text-white px-8 h-12 inline-flex items-center font-semibold">Call (803) 233-4408</a>
            <Link href="/contact-us" className="rounded-full border px-8 h-12 inline-flex items-center font-semibold hover:bg-white">Request Estimate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
