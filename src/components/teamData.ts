export interface TeamMember {
  image: string;
  name: string;
  role: string;
  description?: string;
}

// Placeholder images — replace with real paths in src/assets when available
const teamMembers: TeamMember[] = [
  { image: '/placeholder.jpg', name: 'Mr. Arif', role: 'Owner & CEO' },
  { image: '/placeholder.jpg', name: 'Mr. Ahmed', role: 'Project Manager' },
  { image: '/placeholder.jpg', name: 'Mr. Imran', role: 'Site Manager' },
  { image: '/placeholder.jpg', name: 'Mr. Khalid', role: 'Chief Engineer' },
  { image: '/placeholder.jpg', name: 'Mr. Usman', role: 'Architect' },
];

export default teamMembers;
