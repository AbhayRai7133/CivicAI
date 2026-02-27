import { schemes } from '../data/schemes';
import { UserProfile, Scheme } from '../types';

export function checkEligibility(profile: UserProfile): { eligible: Scheme[], reasons: Record<string, string> } {
  const eligible: Scheme[] = [];
  const reasons: Record<string, string> = {};

  schemes.forEach(scheme => {
    let isEligible = true;
    const reasonParts: string[] = [];

    if (profile.age !== undefined) {
      if (profile.age < scheme.ageMin || profile.age > scheme.ageMax) {
        isEligible = false;
      } else {
        reasonParts.push(`Age requirement met (${scheme.ageMin}-${scheme.ageMax} years)`);
      }
    }

    if (profile.income !== undefined) {
      if (profile.income > scheme.incomeMax) {
        isEligible = false;
      } else {
        reasonParts.push(`Income within limit (max ₹${scheme.incomeMax.toLocaleString()})`);
      }
    }

    if (profile.state && scheme.state !== 'All India') {
      if (profile.state !== scheme.state) {
        isEligible = false;
      } else {
        reasonParts.push(`State-specific scheme for ${scheme.state}`);
      }
    }

    if (isEligible && reasonParts.length > 0) {
      eligible.push(scheme);
      reasons[scheme.id] = reasonParts.join(', ');
    }
  });

  return { eligible, reasons };
}

export function detectIntent(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('scholarship') || lowerMessage.includes('education')) {
    return 'education';
  }
  if (lowerMessage.includes('tax') || lowerMessage.includes('income tax') || lowerMessage.includes('filing')) {
    return 'taxation';
  }
  if (lowerMessage.includes('track') || lowerMessage.includes('status') || lowerMessage.includes('application')) {
    return 'tracking';
  }
  if (lowerMessage.includes('business') || lowerMessage.includes('loan') || lowerMessage.includes('startup')) {
    return 'business';
  }
  if (lowerMessage.includes('house') || lowerMessage.includes('housing') || lowerMessage.includes('awas')) {
    return 'housing';
  }
  if (lowerMessage.includes('health') || lowerMessage.includes('insurance') || lowerMessage.includes('medical')) {
    return 'healthcare';
  }
  if (lowerMessage.includes('pension') || lowerMessage.includes('widow') || lowerMessage.includes('disability')) {
    return 'welfare';
  }
  if (lowerMessage.includes('eligible') || lowerMessage.includes('qualify')) {
    return 'eligibility';
  }

  return 'general';
}

export function extractProfile(messages: string[]): UserProfile {
  const profile: UserProfile = {};
  const allText = messages.join(' ').toLowerCase();

  const ageMatch = allText.match(/(?:age|years old|yr|years)\D*(\d{1,3})/i) ||
                   allText.match(/(\d{1,3})\s*(?:age|years old|yr|years)/i);
  if (ageMatch) {
    profile.age = parseInt(ageMatch[1]);
  }

  const incomeMatch = allText.match(/(?:income|earn|salary)\D*(\d+)/i) ||
                      allText.match(/(\d+)\s*(?:income|salary|lakh|lakhs)/i);
  if (incomeMatch) {
    let income = parseInt(incomeMatch[1]);
    if (allText.includes('lakh')) {
      income = income * 100000;
    } else if (income < 1000) {
      income = income * 100000;
    }
    profile.income = income;
  }

  const states = ['tamil nadu', 'karnataka', 'maharashtra', 'delhi', 'kerala', 'punjab', 'gujarat'];
  for (const state of states) {
    if (allText.includes(state)) {
      profile.state = state.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      break;
    }
  }

  if (allText.includes('student')) profile.occupation = 'student';
  if (allText.includes('business') || allText.includes('entrepreneur')) profile.occupation = 'business';
  if (allText.includes('farmer')) profile.occupation = 'farmer';
  if (allText.includes('teacher')) profile.occupation = 'teacher';

  if (allText.includes('sc') || allText.includes('st') || allText.includes('scheduled')) profile.category = 'SC/ST';
  if (allText.includes('obc')) profile.category = 'OBC';
  if (allText.includes('general')) profile.category = 'General';

  return profile;
}

export function generateResponse(intent: string, profile: UserProfile, userMessage: string): string {
  const { eligible, reasons } = checkEligibility(profile);

  if (intent === 'education') {
    const eduSchemes = eligible.filter(s => s.category === 'Education');
    if (eduSchemes.length > 0) {
      let response = "Based on your profile, here are the education schemes you're eligible for:\n\n";
      eduSchemes.forEach((scheme, idx) => {
        response += `${idx + 1}. **${scheme.name}**\n`;
        response += `   Benefits: ${scheme.benefits}\n`;
        response += `   Reason: ${reasons[scheme.id]}\n`;
        response += `   Required Documents: ${scheme.requiredDocuments.slice(0, 3).join(', ')}\n\n`;
      });
      return response;
    } else {
      return "I couldn't find specific education schemes matching your profile. Could you provide more details about your age, income, and state?";
    }
  }

  if (intent === 'taxation') {
    const taxSchemes = eligible.filter(s => s.category === 'Taxation');
    if (taxSchemes.length > 0) {
      let response = "Here are the tax benefits you may be eligible for:\n\n";
      taxSchemes.forEach((scheme, idx) => {
        response += `${idx + 1}. **${scheme.name}**\n`;
        response += `   Benefits: ${scheme.benefits}\n`;
        response += `   Eligibility: ${reasons[scheme.id]}\n\n`;
      });
      return response;
    } else {
      return "For tax filing assistance, I recommend checking the Income Tax e-filing portal. You may also be eligible for certain rebates based on your profile.";
    }
  }

  if (intent === 'tracking') {
    return "To track your application status, please visit the 'Track Application' section and enter your Application ID (e.g., CIV12345). You'll get real-time updates on your application progress.";
  }

  if (intent === 'business') {
    const businessSchemes = eligible.filter(s => s.category === 'Business');
    if (businessSchemes.length > 0) {
      let response = "Great! Here are business schemes suitable for you:\n\n";
      businessSchemes.forEach((scheme, idx) => {
        response += `${idx + 1}. **${scheme.name}**\n`;
        response += `   Benefits: ${scheme.benefits}\n`;
        response += `   Description: ${scheme.description}\n`;
        response += `   Reason: ${reasons[scheme.id]}\n\n`;
      });
      return response;
    }
  }

  if (intent === 'eligibility' || eligible.length > 0) {
    if (eligible.length > 0) {
      let response = "Based on your profile analysis, you are eligible for the following schemes:\n\n";
      eligible.slice(0, 5).forEach((scheme, idx) => {
        response += `${idx + 1}. **${scheme.name}** (${scheme.category})\n`;
        response += `   Benefits: ${scheme.benefits}\n`;
        response += `   Reason: ${reasons[scheme.id]}\n`;
        response += `   Deadline: ${scheme.deadline}\n\n`;
      });
      if (eligible.length > 5) {
        response += `\nAnd ${eligible.length - 5} more schemes. Visit the Schemes Explorer to see all options.`;
      }
      return response;
    }
  }

  if (profile.income && profile.income > 1000000) {
    return "Based on your income level, you may not qualify for schemes with income limits. However, you might be eligible for startup funding, tax benefits, or business development schemes. Please check the Schemes Explorer for more options.";
  }

  return "Hello! I'm CivicAI, your intelligent government services assistant. I can help you:\n\n• Find eligible schemes (scholarships, benefits, loans)\n• Guide you through tax filing\n• Track application status\n• Explain eligibility criteria\n\nPlease share your details (age, income, state, occupation) to get personalized recommendations.";
}
