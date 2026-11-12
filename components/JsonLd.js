import { SITE } from "../lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phoneLink.replace("tel:", ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: "4, Penial Plaza, Ita Oniyan, Oyemekun Rd",
          addressLocality: "Akure",
          addressRegion: "Ondo",
          postalCode: "340212",
          addressCountry: "NG",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}