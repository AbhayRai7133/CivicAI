export const translations: Record<string, Record<string, string>> = {
  en: {
    greeting: "Hello! I'm CivicAI. How can I help you today?",
    placeholder: "Type your message here...",
    send: "Send",
    demoStudent: "Student from Tamil Nadu",
    demoBusinessOwner: "Small Business Owner",
    demoLowIncome: "Low Income Family",
    askQuestion: "Try asking: What scholarships can I apply for?",
  },
  hi: {
    greeting: "नमस्ते! मैं CivicAI हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    placeholder: "अपना संदेश यहां टाइप करें...",
    send: "भेजें",
    demoStudent: "तमिलनाडु का छात्र",
    demoBusinessOwner: "छोटे व्यवसाय मालिक",
    demoLowIncome: "कम आय वाला परिवार",
    askQuestion: "पूछने का प्रयास करें: मैं किन छात्रवृत्तियों के लिए आवेदन कर सकता हूं?",
  },
  ta: {
    greeting: "வணக்கம்! நான் CivicAI. இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    placeholder: "உங்கள் செய்தியை இங்கே தட்டச்சு செய்யவும்...",
    send: "அனுப்பு",
    demoStudent: "தமிழ்நாட்டைச் சேர்ந்த மாணவர்",
    demoBusinessOwner: "சிறு வணிக உரிமையாளர்",
    demoLowIncome: "குறைந்த வருமானம் கொண்ட குடும்பம்",
    askQuestion: "கேட்க முயற்சிக்கவும்: நான் என்ன உதவித்தொகைகளுக்கு விண்ணப்பிக்க முடியும்?",
  }
};

export function translate(key: string, lang: string): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}
