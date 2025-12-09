export interface TeamMember {
  image: string;
  name: string;
  role: string;
  description?: string;
}

// Import real team photos from assets/Team
import abdulRehman from '../assets/Team/Abdul Rehman Outteam Architech.jpg';
import cheifEngineer from '../assets/Team/Cheif Engineer.jpg';
import founderArif from '../assets/Team/Founder ARIF HUSSAIN.jpg';
import hijabShah from '../assets/Team/Hijab Shah Director.jpg';
import hinaShah from '../assets/Team/Hina Shah HR Manager.jpg';
import iftikharKazmi from '../assets/Team/Iftikhar Kazmi Site Manager.jpg';
import iqtidarT from '../assets/Team/Iqtidar Tirmazi Legal Advisor.jpg';
import nomanAhmed from '../assets/Team/Noman Ahmed Social Media Manager.jpg';
import measumShah from '../assets/Team/S Measum Shah Project Manager.jpg';
import sulemanArif from '../assets/Team/Suleman Arif CEO.jpg';
import syedMasood from '../assets/Team/Syed Masood Rizvi Cheif Manager.jpg';

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
  { image: cheifEngineer, name: 'Chief Engineer', role: '' },
  { image: abdulRehman, name: 'Abdul Rehman', role: 'Outteam Architech' },
];

export default teamMembers;
