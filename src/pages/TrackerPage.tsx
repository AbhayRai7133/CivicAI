import { useState } from 'react';
import { Search, CheckCircle, Clock, FileText, XCircle, AlertCircle } from 'lucide-react';
import { mockApplications } from '../data/applications';
import { ApplicationStatus } from '../types';

export function TrackerPage() {
  const [applicationId, setApplicationId] = useState('');
  const [result, setResult] = useState<ApplicationStatus | null>(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError('');
    setResult(null);

    if (!applicationId.trim()) {
      setError('Please enter an Application ID');
      return;
    }

    const application = mockApplications[applicationId.toUpperCase()];
    if (application) {
      setResult(application);
    } else {
      setError('Application ID not found. Please check and try again.');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted':
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 'under_verification':
        return <Clock className="w-6 h-6 text-yellow-600" />;
      case 'document_validation':
        return <AlertCircle className="w-6 h-6 text-orange-600" />;
      case 'approved':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-600" />;
      default:
        return <Clock className="w-6 h-6 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'under_verification':
        return 'bg-yellow-100 text-yellow-800';
      case 'document_validation':
        return 'bg-orange-100 text-orange-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressPercentage = (status: string) => {
    switch (status) {
      case 'submitted':
        return 25;
      case 'under_verification':
        return 50;
      case 'document_validation':
        return 75;
      case 'approved':
        return 100;
      case 'rejected':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Track Your Application</h1>
          <p className="text-gray-600">
            Enter your Application ID to get real-time status updates with transparent tracking
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Enter Application ID (e.g., CIV12345)"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-semibold"
            >
              <Search className="w-5 h-5" />
              <span>Track</span>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-sm text-gray-600">Try sample IDs:</p>
            {Object.keys(mockApplications).map((id) => (
              <button
                key={id}
                onClick={() => {
                  setApplicationId(id);
                  setResult(mockApplications[id]);
                  setError('');
                }}
                className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                {id}
              </button>
            ))}
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
              <XCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-800">{error}</p>
            </div>
          )}
        </div>

        {result && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{result.scheme}</h2>
                <p className="text-gray-600">Application ID: {result.id}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg font-semibold ${getStatusColor(result.status)}`}>
                {result.status.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-gray-700">{getProgressPercentage(result.status)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    result.status === 'rejected' ? 'bg-red-600' : 'bg-gradient-to-r from-blue-600 to-green-500'
                  }`}
                  style={{ width: `${getProgressPercentage(result.status)}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Submitted', status: 'submitted', active: true },
                { label: 'Verification', status: 'under_verification', active: getProgressPercentage(result.status) >= 50 },
                { label: 'Validation', status: 'document_validation', active: getProgressPercentage(result.status) >= 75 },
                { label: result.status === 'rejected' ? 'Rejected' : 'Approved', status: result.status === 'rejected' ? 'rejected' : 'approved', active: getProgressPercentage(result.status) === 100 }
              ].map((stage, idx) => (
                <div key={idx} className={`p-4 rounded-xl border-2 ${stage.active ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="flex items-center justify-center mb-2">
                    {getStatusIcon(stage.status)}
                  </div>
                  <p className={`text-center text-sm font-medium ${stage.active ? 'text-blue-900' : 'text-gray-600'}`}>
                    {stage.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Current Status</h3>
                  <p className="text-gray-700 mb-3">
                    Your application is currently in <strong>{result.currentStage}</strong> stage.
                  </p>
                  {result.expectedDays > 0 && (
                    <p className="text-gray-700">
                      Expected processing time: <strong>{result.expectedDays} days</strong>
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mt-3">
                    Submitted on: {new Date(result.submittedDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>

            {result.status === 'rejected' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800">
                  <strong>Rejection Reason:</strong> {result.currentStage}
                </p>
                <p className="text-sm text-red-700 mt-2">
                  You may reapply after reviewing the eligibility criteria or consider alternative schemes.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
