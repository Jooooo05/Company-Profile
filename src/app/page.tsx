import { Hero } from "@/features/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">

      <Hero />
      {/* Sections akan ditambahkan di sini satu per satu:
          <About />
          <Services />
          <Team />
          <Certificates />
          <Ports />
          <Contact />
      */}
    </main>
  );
}