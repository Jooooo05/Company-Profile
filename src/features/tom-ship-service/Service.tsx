import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ServiceData } from "./service.data";

export function Service() {
    return (
        <section id="service" className="mt-44 text-black ">
            <Container>
                {/* sidebar kiri */}
                <div className="md:w-1/2">
                    {/* headline service */}
                    <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                        {ServiceData.heading}
                    </h2>

                    {/* description service */}
                    <p className="mt-6 text-base leading-7 text-gray-600 sm:text-sm">
                        <strong>Tom Ship Service</strong> is a family business based in Gdynia, Poland. We are a team with nearly <strong>15 years of experience</strong> in shipchandling and purchasing. We are a <strong>reliable supplier</strong> of a wide range of products and technical equipment. We know how to respond to the multiple demands of ship supply market
                    </p>

                    <p className="mt-6 text-base leading-7 text-gray-600 sm:text-sm">
                        <strong>
                            {ServiceData.secondaryDescription}
                        </strong>
                    </p>

                    {/* phone */}
                    <p className="mt-6 text-xl leading-7 font-bold text-gray-800 sm:text-3xl">
                        {ServiceData.phone}
                    </p>
                    <hr className="w-3/4 mt-7 text-gray-600" />

                    {/* signature */}
                    <div className="mt-6 flex items-center gap-4">
                        <Image
                            src={ServiceData.signatureIamage}
                            alt="Tom Ship Service Signature"
                            width={150}
                            height={150}
                            className="h-16 w-auto object-contain sm:h-20"
                        />
                        <div className="">
                            <p className="text-sm text-gray-600 sm:text-base">
                                {ServiceData.name}
                            </p>
                            <p>{ServiceData.role}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}