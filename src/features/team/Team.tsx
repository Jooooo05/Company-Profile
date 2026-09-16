import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { teamContent, teamMembers } from "./team.data";

export function Team() {
  return (
    <section id="team" className="bg-white py-20 sm:py-24">
      <Container>
        <h2 className="text-center text-2xl font-bold text-[#2B2B2B] sm:text-3xl">
          {teamContent.heading}
        </h2>

        <ul className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-x-8">
          {teamMembers.map((member) => (
            <li key={member.email}>
              <div className="relative h-40 w-40 overflow-hidden">
                <Image
                  src={member.photo.src}
                  alt={member.photo.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4 leading-snug">
                <p className="text-lg font-bold text-[#2B2B2B]">
                  {member.firstName}
                </p>
                <p className="text-lg font-bold text-[#2B2B2B]">
                  {member.lastName}
                </p>
              </div>

              <p className="mt-1 text-sm text-[#6B7280]">{member.role}</p>

              <div className="mt-4 space-y-1 text-sm text-[#2B2B2B]">
                {member.phone && (
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="hover:text-[#0A2647]"
                    >
                      {member.phone}
                    </a>
                  </p>
                )}
                <p>
                  <a
                    href={`mailto:${member.email}`}
                    className="font-semibold hover:text-[#0A2647]"
                  >
                    {member.email}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex items-center gap-6">
          <span aria-hidden="true" className="h-px flex-1 bg-[#E4E1D8]" />
          <Link
            href={teamContent.contactCta.href}
            className="whitespace-nowrap text-sm font-semibold text-[#2B2B2B] transition-colors hover:text-[#0A2647] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
          >
            {teamContent.contactCta.label}
          </Link>
          <span aria-hidden="true" className="h-px flex-1 bg-[#E4E1D8]" />
        </div>
      </Container>
    </section>
  );
}