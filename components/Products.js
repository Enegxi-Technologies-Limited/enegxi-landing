import Image from "next/image";
import { SITE } from "../lib/site";

const INSTITUTE_URL = SITE.instituteUrl;

const themes = {
  light: {
    card: "bg-surface text-ink",
    tag: "bg-ink/10 text-ink",
    text: "text-ink/70",
    chip: "border-ink/20",
    button: "bg-ink text-brand-lime",
  },
  lime: {
    card: "bg-brand-lime text-ink",
    tag: "bg-ink/10 text-ink",
    text: "text-ink/70",
    chip: "border-ink/20",
    button: "bg-ink text-brand-lime",
  },
  dark: {
    card: "bg-ink text-white",
    tag: "bg-white/10 text-white",
    text: "text-white/70",
    chip: "border-white/20",
    button: "bg-brand-lime text-ink",
  },
};

const products = [
  {
    name: "Enegxi Institute",
    tag: "Tech training",
    text: "Project-based training taught by working software engineers. Learn to build real products and graduate with a portfolio.",
    features: ["Frontend & backend", "Full-stack", "Product management"],
    href: INSTITUTE_URL,
    label: "Enegxi Institute",
    logo: { src: "/products/logo transparent.png", width: 383, height: 236, className: "h-12" },
    theme: "light",
  },
  {
    name: "Payyng",
    tag: "Fintech",
    text: "A fintech app for bill payment and remittance in Nigeria. Hold multiple currencies, pay bills in seconds and receive payments from abroad.",
    features: [
      "NGN, USD, GBP & EUR wallets",
      "Bill payments",
      "Virtual dollar cards",
    ],
    href: "https://payyng.com",
    label: "payyng.com",
    logo: { src: "/products/payynglogo.webp", width: 208, height: 47, className: "h-7" },
    theme: "lime",
  },
  {
    name: "iRevault",
    tag: "Creator platform",
    text: "An all-in-one platform for creators across Africa. Sell courses, digital products and paid communities, and accept local and global payments.",
    features: [
      "Courses & digital products",
      "Paid communities",
      "Local & global payments",
    ],
    href: "https://irevault.com",
    label: "irevault.com",
    logo: { src: "/products/irevaultlogo.png", width: 192, height: 79, className: "h-9" },
    theme: "dark",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-28"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
        Our products
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
        Software we build and ship.
      </h2>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Enegxi Technologies is the company behind these products, each one
        built and run by our own team.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const t = themes[product.theme];

          return (
            <div
              key={product.name}
              className={`flex flex-col rounded-panel p-6 sm:p-8 md:last:col-span-2 lg:last:col-span-1 ${t.card}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex h-16 items-center rounded-card bg-white px-4">
                  <Image
                    src={product.logo.src}
                    alt={`${product.name} logo`}
                    width={product.logo.width}
                    height={product.logo.height}
                    className={`${product.logo.className} w-auto max-w-[180px] object-contain`}
                  />
                </div>
                <span
                  className={`rounded-btn px-3 py-1 text-xs font-semibold ${t.tag}`}
                >
                  {product.tag}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl tracking-tight">
                {product.name}
              </h3>
              <p className={`mt-3 leading-relaxed ${t.text}`}>{product.text}</p>

              <ul className="mt-6 flex flex-1 flex-wrap content-start gap-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className={`rounded-btn border px-3 py-1.5 text-sm ${t.chip}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 self-start rounded-btn px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80 ${t.button}`}
              >
                Visit {product.label} &rarr;
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}