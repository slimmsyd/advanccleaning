'use client';

import { FormEvent, useState } from 'react';

const serviceOptions = [
  'Water Damage Restoration',
  'Carpet Cleaning',
  'Air Duct Cleaning',
  'Upholstery Cleaning',
  'Mold Remediation',
  'Odor Removal',
  'Other',
];

export default function ContactEstimateForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form
      className="rounded-lg bg-white p-6 text-[#18221c] shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-8"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#017C40]">
          Contact us
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
          Request a free estimate
        </h3>
      </div>

      <div className="mt-6 grid gap-4">
        <div>
          <label className="text-sm font-semibold text-[#334238]" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            type="text"
            className="mt-2 h-12 w-full rounded-lg border border-[#dbe5dd] px-4 text-sm outline-none transition focus:border-[#017C40] focus:ring-4 focus:ring-[#017C40]/10"
            placeholder="Your full name"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-[#334238]" htmlFor="contact-phone">
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              required
              type="tel"
              className="mt-2 h-12 w-full rounded-lg border border-[#dbe5dd] px-4 text-sm outline-none transition focus:border-[#017C40] focus:ring-4 focus:ring-[#017C40]/10"
              placeholder="(803) 233-4408"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-[#334238]" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="mt-2 h-12 w-full rounded-lg border border-[#dbe5dd] px-4 text-sm outline-none transition focus:border-[#017C40] focus:ring-4 focus:ring-[#017C40]/10"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#334238]" htmlFor="contact-service">
            Service needed
          </label>
          <select
            id="contact-service"
            name="service"
            className="mt-2 h-12 w-full rounded-lg border border-[#dbe5dd] bg-white px-4 text-sm outline-none transition focus:border-[#017C40] focus:ring-4 focus:ring-[#017C40]/10"
          >
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#334238]" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className="mt-2 w-full rounded-lg border border-[#dbe5dd] px-4 py-3 text-sm outline-none transition focus:border-[#017C40] focus:ring-4 focus:ring-[#017C40]/10"
            placeholder="Tell us what happened and where you need help."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#017C40] px-6 text-sm font-semibold text-white transition hover:bg-[#006934]"
      >
        Send Request
      </button>

      {isSubmitted ? (
        <p className="mt-4 rounded-lg bg-[#eff8f2] px-4 py-3 text-sm font-medium text-[#017C40]">
          Thanks. Please call (803) 233-4408 for immediate emergency service while the form backend is connected.
        </p>
      ) : (
        <p className="mt-4 text-xs leading-5 text-[#6c746f]">
          For urgent water damage, call now for the fastest response.
        </p>
      )}
    </form>
  );
}
