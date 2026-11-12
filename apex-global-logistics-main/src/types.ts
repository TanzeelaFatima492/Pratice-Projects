export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface OfficeItem {
  city: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  flag: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
}
