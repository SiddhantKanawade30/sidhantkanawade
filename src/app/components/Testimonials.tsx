"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";
import { Badge } from "./ui/Badge";
import { HeroContact } from "./HeroContact";

export function Testimonials() {
  return (
    <div className="overflow-x-auto pb-30 md:pb-0">
        <div className="px-4 py-5">
        <Badge>User Feedbacks</Badge>
        </div>
    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden min-w-0">
        
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

     <HeroContact />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Secure Vault has completely changed the way I manage my passwords. I used to juggle between sticky notes and browsers, always worried about security. Now, I have everything in one place, encrypted and safe.",
    name: "Kalyani Gunjal",
    title: "Secure Vault",
  }
];
