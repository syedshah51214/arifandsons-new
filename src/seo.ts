// Titles, descriptions and structured data for each page.
// Used twice: when the static HTML is generated at build time (scripts/prerender.mjs)
// and in the browser when moving between pages.
import localInfo from './config/localInfo';
import { SOCIALS } from './lib/contact';

export const SITE = localInfo.url;

export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

export const pages: PageSeo[] = [
  {
    path: '/',
    title: 'Arif and Sons Construction Co. | Construction Company in Lahore',
    description:
      'Construction company in Lahore since 1995. Houses, commercial plazas and flats: grey structure, finishing, renovation and turnkey projects in DHA, Bahria Town, Lake City and Johar Town.',
  },
  {
    path: '/services',
    title: 'Construction Services in Lahore | Arif and Sons',
    description:
      'House construction, building construction, home renovation, bathroom remodelling, concrete and foundation work, and civil engineering consulting in Lahore. Ask for a quote on WhatsApp.',
  },
  {
    path: '/projects',
    title: 'Construction Projects in Lahore | Arif and Sons',
    description:
      'Site photos of our houses, plazas, flats, finishing and woodwork in DHA Lahore, Bahria Town, Lake City, Park Avenue and Johar Town.',
  },
  {
    path: '/featured',
    title: 'Featured Homes: 5, 10 and 14 Marla Houses in Lahore | Arif and Sons',
    description:
      'Finished 5 marla, 10 marla and 14 marla turnkey houses built by Arif and Sons in Lake City, Park Avenue, DHA and Bahria Town, Lahore.',
  },
];

export const seoFor = (pathname: string): PageSeo =>
  pages.find((p) => p.path === (pathname.replace(/\/+$/, '') || '/')) ?? pages[0];

export const faqs = [
  {
    q: 'Which areas of Lahore do you work in?',
    a: 'We build across Lahore, including DHA, Bahria Town, Lake City, Johar Town, Gulberg, Model Town, Allama Iqbal Town and Park Avenue.',
  },
  {
    q: 'What kind of construction do you take on?',
    a: 'Houses, commercial plazas and flats. We do the grey structure, finishing, renovation and woodwork, either as separate jobs or as one complete project.',
  },
  {
    q: 'Do you offer turnkey construction?',
    a: 'Yes. On a turnkey project one contract covers everything from the drawings to a finished building that is ready to use.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the planner on this page to send your plot size, floors and location on WhatsApp, or call +92 325 8579677. We reply with next steps and arrange a site visit.',
  },
  {
    q: 'What are your office hours?',
    a: 'Monday to Friday, 9 am to 6 pm, and Saturday, 10 am to 3 pm. The office is closed on Sunday.',
  },
];

const business = {
  '@type': 'GeneralContractor',
  '@id': `${SITE}/#business`,
  name: localInfo.name,
  description: localInfo.description,
  url: SITE,
  telephone: localInfo.telephone,
  email: localInfo.email,
  foundingDate: String(localInfo.foundingYear),
  image: `${SITE}/og-image.jpg`,
  logo: `${SITE}/favicon.png`,
  address: { '@type': 'PostalAddress', ...localInfo.address },
  areaServed: localInfo.areasServed.map((name) => ({ '@type': 'Place', name })),
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '15:00' },
  ],
  sameAs: SOCIALS.map((s) => s.href),
};

const crumbs = (page: PageSeo) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: page.title.split(' | ')[0], item: `${SITE}${page.path}` },
  ],
});

/** Structured data (schema.org) for a page. */
export function jsonLdFor(page: PageSeo) {
  const graph: object[] = [business];
  if (page.path === '/') {
    graph.push(
      { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: localInfo.name, publisher: { '@id': `${SITE}/#business` } },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }
    );
  } else {
    graph.push(crumbs(page));
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** The <head> tags for a page, as HTML. */
export function headTagsFor(page: PageSeo) {
  const url = `${SITE}${page.path === '/' ? '/' : page.path}`;
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(localInfo.name)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}/og-image.jpg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_PK" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLdFor(page)).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}

/** Keep the tab title and main tags right when moving between pages in the browser. */
export function applySeo(pathname: string) {
  const page = seoFor(pathname);
  document.title = page.title;
  const set = (selector: string, attr: string, value: string) =>
    document.head.querySelector(selector)?.setAttribute(attr, value);
  const url = `${SITE}${page.path === '/' ? '/' : page.path}`;
  set('meta[name="description"]', 'content', page.description);
  set('link[rel="canonical"]', 'href', url);
  set('meta[property="og:title"]', 'content', page.title);
  set('meta[property="og:description"]', 'content', page.description);
  set('meta[property="og:url"]', 'content', url);
}
