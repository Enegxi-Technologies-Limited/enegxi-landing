import Image from "next/image";

// TODO: save each logo in public/clients/ and set its path (e.g. "/clients/Hervest.png").
// Until a logo is set, the client's name is shown as text.
const clients = [
  { name: "Hervest", logo: "/clients/hervest.png" },
  { name: "TBC Technologies", logo: "/clients/Tbc.png" },
  { name: "Paystack", logo: "/clients/Paystack1.png" },
  { name: "Eko Electricity Distribution Company", logo: "/clients/Eko1.png" },
  { name: "Flutterwave", logo: "/clients/flutterwave.png" },
];

export default function Clients() {
  return (
    <section id="clients" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
          Clients
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
          Companies we&apos;ve worked with.
        </h2>
      </div>

      <div className="pb-16 pt-10 md:pb-28 md:pt-12">
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 pr-10 md:gap-16 md:pr-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
            >
              {clients.map((client) => (
                <li key={client.name} className="shrink-0">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={48}
                      className="h-8 w-auto md:h-10 object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                    />
                  ) : (
                    <span className="whitespace-nowrap text-xl font-bold text-ink/50">
                      {client.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}