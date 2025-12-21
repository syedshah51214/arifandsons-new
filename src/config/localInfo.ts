const localInfo = {
  name: 'Arif and Sons Construction Co.',
  url: 'https://arifandsonsconstruction.sbs',
  telephone: '+923258579677',
  email: 'info@arifandsons.com',
  // Replace streetAddress/postalCode with your precise office address when available
  address: {
    streetAddress: 'Johar Town',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54000',
    addressCountry: 'PK'
  },
  geo: {
    latitude: 31.4545,
    longitude: 73.1686
  },
  areasServed: [
    'Johar Town, Lahore',
    'DHA Lahore',
    'Gulberg, Lahore',
    'Bahria Town Lahore',
    'Lake City, Lahore',
    'Model Town, Lahore',
    'Allama Iqbal Town, Lahore'
  ],
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-15:00'],
  description: 'Full-service construction and renovation company serving Johar Town and greater Lahore. Specialties: home renovation, bathroom remodeling, residential construction, commercial projects, and turnkey contracts.',
  // A safe Google Maps link using a search query. Replace with place_id link if you have it.
  googleMapsSearchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Arif and Sons Construction Lahore')}`,

};

export default localInfo;
