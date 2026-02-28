import { TeamMember, Project, Testimonial, Client, ServiceStep } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Robert Sterling',
    role: 'Founder & CEO',
    bio: 'With over 35 years in thermal dynamics, Robert established ARINSULATIONS to bridge the gap between industrial efficiency and environmental sustainability.',
    imageUrl: 'https://picsum.photos/id/1062/400/400',
  },
  {
    id: '2',
    name: 'Elena Vance',
    role: 'Chief Operations Officer',
    bio: 'Elena oversees our global field operations, ensuring optimal installation methodologies and rigorous delivery standards.',
    imageUrl: 'https://picsum.photos/id/338/400/400',
  },
  {
    id: '3',
    name: 'Dr. Marcus Thorne',
    role: 'Head of R&D',
    bio: 'Leading our material science division, Marcus pioneers our proprietary Aerogel-X compound used in extreme temperature environments.',
    imageUrl: 'https://picsum.photos/id/1025/400/400',
  },
];

export const PROCESS_STEPS: ServiceStep[] = [
  {
    id: '1',
    title: 'Site Assessment',
    description: 'Our experts visit your facility to inspect existing systems and identify energy efficiency opportunities.',
    iconName: 'Scan',
  },
  {
    id: '2',
    title: 'Material Selection',
    description: 'We recommend and source the most effective insulation materials specific to your industry and temperature requirements.',
    iconName: 'ClipboardList',
  },
  {
    id: '3',
    title: 'Expert Installation',
    description: 'Our skilled technicians seamlessly apply the insulation with strict adherence to safety standards and minimal disruption.',
    iconName: 'HardHat',
  },
  {
    id: '4',
    title: 'Quality Assurance',
    description: 'We conduct a final inspection to guarantee the integrity of the application and ensure maximum thermal performance.',
    iconName: 'ShieldCheck',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MegaRefinery 500',
    category: 'Oil & Gas',
    description: 'Complete cryogenic insulation overhaul for a 500k BPD refinery reducing energy costs by 18%.',
    imageUrl: 'https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80&w=2670&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: '2',
    title: 'Eco-Data Center',
    category: 'Technology',
    description: 'Acoustic and thermal shielding for server halls in the Nevada desert.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop',
    year: '2022',
  },
  {
    id: '3',
    title: 'Pharmaceutical Clean Room',
    category: 'Healthcare',
    description: 'Sterile, non-fibrous insulation systems for a vaccine production facility.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2670&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: '4',
    title: 'Offshore Platform Delta',
    category: 'Marine',
    description: 'Salt-corrosion resistant cladding for high-pressure steam pipes.',
    imageUrl: 'https://images.unsplash.com/photo-1621617467776-928929ccdf64?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
  },
];

export const CLIENTS: Client[] = [
  { id: '1', name: 'TATACOFFE', logoUrl: '' },
  { id: '2', name: 'POTHYS', logoUrl: '' },
  { id: '3', name: 'SARAVANA SELVARATHINAM', logoUrl: '' },
  { id: '4', name: 'SREE KUMARAN ENTRAPRISES', logoUrl: '' },
  { id: '5', name: 'TEX VALUE MALL', logoUrl: '' },
  { id: '6', name: 'SREE KUMARAN AIRCON ENGINEERS', logoUrl: '' },
  { id: '7', name: 'AND MORE..', logoUrl: '' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Operations Head',
    company: 'TATA COFFEE',
    content: 'ARINSULATIONS transformed our energy efficiency. The ROI on their insulation installation was realized incredibly fast, significantly reducing our thermal losses in processing operations.',
    rating: 5,
  },
  {
    id: '2',
    name: 'M. Ramesh',
    role: 'Facility Director',
    company: 'POTHYS',
    content: 'Professional, safety-conscious, and precise. Their team worked around our operational schedule to install top-quality commercial insulation without disrupting our massive retail environments.',
    rating: 5,
  },
  {
    id: '3',
    name: 'S. Karthik',
    role: 'Procurement Officer',
    company: 'Sree Kumaran Aircon',
    content: 'The durability and exactness of their custom insulation applications are unmatched in South India. Highly recommended for complex HVAC and industrial insulation needs.',
    rating: 5,
  },
];