export const certificatesContent = {
    heading: "Certificates",
} as const;

export type Certificate = {
    id: string;
    name: string;
    issuer: string;
    thumbnail: string;
    pdfSrc: string;
};

// TODO: ganti dengan sertifikat asli kamu
export const certificates: Certificate[] = [
    {
        id: "lloyds-register",
        name: "Lloyd's Register",
        issuer: "Lloyd's Register",
        thumbnail: "/images/certificates/certificate1.jpeg",
        pdfSrc: "/certificates/MERN_Udemy_certificate.pdf",
    },
    {
        id: "impa",
        name: "IMPA Membership",
        issuer: "International Marine Purchasing Association",
        thumbnail: "/images/certificates/certificate2.jpeg",
        pdfSrc: "/certificates/MERN_Udemy_certificate.pdf",
    },
    {
        id: "issa",
        name: "ISSA Membership",
        issuer: "International Shipsuppliers & Services Association",
        thumbnail: "/images/certificates/certificate3.jpeg",
        pdfSrc: "/certificates/MERN_Udemy_certificate.pdf",
    },
];