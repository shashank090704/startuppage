'use client'
import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Sparkles className="w-8 h-8 text-yellow-500" />
      <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
        Connect
      </span>
    </div>
  );
}