import { Code, Database, Brain, Zap, Server, Shield } from 'lucide-react';

export function TechnologyPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Technology Stack</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade architecture designed for scalability, security, and seamless integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Code,
              title: 'Frontend Layer',
              description: 'Modern responsive UI built with React, TypeScript, and Tailwind CSS',
              technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
              color: 'blue'
            },
            {
              icon: Brain,
              title: 'NLP Engine',
              description: 'Intent classification and entity extraction for conversational understanding',
              technologies: ['Natural Language Processing', 'Intent Detection', 'Entity Recognition', 'Context Management'],
              color: 'green'
            },
            {
              icon: Zap,
              title: 'Eligibility Engine',
              description: 'AI-powered rule-based eligibility prediction with real-time matching',
              technologies: ['Rule-Based Logic', 'Profile Matching', 'Criteria Validation', 'Smart Recommendations'],
              color: 'blue'
            },
            {
              icon: Database,
              title: 'Database Layer',
              description: 'Structured scheme dataset with comprehensive metadata',
              technologies: ['Structured Data', 'Indexed Queries', 'Real-time Updates', 'Data Integrity'],
              color: 'green'
            },
            {
              icon: Server,
              title: 'Backend Services',
              description: 'Scalable microservices architecture for distributed processing',
              technologies: ['RESTful APIs', 'Microservices', 'Async Processing', 'Load Balancing'],
              color: 'blue'
            },
            {
              icon: Shield,
              title: 'Security Layer',
              description: 'End-to-end encryption and secure authentication mechanisms',
              technologies: ['Data Encryption', 'Secure Auth', 'Privacy Protection', 'Audit Logging'],
              color: 'green'
            }
          ].map((tech, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 bg-${tech.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <tech.icon className={`w-6 h-6 text-${tech.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((item, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Conversational Interface',
                description: 'Natural language understanding for intuitive user interaction',
                features: ['Intent recognition', 'Context awareness', 'Multi-turn conversations', 'Smart follow-ups']
              },
              {
                title: 'Intelligent Matching',
                description: 'AI-powered eligibility prediction with explanation',
                features: ['Profile analysis', 'Criteria matching', 'Alternative suggestions', 'Reasoning transparency']
              },
              {
                title: 'Multilingual Support',
                description: 'Accessible in multiple Indian languages',
                features: ['English, Hindi, Tamil', 'More languages planned', 'Cultural localization', 'Regional customization']
              },
              {
                title: 'Real-time Tracking',
                description: 'Transparent application status with stage-level updates',
                features: ['Live status updates', 'Progress visualization', 'Expected timelines', 'Notification system']
              }
            ].map((capability, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{capability.description}</p>
                <ul className="space-y-1">
                  {capability.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Scalability & Integration</h2>
          <p className="text-lg mb-6 leading-relaxed">
            CivicAI is architected for seamless integration with national digital public infrastructure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'API Integration',
                items: ['DigiLocker', 'Aadhaar Auth', 'eKYC Services', 'Payment Gateways']
              },
              {
                title: 'Platform Support',
                items: ['Taxation Portals', 'Healthcare Systems', 'Welfare Platforms', 'Business Compliance']
              },
              {
                title: 'Future Ready',
                items: ['Cloud Native', 'Horizontal Scaling', 'Microservices', 'Real-time Analytics']
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
