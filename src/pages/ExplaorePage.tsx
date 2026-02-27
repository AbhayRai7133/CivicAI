import { useState } from 'react';
import { Filter, Search, Calendar, FileText, DollarSign, MapPin } from 'lucide-react';
import { schemes } from '../data/schemes';
import { Scheme } from '../types';

export function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [incomeRange, setIncomeRange] = useState('all');
  const [ageRange, setAgeRange] = useState('all');

  const categories = Array.from(new Set(schemes.map(s => s.category)));
  const states = Array.from(new Set(schemes.map(s => s.state)));

  const filteredSchemes = schemes.filter(scheme => {
    if (searchQuery && !scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !scheme.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedState !== 'all' && scheme.state !== selectedState && scheme.state !== 'All India') {
      return false;
    }
    if (selectedCategory !== 'all' && scheme.category !== selectedCategory) {
      return false;
    }
    if (incomeRange !== 'all') {
      const maxIncome = parseInt(incomeRange);
      if (scheme.incomeMax < maxIncome) {
        return false;
      }
    }
    if (ageRange !== 'all') {
      const [minAge, maxAge] = ageRange.split('-').map(Number);
      if (scheme.ageMax < minAge || scheme.ageMin > maxAge) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Scheme Explorer</h1>
          <p className="text-gray-600">
            Discover government schemes and benefits tailored to your needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search schemes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All States</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={incomeRange}
              onChange={(e) => setIncomeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Any Income</option>
              <option value="200000">Up to ₹2L</option>
              <option value="400000">Up to ₹4L</option>
              <option value="600000">Up to ₹6L</option>
              <option value="1000000">Up to ₹10L</option>
            </select>

            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Any Age</option>
              <option value="5-18">5-18 years</option>
              <option value="18-25">18-25 years</option>
              <option value="25-40">25-40 years</option>
              <option value="40-60">40-60 years</option>
              <option value="60-100">60+ years</option>
            </select>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredSchemes.length} of {schemes.length} schemes
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No schemes found matching your filters.</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SchemeCard({ scheme }: { scheme: Scheme }) {
  const [expanded, setExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Education': 'bg-blue-100 text-blue-800',
      'Healthcare': 'bg-green-100 text-green-800',
      'Housing': 'bg-orange-100 text-orange-800',
      'Business': 'bg-teal-100 text-teal-800',
      'Agriculture': 'bg-yellow-100 text-yellow-800',
      'Taxation': 'bg-red-100 text-red-800',
      'Social Welfare': 'bg-pink-100 text-pink-800',
      'Skill Development': 'bg-cyan-100 text-cyan-800',
      'Energy': 'bg-lime-100 text-lime-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(scheme.category)}`}>
            {scheme.category}
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {scheme.state}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{scheme.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{scheme.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-700">
            <DollarSign className="w-4 h-4 mr-2 text-green-600" />
            <span className="font-semibold">{scheme.benefits}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            <span>Deadline: {scheme.deadline}</span>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          {expanded ? 'Show Less' : 'View Details'}
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Eligibility</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Age: {scheme.ageMin}-{scheme.ageMax} years</li>
                <li>Income: Up to ₹{scheme.incomeMax.toLocaleString()}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1 flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Required Documents
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {scheme.requiredDocuments.map((doc, idx) => (
                  <li key={idx}>• {doc}</li>
                ))}
              </ul>
            </div>

            <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:shadow-md transition-all font-medium">
              Apply Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
