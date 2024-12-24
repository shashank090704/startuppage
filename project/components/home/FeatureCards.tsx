'use client'
import { Users, MessageCircle, Share2 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Connect with People",
    description: "Find and connect with like-minded individuals from around the globe."
  },
  {
    icon: MessageCircle,
    title: "Share Your Story",
    description: "Express yourself and share your experiences with the community."
  },
  {
    icon: Share2,
    title: "Build Communities",
    description: "Create and join communities around your interests and passions."
  }
];

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mt-12">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="bg-gradient-to-br from-black to-yellow-950 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
            <Icon className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-yellow-500 mb-2">{feature.title}</h3>
            <p className="text-yellow-100/60">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}