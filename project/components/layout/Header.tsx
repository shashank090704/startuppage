'use client'
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { AuthButtons } from "@/components/auth/AuthButtons";

export function Header() {
  return (
    <header className='h-20 flex justify-between items-center px-6 md:px-12'>
      <Logo />
      <AuthButtons />
    </header>
  );
}