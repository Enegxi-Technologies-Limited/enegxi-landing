import { SITE } from "../../lib/site";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

Enegxi Technologies is the parent company. It builds custom web and mobile software for businesses and operates three products of its own.

## Products

- [Enegxi Institute](${SITE.instituteUrl}): Project-based tech training for frontend, backend, full-stack and product management, taught by working software engineers.
- [Payyng](https://payyng.com): A fintech app for bill payment and remittance in Nigeria, with NGN, USD, GBP and EUR wallets and virtual dollar cards.
- [iRevault](https://irevault.com): A creator platform for Africa to sell courses, digital products and paid communities and accept local and global payments.

## Company

- [Home](${SITE.url}): Overview of Enegxi Technologies and its products.
- [Start a project](${SITE.url}/#start): Project enquiry form for businesses that want software built.

## Contact

- Email: ${SITE.email}
- Phone: ${SITE.phone}
- Address: ${SITE.address}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}