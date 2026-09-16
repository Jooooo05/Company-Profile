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

export const offerItems: { icon: LucideIcon; title: string; href: string }[] = [
    { icon: ShoppingBasket, title: "Provisions", href: "#" },
    { icon: GlassWater, title: "Bonded store", href: "#" },
    { icon: Wrench, title: "Cabin, deck and spare parts", href: "#" },
    { icon: WashingMachine, title: "Laundry", href: "#" },
    { icon: ArrowLeftRight, title: "Currency exchange", href: "#" },
    { icon: SprayCan, title: "Deck cleaning", href: "#" },
    { icon: Truck, title: "Road transport", href: "#" },
    { icon: Ship, title: "Cabotage shipping", href: "#" },
];