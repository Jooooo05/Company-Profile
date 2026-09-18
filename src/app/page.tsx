import { Hero } from "@/features/hero/Hero";
import { Service } from "@/features/tom-ship-service/Service";
import { About } from "@/features/about/About";
import { Offer } from "@/features/our-offer/Offer";
import { Team } from "@/features/team/Team";
import { Contact } from "@/features/contact/Contact";
import { Ports } from "@/features/ports/Port";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">

      <Hero />
      <Service />
      <About />
      <Offer />
      <Team />
      <Contact />
      <Ports />
      {/* Sections akan ditambahkan di sini satu per satu:
          <Certificates />
      */}
    </main>
  );
}