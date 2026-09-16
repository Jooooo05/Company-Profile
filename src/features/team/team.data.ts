export const teamContent = {
    heading: "Team",
    contactCta: { label: "Contact us", href: "#contact" },
} as const;

export type TeamMember = {
    firstName: string;
    lastName: string;
    role: string;
    phone?: string;
    email: string;
    photo: { src: string; alt: string };
};

// TODO: ganti foto & data sesuai tim asli kamu
export const teamMembers: TeamMember[] = [
    {
        firstName: "Sylwia",
        lastName: "Bielska",
        role: "Managing director",
        phone: "+48 790 210 889",
        email: "sylwia.d@tomshipservice.com",
        photo: { src: "/images/team/team1.jpg", alt: "Sylwia Bielska" },
    },
    {
        firstName: "Ireneusz",
        lastName: "Zapart",
        role: "Technical director",
        phone: "+48 503 300 555",
        email: "technical@tomshipservice.com",
        photo: { src: "/images/team/team2.jpg", alt: "Ireneusz Zapart" },
    },
    {
        firstName: "Sławomir",
        lastName: "Łysakowski",
        role: "Supply specialist",
        email: "slawek.l@tomshipservice.com",
        photo: {
        src: "/images/team/team3.jpg",
        alt: "Sławomir Łysakowski",
        },
    },
];