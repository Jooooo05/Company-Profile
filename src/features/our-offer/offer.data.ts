import {
  ShoppingBasket,
  GlassWater,
  Wrench,
  WashingMachine,
  ArrowLeftRight,
  SprayCan,
  Truck,
  Ship,
  type LucideIcon,
} from "lucide-react";

export const offerContent = {
  heading: "Our offer",
} as const;

export type OfferCategory = {
  name: string;
  description?: string;
};

export type OfferDetail = {
  image?: { src: string; alt: string };
  statement?: string; // kalimat tebal pembuka, e.g. "Provision is an essential part..."
  intro?: string[]; // paragraf penjelasan, tiap elemen = 1 paragraf
  listHeading?: string; // judul daftar kategori, e.g. "Provisions"
  categories?: OfferCategory[];
};

export type OfferItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  detail?: OfferDetail; // seluruh detail opsional
};

export const offerItems: OfferItem[] = [
  {
    slug: "provisions",
    icon: ShoppingBasket,
    title: "Provisions",
    shortDescription: "Fresh and quality provisions for your crew.",
    detail: {
      image: {
        src: "/images/offer/offer-provisions.webp",
        alt: "Assorted fresh food provisions",
      },
      statement: "Provision is an essential part of our service.",
      intro: [
        "Our offer includes a wide range of high quality food and beverage products from our own warehouse. We always offer quality products from well known brands at reasonable prices.",
        "Wide assortment of cigarettes and alcohol, candies or soft drinks are also available. We can supply all technical equipment available on the market.",
      ],
      listHeading: "Provisions",
      categories: [
        { name: "Meat", description: "Beef/Pork/Lamb/Chicken/Fish/Seafood" },
        { name: "Dairy", description: "Milk/Cheese/Butter/Cream/Yougurt" },
        { name: "Bakery products", description: "Bread/Pastry/Cakes" },
        { name: "Fresh produce", description: "Fruits/Vegetable" },
        {
          name: "Frozen produce",
          description: "Ice creams/Fruits/Vegetables/Meat/Seafood/Fish etc.",
        },
        {
          name: "Warehouse",
          description:
            "Coffe/Tea/Cocoa/Grains/Cereals/Pastas/Canned goods/Sweets/Dried fruits and nuts/Beverages etc.",
        },
      ],
    },
  },
  {
    slug: "bonded-store",
    icon: GlassWater,
    title: "Bonded store",
    shortDescription: "Duty-free bonded store supplies.",
    // TODO: detail belum diisi, halaman akan tetap tampil rapi tanpa bagian itu
    detail: {
        image: {
            src: "/images/offer/offer-bonded.jpeg",
            alt: "Assorted duty-free bonded store products",
        },
        statement: "We provide a wide range of duty-free bonded store products.",
        intro: [
            "Our bonded store offer includes a variety of products such as alcohol, tobacco, perfumes, cosmetics, and other duty-free items. We ensure that all products are sourced from reputable suppliers and meet the highest quality standards.",
            "We can also provide customized solutions for your specific needs, ensuring that you have access to the products you require while adhering to all relevant regulations.",
        ],
        listHeading: "Bonded Store Products",
        categories: [
            { name: "soft drinks"},
            { name: "Beer" },
            { name: "Wine"},
        ]
    }
  },
  {
    slug: "cabin-deck-spare-parts",
    icon: Wrench,
    title: "Cabin, deck and spare parts",
    shortDescription: "Technical equipment and spare parts on demand.",
    detail: {
        image: {
            src: "/images/offer/offer-cabin.webp",
            alt: "Assorted cabin, deck and spare parts",
        },
        statement: "We provide a wide range of cabin, deck and spare parts.",
        intro: [
            "Our offer includes a variety of technical equipment and spare parts for cabins and decks. We ensure that all products are sourced from reputable suppliers and meet the highest quality standards.",
            "We can also provide customized solutions for your specific needs, ensuring that you have access to the products you require while adhering to all relevant regulations.",
        ],
        listHeading: "Cabin, Deck and Spare Parts",
        categories: [
            { name: "Cabin equipment"},
            { name: "Deck equipment"},
        ]
    }
  },
  {
    slug: "laundry",
    icon: WashingMachine,
    title: "Laundry",
    shortDescription: "Reliable laundry services for crew comfort.",
  },
  {
    slug: "currency-exchange",
    icon: ArrowLeftRight,
    title: "Currency exchange",
    shortDescription: "Convenient currency exchange service.",
  },
  {
    slug: "deck-cleaning",
    icon: SprayCan,
    title: "Deck cleaning",
    shortDescription: "Professional deck cleaning services.",
  },
  {
    slug: "road-transport",
    icon: Truck,
    title: "Road transport",
    shortDescription: "Reliable road transport coordination.",
  },
  {
    slug: "cabotage-shipping",
    icon: Ship,
    title: "Cabotage shipping",
    shortDescription: "Cabotage shipping solutions along the coast.",
  },
];