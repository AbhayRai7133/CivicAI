import { Shield, Eye, Lock, CheckCircle, BarChart3, Users, FileCheck, Clock } from 'lucide-react';

export function TrustPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Trust & Transparency</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building confidence in government digital services through transparency, security, and user-centric design
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How CivicAI Enhances Trust
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Eye,
                title: 'Transparent Tracking',
                description: 'Stage-level visibility into application progress',
                benefits: [
                  'Real-time status updates at each processing stage',
                  'Clear expected timelines for each step',
                  'Proactive notifications on progress changes',
                  'Historical audit trail of all actions'
                ]
              },
              {
                icon: CheckCircle,
                title: 'Eligibility Explanation',
                description: 'Clear reasoning for scheme recommendations',
                benefits: [
                  'Detailed eligibility criteria breakdown',
                  'Personalized matching explanations',
                  'Alternative scheme suggestions',
                  'Document requirement clarity'
                ]
              },
              {
                icon: Shield,
                title: 'Data Security',
                description: 'End-to-end encryption and privacy protection',
                benefits: [
                  'Secure data transmission and storage',
                  'Privacy-first architecture',
                  'Compliance with data protection laws',
                  'No unauthorized third-party access'
                ]
              },
              {
                icon: BarChart3,
                title: 'Reduced Manual Errors',
                description: 'AI-powered validation and verification',
                benefits: [
                  'Automated eligibility checking',
                  'Form validation before submission',
                  'Duplicate application prevention',
                  'Smart document verification'
                ]
              }
            ].map((feature, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                    <ul className="space-y-1.5">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Users,
              title: 'Accessible',
              description: 'Multilingual interface removes language barriers',
              stat: '3x Reach',
              color: 'blue'
            },
            {
              icon: Clock,
              title: 'Efficient',
              description: 'Reduced application time and faster processing',
              stat: '60% Faster',
              color: 'green'
            },
            {
              icon: FileCheck,
              title: 'Accurate',
              description: 'AI-powered validation reduces errors',
              stat: '90% Accuracy',
              color: 'blue'
            }
          ].map((metric, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
              <div className={`w-14 h-14 bg-${metric.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`w-7 h-7 text-${metric.color}-600`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{metric.title}</h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">{metric.description}</p>
              <div className="text-2xl font-bold text-green-600">{metric.stat}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl shadow-lg p-8 text-white mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <Lock className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Privacy & Security Commitment</h2>
              <p className="text-blue-100 leading-relaxed">
                We are committed to protecting citizen data and maintaining the highest standards of digital security
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'End-to-end encryption for all communications',
              'Secure authentication and authorization',
              'Regular security audits and updates',
              'Compliance with IT Act and data protection laws',
              'No data sharing without explicit consent',
              'Right to data access, correction, and deletion',
              'Transparent privacy policy and terms',
              ' 24/7 security monitoring and threat detection'
            ].map((commitment, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{commitment}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Building Public Trust Through Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Principles</h3>
              <ul className="space-y-3">
                {[
                  {
                    title: 'Transparency First',
                    description: 'Every decision and process is explainable and visible'
                  },
                  {
                    title: 'User-Centric Design',
                    description: 'Built for citizens, by understanding their needs'
                  },
                  {
                    title: 'Accessibility for All',
                    description: 'No citizen left behind due to language or literacy'
                  },
                  {
                    title: 'Security by Default',
                    description: 'Privacy and data protection embedded in architecture'
                  }
                ].map((principle, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{principle.title}</h4>
                      <p className="text-sm text-gray-600">{principle.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact on Citizens</h3>
              <div className="space-y-4">
                {[
                  {
                    metric: '80%',
                    label: 'Citizen Satisfaction',
                    description: 'Users report higher satisfaction with transparent processes'
                  },
                  {
                    metric: '45%',
                    label: 'Increased Adoption',
                    description: 'More citizens using digital services due to ease of use'
                  },
                  {
                    metric: '65%',
                    label: 'Reduced Support Queries',
                    description: 'Self-service capabilities reduce need for assistance'
                  }
                ].map((impact, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{impact.metric}</div>
                    <div className="font-semibold text-gray-900 mb-1">{impact.label}</div>
                    <div className="text-sm text-gray-600">{impact.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
