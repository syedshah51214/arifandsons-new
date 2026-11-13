export const WHATSAPP_NUMBER = '923258579677';
export const PHONE_DISPLAY = '+92 325 8579677';
export const PHONE_TEL = '+923258579677';
export const EMAIL = 'info@arifandsons.com';

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const QUOTE_LINK = waLink('Hello Arif and Sons, I need a quote');

export const SOCIALS = [
  { name: 'Facebook', href: 'https://facebook.com/arifandsonsconstruction' },
  { name: 'Instagram', href: 'https://www.instagram.com/engineersuleiman05/' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@engineersalman05' },
  { name: 'YouTube', href: 'https://www.youtube.com/@engineersalman' },
  { name: 'X', href: 'https://x.com/engineersalman8' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/engineersalman' },
] as const;
