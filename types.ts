export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string; // Using placeholder text or images for logos
}

export interface ServiceStep {
  id: string;
  title: string;
  description: string;
  iconName: string;
}