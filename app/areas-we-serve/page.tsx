export default function AreasWeServe() {
  const areas = [
    { name: "Aiken, SC", desc: "Full service coverage including water damage, carpet cleaning, and air duct cleaning throughout Aiken and surrounding communities." },
    { name: "Augusta, GA", desc: "Serving Augusta and the greater CSRA with rapid 24/7 response for water restoration and professional cleaning services." },
    { name: "Columbia, SC", desc: "Expert cleaning and restoration for homes and businesses in Columbia and the Midlands region." },
    { name: "North Augusta", desc: "Local crews ready to handle water emergencies and deep cleaning needs in North Augusta." },
    { name: "Evans, GA", desc: "Complete restoration and cleaning services for Evans residents and property managers." },
    { name: "Graniteville, SC", desc: "Fast response for flood damage, mold, and air quality services in Graniteville." },
    { name: "Charlotte, NC", desc: "Expanded coverage into Charlotte and surrounding areas for select restoration projects." },
  ];

  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 py-14 border-b">
        <p className="text-sm tracking-[2px] text-[#0A4D68] font-medium">CSRA &amp; Beyond</p>
        <h1 className="text-5xl font-semibold tracking-tighter">Areas We Serve</h1>
        <p className="mt-3 max-w-lg text-xl text-gray-600">
          Advanced Cleaning &amp; Restoration provides professional services in Aiken SC, Augusta GA, Columbia SC and surrounding communities.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="border-l-4 border-[#0A4D68] pl-6">
              <h3 className="font-semibold text-2xl tracking-tight">{area.name}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-zinc-50 rounded-2xl text-sm text-gray-600">
          <strong>Note:</strong> We are a locally-based team serving the Central Savannah River Area (CSRA). 
          If your location isn’t listed, give us a call — we’re often able to help nearby communities.
        </div>
      </div>

      <div className="bg-white border-t py-12">
        <div className="max-w-md mx-auto px-6 text-center">
          <a href="tel:8032334408" className="text-3xl font-semibold tracking-tight hover:underline">
            (803) 233-4408
          </a>
          <p className="text-sm mt-1 text-gray-500">Call us 24/7 for emergency service</p>
        </div>
      </div>
    </div>
  );
}
