'use client'
import Link from "next/link";

export function AuthButtons() {
  return (
    <div className='flex items-center gap-4'>
      <Link 
        href='/login' 
        className='h-10 flex items-center justify-center px-6 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-full text-black text-lg font-medium transition-all hover:bg-none hover:border-2 hover:border-yellow-500 hover:text-yellow-500'
      >
        Login
      </Link>
      <Link 
        href='/signup' 
        className='h-10 flex items-center justify-center px-6 border-2 border-yellow-500 rounded-full text-yellow-500 text-lg font-medium transition-all hover:shadow-lg hover:shadow-yellow-500/20'
      >
        Sign Up
      </Link>
    </div>
  );
}