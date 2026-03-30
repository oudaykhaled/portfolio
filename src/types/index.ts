export interface Skill {
  category: string;
  name: string;
  rating: number;
  detail: string;
}

export interface TechnologyDomain {
  id: string;
  name: string;
  shortName: string;
  color: string;
  position: 'horizontal' | 'vertical';
  rating: number;
  repoCount: number;
  skills: Skill[];
  products: string[];
  description: string;
}

export interface Microservice {
  name: string;
  language: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  languages: string[];
  repoCount: number;
  category: string;
  components: string[];
  microservices?: Microservice[];
}

export interface Experience {
  id: string;
  company: string;
  roles: string[];
  location: string;
  period: string;
  highlights: string[];
  technologies?: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
