'use client'
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='min-h-screen w-screen bg-black overflow-x-hidden'>
      <Header />
      <Hero />
    </div>
  );
}