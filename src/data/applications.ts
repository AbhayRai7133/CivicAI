import { ApplicationStatus } from '../types';

export const mockApplications: Record<string, ApplicationStatus> = {
  'CIV12345': {
    id: 'CIV12345',
    scheme: 'National Merit Scholarship',
    status: 'document_validation',
    submittedDate: '2026-02-15',
    expectedDays: 3,
    currentStage: 'Document Verification'
  },
  'CIV12346': {
    id: 'CIV12346',
    scheme: 'Pradhan Mantri Awas Yojana',
    status: 'under_verification',
    submittedDate: '2026-02-20',
    expectedDays: 7,
    currentStage: 'Eligibility Verification'
  },
  'CIV12347': {
    id: 'CIV12347',
    scheme: 'Post Matric Scholarship for SC/ST',
    status: 'approved',
    submittedDate: '2026-01-10',
    expectedDays: 0,
    currentStage: 'Approved - Awaiting Disbursement'
  },
  'CIV12348': {
    id: 'CIV12348',
    scheme: 'Small Business MUDRA Loan',
    status: 'submitted',
    submittedDate: '2026-02-25',
    expectedDays: 10,
    currentStage: 'Initial Review'
  },
  'CIV12349': {
    id: 'CIV12349',
    scheme: 'Senior Citizen Tax Rebate',
    status: 'rejected',
    submittedDate: '2026-02-01',
    expectedDays: 0,
    currentStage: 'Rejected - Income Exceeds Limit'
  }
};
