import { ArrowRight, MessageSquare, CheckCircle, Languages, BarChart3, FileSearch, AlertCircle, Repeat, Zap, Shield, Users, TrendingUp } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'chat') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Civic<span className="text-blue-600">AI</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-medium">
            Making Government Services Conversational, Intelligent & Accessible
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            CivicAI simplifies complex government digital services through intelligent conversational assistance,
            eligibility prediction, and transparent application tracking.
          </p>
          <button
            onClick={() => onNavigate('chat')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Start Interaction
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MessageSquare, label: 'Conversational AI', color: 'blue' },
            { icon: BarChart3, label: 'Eligibility Tracking', color: 'green' },
            { icon: CheckCircle, label: 'Status Updates', color: 'blue' },
            { icon: Languages, label: 'Multilingual', color: 'green' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
              </div>
              <p className="font-semibold text-gray-800">{feature.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Addressing the key challenges citizens face when interacting with government digital services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: AlertCircle,
                title: 'Complex Digital Portals',
                description: 'Difficult navigation and confusing interfaces make it hard for citizens to access services'
              },
              {
                icon: Languages,
                title: 'Language Barriers',
                description: 'Services primarily available in English, excluding non-English speaking citizens'
              },
              {
                icon: Repeat,
                title: 'Repetitive Form Filling',
                description: 'Citizens must enter the same information multiple times across different services'
              },
              {
                icon: FileSearch,
                title: 'Lack of Intelligent Assistance',
                description: 'No smart guidance on eligibility, required documents, or application processes'
              }
            ].map((problem, idx) => (
              <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                <problem.icon className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Solution
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Intelligent, conversational, and accessible government service interaction
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'Conversational AI Guidance',
                description: 'Natural language interaction that understands intent and provides personalized assistance'
              },
              {
                icon: Zap,
                title: 'Eligibility Prediction Engine',
                description: 'Intelligent matching of citizens with relevant schemes based on their profile'
              },
              {
                icon: Languages,
                title: 'Multilingual Support',
                description: 'Services accessible in English, Hindi, Tamil, and more regional languages'
              },
              {
                icon: BarChart3,
                title: 'Application Status Tracking',
                description: 'Transparent, real-time updates on application progress with expected timelines'
              }
            ].map((solution, idx) => (
              <div key={idx} className="bg-white border border-green-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <solution.icon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            System Architecture
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Enterprise-grade architecture designed for scale and reliability
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 max-w-5xl mx-auto">
            {[
              'User',
              'Chat Interface',
              'NLP Engine',
              'Eligibility Model',
              'Scheme Database',
              'Response Engine',
              'Status Tracker'
            ].map((component, idx, arr) => (
              <div key={idx} className="flex items-center">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white px-6 py-4 rounded-lg font-semibold text-center min-w-[140px] shadow-md">
                  {component}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-2 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Zap className="w-5 h-5 text-blue-600 mr-2" />
              How It Works
            </h3>
            <ol className="space-y-2 text-sm text-gray-700">
              <li><strong>1. User Input:</strong> Citizen asks a question in natural language</li>
              <li><strong>2. Intent Recognition:</strong> NLP engine identifies the intent and extracts key information</li>
              <li><strong>3. Eligibility Check:</strong> Profile is matched against scheme criteria using rule-based logic</li>
              <li><strong>4. Intelligent Response:</strong> System provides personalized recommendations with explanations</li>
              <li><strong>5. Continuous Tracking:</strong> Application status is monitored and updated transparently</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Impact & Benefits
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Transforming government-citizen digital interaction for better outcomes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Reduces Friction',
                description: 'Simplified processes lead to faster completion and higher success rates',
                metric: '60% faster'
              },
              {
                icon: Users,
                title: 'Improves Accessibility',
                description: 'Multilingual support and conversational interface reach wider demographics',
                metric: '3x reach'
              },
              {
                icon: TrendingUp,
                title: 'Increases Digital Adoption',
                description: 'User-friendly experience encourages more citizens to use digital services',
                metric: '45% increase'
              },
              {
                icon: Shield,
                title: 'Enhances Trust',
                description: 'Transparent tracking and intelligent assistance build confidence in public systems',
                metric: '80% satisfaction'
              }
            ].map((impact, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <impact.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{impact.description}</p>
                <div className="text-2xl font-bold text-green-600">{impact.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg leading-relaxed">
            <strong>CivicAI</strong> is designed to integrate with national digital public infrastructure
            and can scale across taxation, compliance, healthcare, and welfare platforms.
          </p>
        </div>
      </section>
    </div>
  );
}
