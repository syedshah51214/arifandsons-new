// Business details used for the page tags search engines read.
// Keep these identical to your Google Business Profile.
const localInfo = {
  name: 'Arif and Sons Construction Co.',
  url: 'https://arifandsonsconstruction.sbs',
  telephone: '+923258579677',
  email: 'info@arifandsons.com',
  foundingYear: 1995,
  // Replace with the exact office address when available
  address: {
    streetAddress: 'Lake City',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54000',
    addressCountry: 'PK',
  },
  areasServed: [
    'Johar Town, Lahore',
    'DHA Lahore',
    'Gulberg, Lahore',
    'Bahria Town Lahore',
    'Lake City, Lahore',
    'Model Town, Lahore',
    'Allama Iqbal Town, Lahore',
  ],
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-15:00'],
  description:
    'Construction company in Lahore for houses, commercial plazas and flats: grey structure, finishing, renovation, woodwork and turnkey projects.',
  googleMapsSearchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Arif and Sons Construction Lahore')}`,
};

export default localInfo;
