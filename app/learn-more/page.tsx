export default function LearnMore() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-5xl font-semibold tracking-tighter">About Advanced Cleaning Tech</h1>

      <div className="mt-8 prose prose-gray max-w-none text-[15px] leading-[1.75] text-gray-700">
        <p>
          Across the sprawling landscapes of Augusta, GA, Aiken, SC, Columbia, SC, Charlotte, NC, and their surrounding areas, 
          our team stands tall, ready to deliver unmatched cleaning and restoration services.
        </p>
        <p>
          With confidence born of years of expertise, we stride into every home, office, and space, knowing that our dedication 
          to excellence will shine through. From carpet cleaning in Augusta, GA, to banishing mold, water damage restoration in 
          Augusta, GA, and stubborn odors, we meticulously handle every task.
        </p>
        <p>
          Our services also include comprehensive air duct cleaning in Augusta, GA, and reviving upholstery with our upholstery 
          cleaning in Augusta, GA. Whether it’s restoring air ducts to peak efficiency, breathing new life into car interiors, 
          or tackling tile and grout, we leave no stone unturned.
        </p>
        <p>
          Our commitment to the highest standards of quality and customer satisfaction is unwavering; our determination to exceed 
          expectations is unmatched. Trust us to transform your spaces, elevate your surroundings, and leave you in awe of what’s possible.
        </p>
      </div>

      <div className="mt-12 border-t pt-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Why Homeowners &amp; Businesses Choose Us</h2>
        <ul className="space-y-3 text-lg">
          {[
            "Family-owned and locally operated",
            "Rapid 24/7 emergency response",
            "Certified technicians",
            "Direct insurance coordination",
            "Free estimates",
            "Hundreds of 5-star reviews"
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#0A4D68] mt-1">→</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 p-8 bg-[#0A4D68] text-white rounded-3xl">
        <div className="max-w-md">
          <div className="font-semibold">Ready to get started?</div>
          <p className="text-white/80 mt-1">Call us any time or request your free estimate today.</p>
          <a href="tel:8032334408" className="mt-6 inline-block rounded-full bg-white text-[#0A4D68] font-semibold px-8 py-3 hover:bg-white/90">
            (803) 233-4408
          </a>
        </div>
      </div>
    </div>
  );
}
