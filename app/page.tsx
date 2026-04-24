import { Hero } from "@/components/home/Hero";
import { FeaturedTrips } from "@/components/home/FeaturedTrips";
import { Journey } from "@/components/home/Journey";
import { Gallery } from "@/components/home/Gallery";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedTrips />
      <Journey />
      <Gallery />
      <Testimonials />
      <CtaBand />
    </div>
  );
}
