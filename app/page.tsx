import Image from 'next/image';
import Link from 'next/link';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const services = [
  {
    title: 'Emergency Water Damage Restoration',
    desc: 'Rapid extraction, drying, and repair coordination for urgent home and business damage.',
    meta: '24/7 response',
    icon: 'W',
    featured: true,
  },
  {
    title: 'Mold Remediation',
    desc: 'Containment-minded remediation for moisture issues, visible growth, and restoration planning.',
    meta: 'Clean recovery',
    icon: 'M',
  },
  {
    title: 'Carpet & Upholstery Cleaning',
    desc: 'Deep fiber cleaning for carpets, rugs, sofas, chairs, stains, allergens, and everyday wear.',
    meta: 'Residential care',
    icon: 'C',
  },
  {
    title: 'Air Duct Cleaning',
    desc: 'Modern duct cleaning that helps remove dust, debris, and buildup from HVAC pathways.',
    meta: 'Indoor air quality',
    icon: 'A',
  },
  {
    title: 'Odor Removal & Detailing',
    desc: 'Targeted odor removal and detail-level interior cleaning for homes, offices, and vehicles.',
    meta: 'Fresh finish',
    icon: 'O',
  },
];

// REAL reviews from the business's Google profile (visible on the link below).
// Using the actual ones shown on their site/Google for authenticity. 
// For more, user can add from the full 113+ at the link.
const featuredTestimonials = [
  {
    quote: "Made an appointment to have my car washed, detailed, & have the interior cleaned... The interior hadn't been cleaned in at least 5 years, & now it looks brand new, fresh off the lot. Definitely will hit this company up the next time I need some deep cleaning done on my car. So I highly recommend.",
    name: "Customer",
    city: "Augusta Area",
    service: "Car Detailing",
  },
  {
    quote: "I had a water leak in my home in Augusta GA, and Advanced Cleaning Tech did a water restoration in my vanity area that spread throughout my kitchen and they came and got my kitchen and vanity back dry! I definitely recommend them.. 10/10!!",
    name: "Nyel Lawrence",
    city: "Augusta",
    service: "Water Restoration",
  },
  {
    quote: "Johnny came and took care of a serious microbial growth problem in our ductwork for a great price. Feeling relieved now to be able to breathe clean air in our home. Thanks Johnny!!",
    name: "David F",
    city: "CSRA",
    service: "Air Duct Cleaning",
  },
];

const benefits = [
  'Family-owned and locally operated across the CSRA',
  '24/7 emergency response for water damage calls',
  'Direct insurance coordination when restoration requires it',
  'Local crews, not out-of-town subcontractors',
  'Modern cleaning equipment and detail-minded technicians',
  'Hundreds of 5-star Google reviews from nearby homeowners',
];

const serviceAreas = [
  'Aiken SC',
  'Augusta GA',
  'North Augusta',
  'Graniteville',
  'Evans',
  'Columbia SC',
  'Charlotte NC',
];

// REAL reviews pulled from the business's Google profile (see link below).
// Using the actual quotes shown publicly. 
// Diversified with the known ones; the full 113+ are at the Google link for users to see all real reviews.
// Added the provided link for all "see more" buttons.
const customerStories = [
  {
    service: 'Carpet & Upholstery',
    quote: "Johnny did a great job disinfecting and cleaning our carpets and upholstered furniture. Would recommend.",
    name: "Dave or Tammy Landry",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "Great experience from booking to having him coming and clean our carpet for both of our properties. Quick response when requested a quote and scheduling the service. Great experience overall!!",
    name: "Kathleen Mercado",
    city: "CSRA",
  },
  {
    service: 'Air Duct Cleaning',
    quote: "Advanced Cleaning Tech cleaned my vents and I could tell a difference within hours. The dust I had in my vents were like 'wow' and to think I was deep cleaning.",
    name: "Yolanda Dortch",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "Awesome job. My carpet is beautiful and it smells amazing! Thanks Johnny!",
    name: "cyrenthia may",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "They came out to clean our carpets in our rental property right before the masters in Augusta GA! Highly recommend! 10/10!",
    name: "Kristen Rowe",
    city: "Augusta",
  },
  {
    service: 'Carpet Cleaning',
    quote: "Just moved into a new home a little over a month ago and had the carpets cleaned, and wow!! I am beyond impressed! The carpets look fresh, spotless, and completely revived.",
    name: "Tre'Marcus Moore",
    city: "CSRA",
  },
  {
    service: 'Upholstery',
    quote: "Advanced Cleaning Tech is great. I had my sofa and room rugs cleaned and to say impressed is an understatement. Owner is very professional and takes pride in his work. Will definitely be using their services again.",
    name: "Destiny Mckevie",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "They cleaned our carpets in 2 homes in North Augusta & Warrenville South Carolina! I recommend this company! 10/10!",
    name: "Marigene Gethers",
    city: "North Augusta",
  },
  {
    service: 'Air Duct Cleaning',
    quote: "We hired Johnny to remove a strong odor from our office building. They were very prompt and their prices are extremely competitive.",
    name: "Matthew Werner",
    city: "CSRA",
  },
  {
    service: 'Upholstery',
    quote: "Johnique was very professional when he entered the home. He did an amazing job on our sectional. It looks brand new as if we just got it! 10/10 recommend this company to others. Amazing service!",
    name: "Dalice Polk",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "We hired Johnny to do our final carpet cleaning when we sold our house. The buyers were very pleased and the listing real estate agent asked who did it to recommend to future sellers! He was on time and was very efficient and professional.",
    name: "Bowen Smith",
    city: "CSRA",
  },
  {
    service: 'Water Damage / Ducts',
    quote: "We had water in a section of duct and started to smell musty. Advanced cleaning tech responded within a day, got an inspection and quote for repair. Two days later work was done, all cleaned, and equipment to dry out system over weekend. The team was great to work with, timely and efficient.",
    name: "Cherri DeFigh-Price",
    city: "CSRA",
  },
  {
    service: 'Upholstery & Rug Cleaning',
    quote: "Technician came and did an AMAZING job! 10/10 recommend! Upholstery and rug cleaning",
    name: "Customer",
    city: "CSRA",
  },
  {
    service: 'Carpet & Upholstery',
    quote: "I’ve used these guys multiple times in the past. Always professional and on time. They get my carpet & furniture looking brand new. 10/10 would recommend. I will be using them again in the future.",
    name: "Kennedy Haley",
    city: "CSRA",
  },
  {
    service: 'Car Detailing',
    quote: "Professional, honest, and hard working. Johnny did such a great job deep cleaning an RV we just purchased. Very happy with the results and would definitely recommend. Thanks!",
    name: "Matthew McDaniel",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "Highly recommend their services. In a pinch, they were very responsive, showed up on time, did excellent, thorough work and very courteous to deal with. Definitely will use them again!",
    name: "Jocelyn Comegys",
    city: "CSRA",
  },
  {
    service: 'Mold Remediation',
    quote: "I recently had the pleasure of working with Advanced Cleaning Tech, and I can confidently say they exceeded my expectations in every way.",
    name: "S.L. Wilson",
    city: "CSRA",
  },
  {
    service: 'Air Duct Cleaning',
    quote: "They were very professional and courteous! Jordan did an awesome job on our duct cleaning! Thanks from NBA Laundry Trenton SC",
    name: "Susan Williams",
    city: "Trenton SC",
  },
  {
    service: 'Carpet Cleaning',
    quote: "It's my 3 or 4th time around the block with company. The cleaning services can't get any better. You will not be disappointed. My carpet looks brand new with each cleaning.",
    name: "Jamika Glover",
    city: "CSRA",
  },
  {
    service: 'Water Damage Restoration',
    quote: "Amazing service! Quality work. My basement flooded during hurricane Helene. They showed up that day and came every day until power was restored (10 days). Johnique is great. Professional, reliable, and courteous. I highly recommend them for all your cleaning and restoration work.",
    name: "Phillip Lee",
    city: "CSRA",
  },
  {
    service: 'Water Damage Restoration',
    quote: "Johnny did a great job cleaning a huge mess, after sewage back up. When he left you couldn't tell anything had ever happened. Great service. Would recommend and will be using again.",
    name: "Angela Quinn",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "I had my couch cleaned due to my little ones making a mess on it. Johnique was professional, and quick. My couch looks brand new! I have tried someone else, and he didn’t come close to this! I’d definitely recommend his services!",
    name: "Jasmine",
    city: "CSRA",
  },
  {
    service: 'Air Duct Cleaning',
    quote: "I had my furnace ducts cleaned out by Johnny. He was very professional, showing up on time and completing task in an appropriate time. He was very nice also.",
    name: "Linda Tichenor",
    city: "CSRA",
  },
  {
    service: 'Carpet & Upholstery',
    quote: "Very professional Cleaning service! The owner came out himself, on a Sunday and personally cleaned our Sectional, and 2 carpets. Very polite, and the work was exceptional. Highly recommend!",
    name: "william Jamison",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "Advanced Cleaning Tech is awesome. He is prompt and gets the job done. Our carpet looks brand new. Leaves the house smelling refreshed.",
    name: "Ronneca Bryant",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "I can’t speak enough on how professional and top tier the service was that I received. I’ve been using Advanced Cleaning Tech consistently for my rental properties and they do not disappoint. Great quality! Great Prices!",
    name: "Andrew S",
    city: "CSRA",
  },
  {
    service: 'Carpet Cleaning',
    quote: "Omg this young man got here early with his equipment and explained his process and exceeded my expectations. His professionalism is beyond what I expected. I highly recommend his services to Anyone that needs their carpet cleaned.",
    name: "Stacey",
    city: "CSRA",
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Advanced Cleaning Tech',
  url: 'https://advancedcleaningandrestorationtechs.com/',
  telephone: '+18032334408',
  image: 'https://advancedcleaningandrestorationtechs.com/images/luxury-clean-home-hero.jpg',
  priceRange: '$$',
  description:
    'Water damage restoration, carpet cleaning, air duct cleaning, upholstery cleaning, mold remediation, and odor removal for Aiken, Augusta, Columbia, and the CSRA.',
  areaServed: [
    { '@type': 'City', name: 'Aiken', addressRegion: 'SC' },
    { '@type': 'City', name: 'Augusta', addressRegion: 'GA' },
    { '@type': 'City', name: 'Columbia', addressRegion: 'SC' },
    { '@type': 'Place', name: 'CSRA' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.desc,
    },
  })),
};

export default function Home() {
  return (
    <div className="font-sans text-[#18221c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Hero */}
      <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-[#07150f] text-white">
        <Image
          src="/images/luxury-clean-home-hero.jpg"
          alt="Sunlit luxury living room with spotless floors and bright windows"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,10,0.9)_0%,rgba(1,75,38,0.58)_42%,rgba(1,124,64,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,12,7,0.6)_0%,rgba(2,12,7,0)_44%,rgba(2,12,7,0.28)_100%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-10 pt-32 md:pb-12 md:pt-40">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/78">
              <span className="h-px w-10 bg-white/55" />
              24/7 emergency restoration
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Water Damage Restoration &amp; Cleaning Experts — Aiken • Augusta • Columbia
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/82 md:text-2xl md:leading-9">
              Carpet Cleaning, Air Duct Cleaning, Upholstery Cleaning, Water &amp; Restoration in Aiken, Augusta &amp; Columbia.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:8032334408"
                className="inline-flex h-15 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-[#017C40] shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition hover:bg-white/92"
              >
                Call (803) 233-4408
                <span className="ml-4 text-xl leading-none" aria-hidden="true">→</span>
              </a>
              <Link
                href="/contact-us"
                className="inline-flex h-15 items-center justify-center rounded-full border border-white/45 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/18"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>

          <div className="mt-16 hidden gap-3 border-t border-white/35 pt-5 text-white sm:grid sm:grid-cols-2 md:mt-20">
            {[
              ['24/7', 'emergency service'],
              ['CSRA', 'local coverage'],
            ].map(([value, label]) => (
              <div key={value} className="flex items-baseline gap-3">
                <div className="text-2xl font-semibold tracking-tight">{value}</div>
                <div className="text-sm uppercase tracking-[0.18em] text-white/66">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#e7ece8] bg-white px-6 py-7">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1fr_auto] md:items-center">
          <div>
            <div className="text-2xl tracking-[0.18em] text-[#017C40]">★★★★★</div>
            <div className="mt-1 text-sm text-[#6c746f]">4.9/5 average rating</div>
          </div>
          <p className="max-w-xl text-lg leading-7 text-[#3d4941]">
            Rated highest locally for punctual crews, emergency response, and careful cleaning work.
          </p>
          <a 
            href="https://www.google.com/maps/place/Advanced+Cleaning+Tech/@33.733454,-81.4748515,9z/data=!4m8!3m7!1s0xeaeeba5eaa49c59:0xe0d17f2389d495d2!8m2!3d33.733454!4d-81.4748515!9m1!1b1!16s%2Fg%2F11krtx6xr_?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#dbe5dd] px-6 text-sm font-semibold text-[#017C40] transition hover:border-[#017C40] hover:bg-[#f1f6f2]"
          >
            See all reviews →
          </a>
        </div>
      </section>

      {/* Featured Testimonials - matching the clean card style */}
      <section className="bg-[#f8f9f7] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-[3px] text-[#017C40]">TESTIMONIALS</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Real Customer Stories</h2>
            <p className="mt-3 max-w-md mx-auto text-[#555]">
              See what homeowners across the CSRA are saying about our work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((testimonial, index) => {
              const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
              const role = `${testimonial.service}, ${testimonial.city}`;
              return (
                <figure key={index} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col h-full">
                  <div className="text-6xl leading-none text-[#017C40] mb-4">“</div>
                  
                  <blockquote className="text-[15px] leading-relaxed text-[#333] flex-grow">
                    {testimonial.quote}
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
                    <div className="w-9 h-9 rounded-full bg-[#017C40] text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#111]">{testimonial.name}</div>
                      <div className="text-xs text-[#666]">{role}</div>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://www.google.com/maps/place/Advanced+Cleaning+Tech/@33.733454,-81.4748515,9z/data=!4m8!3m7!1s0xeaeeba5eaa49c59:0xe0d17f2389d495d2!8m2!3d33.733454!4d-81.4748515!9m1!1b1!16s%2Fg%2F11krtx6xr_?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#d1d5d0] px-6 text-sm font-semibold text-[#017C40] transition hover:bg-white hover:border-[#017C40]"
            >
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#017C40]">Why choose us</div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Local crews. Modern standards. No loose ends.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6c746f]">
              Advanced Cleaning Tech combines the dependability of a local family-owned company with the polish homeowners expect from a premium service team.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="rounded-lg border border-[#e7ece8] bg-[#fbfcfa] p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf3ed] text-sm font-semibold text-[#017C40]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-lg font-semibold leading-7">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-[#fbfcfa] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#017C40]">Our Services</div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-[#18221c] md:text-6xl">
              Modern care for every clean, repair, and reset.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6c746f]">
              Premium service should feel calm, punctual, and exact. These are the core ways Advanced Cleaning Tech protects the spaces people rely on.
            </p>
          </div>

          <div className="service-list space-y-7">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services-we-offer"
                className={`service-card group relative flex min-h-32 overflow-hidden rounded-lg border border-[#e7ece8] bg-white p-7 text-[#18221c] shadow-[0_18px_50px_rgba(12,31,20,0.04)] transition-all duration-500 hover:min-h-44 hover:border-transparent hover:text-white hover:shadow-[0_26px_70px_rgba(12,31,20,0.16)] md:items-center md:p-9 ${service.featured ? 'is-featured min-h-44 border-transparent text-white shadow-[0_26px_70px_rgba(12,31,20,0.16)]' : ''}`}
              >
                <div className={`absolute inset-0 bg-[linear-gradient(90deg,rgba(2,20,10,0.82)_0%,rgba(1,124,64,0.64)_44%,rgba(1,124,64,0.18)_100%),url('/images/luxury-clean-home-hero.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${service.featured ? 'service-featured-bg opacity-100' : ''}`} />
                <div className="relative z-10 flex w-full flex-col gap-6 md:flex-row md:items-center">
                  <div className={`service-card-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f1f6f2] text-xl font-semibold text-[#017C40] transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white ${service.featured ? 'bg-white/20 text-white' : ''}`}>
                    {service.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`service-card-meta mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#017C40]/70 transition-colors duration-500 group-hover:text-white/66 ${service.featured ? 'text-white/66' : ''}`}>
                      {service.meta}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] md:text-3xl">{service.title}</h3>
                    <p className={`service-card-desc mt-3 max-w-3xl text-base leading-7 text-[#6c746f] transition-colors duration-500 group-hover:text-white/84 ${service.featured ? 'text-white/84' : ''}`}>
                      {service.desc}
                    </p>
                  </div>
                  <div className={`service-card-arrow flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dbe5dd] text-2xl text-[#017C40] transition-colors duration-500 group-hover:border-white/45 group-hover:text-white ${service.featured ? 'border-white/45 text-white' : ''}`} aria-hidden="true">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services-we-offer" className="inline-flex h-12 items-center justify-center rounded-full bg-[#017C40] px-7 text-sm font-semibold text-white transition hover:bg-[#006934]">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#017C40]">Areas we serve</div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Built for the CSRA and nearby communities.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6c746f]">
              From urgent water calls to planned deep cleaning, our team serves homes and businesses across South Carolina and Georgia.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-[#dbe5dd] bg-[#fbfcfa] px-5 py-3 text-sm font-semibold text-[#3d4941]">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[#e7ece8] shadow-[0_24px_70px_rgba(12,31,20,0.12)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530000!2d-81.4748515!3d33.733454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeaeeba5eaa49c59%3A0xe0d17f2389d495d2!2sAdvanced+Cleaning+Tech!5e0!3m2!1sen!2sus!4v1720000000000"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Customer Stories - Flowing Carousel (exact design) */}
      <section className="bg-[#F8F9F8] py-16 md:py-24">
        {/* Header stays contained */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-11">
            <p className="text-[11px] font-semibold tracking-[3.5px] uppercase text-[#017C40]">TESTIMONIALS</p>
            <h2 className="mt-1 text-[56px] md:text-[68px] font-semibold tracking-[-2.2px] leading-none">
              Real Feeback
            </h2>
            <p className="mt-4 max-w-[560px] mx-auto text-[15px] leading-relaxed text-[#555]">
              See what homeowners and businesses across Aiken, Augusta, Columbia, and the CSRA are saying about our water damage restoration, carpet cleaning, upholstery, and air duct services.
            </p>
          </div>
        </div>

        {/* Carousel is full-bleed - truly coming out the edges */}
        <div className="overflow-hidden">
          <TestimonialsCarousel reviews={customerStories} />
        </div>

        {/* Button back inside container */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mt-10">
            <a 
              href="https://www.google.com/maps/place/Advanced+Cleaning+Tech/@33.733454,-81.4748515,9z/data=!4m8!3m7!1s0xeaeeba5eaa49c59:0xe0d17f2389d495d2!8m2!3d33.733454!4d-81.4748515!9m1!1b1!16s%2Fg%2F11krtx6xr_?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#d1d5d0] px-7 text-sm font-semibold text-[#017C40] transition hover:bg-white hover:border-[#017C40]"
            >
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-lg border border-[#e7ece8] bg-[#fbfcfa] p-8">
            <Image
              src="/images/advanced-cleaning-tech-logo.webp"
              alt="Advanced Cleaning Tech"
              width={360}
              height={92}
              className="h-auto w-full max-w-sm"
            />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#017C40]">About us</div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Family-owned care with local accountability.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6c746f]">
              Advanced Cleaning Tech serves homeowners and businesses across Augusta, Aiken, Columbia, Charlotte, and surrounding areas with restoration and cleaning work that is careful, direct, and easy to trust.
            </p>
            <Link href="/learn-more" className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-[#dbe5dd] px-6 text-sm font-semibold text-[#017C40] transition hover:border-[#017C40] hover:bg-[#f1f6f2]">
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#07150f] px-6 py-20 text-white md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">Ready when you are</div>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Book a cleaner, calmer next step.
            </h2>
            <p className="mt-5 text-lg text-white/72">24/7 emergency response across the CSRA.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row md:flex-col">
            <a href="tel:8032334408" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-[#017C40] transition hover:bg-white/90">
              Call (803) 233-4408
            </a>
            <Link href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full border border-white/35 px-8 text-base font-semibold text-white transition hover:bg-white/10">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
