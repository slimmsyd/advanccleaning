'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Review {
  service: string;
  quote: string;
  name: string;
  city: string;
}

interface TestimonialsCarouselProps {
  reviews: Review[];
}

function TestimonialCard({ review }: { review: Review }) {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-[320px] md:w-[370px] flex-shrink-0 bg-white rounded-3xl px-8 py-7 shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-[#f0f0f0]">
      <div className="text-[62px] leading-[0.55] text-[#017C40] mb-[-2px] font-serif tracking-[-1px]">“</div>
      
      <p className="text-[14.5px] leading-[1.55] text-[#2f2f2f] mb-7 tracking-[-0.15px] line-clamp-[5]">
        {review.quote}
      </p>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#017C40] text-white flex items-center justify-center text-[10px] font-semibold tracking-[0.8px] ring-[2.5px] ring-white flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-[13.5px] tracking-[-0.1px] text-[#111] truncate">
            {review.name}
          </div>
          <div className="text-[11px] text-[#666] tracking-[0.1px] truncate">
            {review.service} • {review.city}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div 
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-5"
        animate={{
          x: isPaused ? 0 : ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 48,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{ willChange: 'transform' }}
      >
        {duplicatedReviews.map((review, index) => (
          <TestimonialCard key={`${review.name}-${index}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
}
