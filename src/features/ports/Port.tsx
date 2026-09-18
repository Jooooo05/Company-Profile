"use client";

import { useState } from "react";

export function Ports() {
  const [mapActive, setMapActive] = useState(false);

return (
    <section id="ports" className="bg-red-600">
        <div
            className="relative h-120 w-full overflow-hidden rounded-sm border border-[#E4E1D8]"
            onMouseLeave={() => setMapActive(false)}
        >
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1oN6Oxj-n1F0-UxuSIouFATqZGFev9Wo&ehbc=2E312F&noprof=1"
                title="Map of our port service locations"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            {!mapActive && (
                <button
                    type="button"
                    onClick={() => setMapActive(true)}
                    className="absolute inset-0 flex items-center justify-center bg-[#0A2647]/10 backdrop-blur-[1px] transition-colors hover:bg-[#0A2647]/15"
                >
                    <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A2647] shadow-md">
                    Click to interact with the map
                    </span>
                </button>
            )}
        </div>
    </section>
);
}