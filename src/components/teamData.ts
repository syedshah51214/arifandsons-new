export interface TeamMember {
  image: string;
  name: string;
  role: string;
  description?: string;
}

// Import real team photos from assets/Team
import abdulRehman from '../assets/Team/Abdul Rehman Outteam Architech.webp';
import cheifEngineer from '../assets/Team/Cheif Engineer.webp';
import founderArif from '../assets/Team/Founder ARIF HUSSAIN.webp';
import hijabShah from '../assets/Team/Hijab Shah Director.webp';
import hinaShah from '../assets/Team/Hina Shah HR Manager.webp';
import iftikharKazmi from '../assets/Team/Iftikhar Kazmi Site Manager.webp';
import iqtidarT from '../assets/Team/Iqtidar Tirmazi Legal Advisor.webp';
import nomanAhmed from '../assets/Team/Noman Ahmed Social Media Manager.webp';
import measumShah from '../assets/Team/S Measum Shah Project Manager.webp';
import sulemanArif from '../assets/Team/Suleman Arif CEO.webp';
import syedMasood from '../assets/Team/Syed Masood Rizvi Cheif Manager.webp';

const teamMembers: TeamMember[] = [
  { image: sulemanArif, name: 'Suleman Arif', role: 'CEO' },
  { image: measumShah, name: 'S. Measum Shah', role: 'Project Manager' },
  { image: nomanAhmed, name: 'Noman Ahmed', role: 'Social Media Manager' },
  { image: iqtidarT, name: 'Iqtidar Tirmazi', role: 'Legal Advisor' },
  { image: iftikharKazmi, name: 'Iftikhar Kazmi', role: 'Site Manager' },
  { image: hinaShah, name: 'Hina Shah', role: 'HR Manager' },
  { image: hijabShah, name: 'Hijab Shah', role: 'Director' },
  { image: founderArif, name: 'Arif Hussain', role: 'Founder' },
  { image: syedMasood, name: 'Syed Masood Rizvi', role: 'Chief Manager' },
  { image: cheifEngineer, name: 'Chief Engineer', role: 'Engineering' },
  { image: abdulRehman, name: 'Abdul Rehman', role: 'Architect' },
];

export default teamMembers;
