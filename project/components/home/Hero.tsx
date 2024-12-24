'use client'
import { FeatureCards } from "./FeatureCards";
import { CallToAction } from "./CallToAction";

export function Hero() {
  return (
    <main className='flex flex-col items-center justify-center px-6 py-20'>
      <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent font-bold mb-8 animate-fade-in'>
        Connect With The World
      </h1>
      <p className='text-yellow-100/80 text-xl md:text-2xl text-center max-w-2xl mb-12'>
        Join millions of people who use Connect to share ideas, make friends, and build communities.
      </p>
      <FeatureCards />
      <CallToAction />
    </main>
  );
}