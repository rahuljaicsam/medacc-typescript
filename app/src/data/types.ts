export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: string;
}

export interface SalaryData {
  id: string;
  lat: number;
  lng: number;
  hospital: string;
  location: string;
  state?: string;
  district?: string;
  salary: string;
  specialty: string;
  degree: string;
  notes?: string;
  // Enhanced metrics
  quality_of_life?: number;
  toxicity?: number;
  work_hecticity?: number;
  average_salary?: number;
  lowest_salary?: number;
  highest_salary?: number;
  mbbs_average_salary?: number;
  md_average_salary?: number;
  ms_average_salary?: number;
  dm_average_salary?: number;
  mch_average_salary?: number;
  // Additional metrics
  outsider_harassment?: number;
  entrance_coaching_feasibility?: number;
  preparation_to_go_abroad?: number;
  patient_density?: number;
  doctor_density?: number;
  job_vacancy_density?: number;
  pharma_rep_density?: number;
  schooling_for_kids?: number;
  internet?: number;
  cost?: number;
  country?: string;
  currency?: string;
}
