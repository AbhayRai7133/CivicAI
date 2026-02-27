export interface Scheme {
  id: string;
  name: string;
  description: string;
  category: string;
  state: string;
  ageMin: number;
  ageMax: number;
  incomeMax: number;
  requiredDocuments: string[];
  deadline: string;
  benefits: string;
}

export interface UserProfile {
  age?: number;
  income?: number;
  state?: string;
  category?: string;
  occupation?: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ApplicationStatus {
  id: string;
  scheme: string;
  status: 'submitted' | 'under_verification' | 'document_validation' | 'approved' | 'rejected';
  submittedDate: string;
  expectedDays: number;
  currentStage: string;
}

export type Page = 'landing' | 'chat' | 'tracker' | 'explorer' | 'technology' | 'trust';
