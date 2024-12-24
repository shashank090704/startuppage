'use client'
import Link from "next/link";

export function CallToAction() {
  return (
    <div className="mt-20 text-center">
      <Link 
        href='/signup' 
        className='px-12 py-4 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-full text-black text-xl font-bold transition-all hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105'
      >
        Get Started Now
      </Link>
    </div>
  );
}