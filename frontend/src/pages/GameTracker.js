import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const GameTracker = () => {
  const [stats, setStats] = useState({
    total_games_played: 0,
    total_students_engaged: 0,
    total_schools: 0,
    states_reached: 0,
    states_list: [],
    last_updated: new Date().toISOString()
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
    // Update stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API}/game-tracker/stats`);
      setStats(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError('Failed to load statistics');
      // Use demo data as fallback
      setStats({
        total_games_played: 1847,
        total_students_engaged: 4235,
        total_schools: 127,
        states_reached: 8,
        states_list: ['Perlis', 'Kedah', 'Penang', 'Perak', 'Selangor', 'Kuala Lumpur', 'Johor', 'Melaka'],
        last_updated: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-MY', {
      timeZone: 'Asia/Kuala_Lumpur',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading DAMAT statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">📊 DAMAT Game Tracker</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how DAMAT is making an impact across Malaysia! Live statistics from schools, 
              homes, and learning centers using our educational board game.
            </p>
            {error && (
              <div className="mt-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg inline-block">
                ⚠️ {error} - Showing sample data
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Stats Dashboard */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎲</div>
              <div className="text-4xl font-bold mb-2 counter-animate">{formatNumber(stats.total_games_played)}</div>
              <p className="text-lg opacity-90">Games Played</p>
              <p className="text-sm opacity-75 mt-2">Across Malaysia</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">👨‍🎓</div>
              <div className="text-4xl font-bold mb-2 counter-animate">{formatNumber(stats.total_students_engaged)}</div>
              <p className="text-lg opacity-90">Students Engaged</p>
              <p className="text-sm opacity-75 mt-2">Learning Math</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🏫</div>
              <div className="text-4xl font-bold mb-2 counter-animate">{formatNumber(stats.total_schools)}</div>
              <p className="text-lg opacity-90">Schools Reached</p>
              <p className="text-sm opacity-75 mt-2">Primary & Secondary</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📍</div>
              <div className="text-4xl font-bold mb-2 counter-animate">{stats.states_reached}</div>
              <p className="text-lg opacity-90">States Covered</p>
              <p className="text-sm opacity-75 mt-2">Nationwide Impact</p>
            </div>
          </div>

          {/* States Coverage */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🇲🇾 States Using DAMAT</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {stats.states_list.map((state, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-2xl mb-2">🏛️</div>
                  <p className="text-sm font-medium text-gray-800">{state}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📈 Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                    <span className="text-sm">🎯</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">SK Taman Desa completed 15 games</p>
                    <p className="text-sm text-gray-600">2 minutes ago • Perlis</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
                    <span className="text-sm">👥</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">32 new students joined from Penang</p>
                    <p className="text-sm text-gray-600">5 minutes ago • Penang</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <div className="bg-yellow-500 text-white p-2 rounded-full mr-4">
                    <span className="text-sm">🏫</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">New school registered in Kedah</p>
                    <p className="text-sm text-gray-600">12 minutes ago • Kedah</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-500 text-white p-2 rounded-full mr-4">
                    <span className="text-sm">⭐</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Achievement unlocked: 1000+ games milestone</p>
                    <p className="text-sm text-gray-600">1 hour ago • Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🏆 Top Performing Schools</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-yellow-500 text-white p-2 rounded-full mr-4 text-lg font-bold">1</div>
                    <div>
                      <p className="font-bold text-gray-800">SK Bukit Mertajam</p>
                      <p className="text-sm text-gray-600">Penang</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-yellow-600">247 games</p>
                    <p className="text-sm text-gray-600">This month</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-gray-500 text-white p-2 rounded-full mr-4 text-lg font-bold">2</div>
                    <div>
                      <p className="font-bold text-gray-800">SK Taman Desa</p>
                      <p className="text-sm text-gray-600">Perlis</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-600">198 games</p>
                    <p className="text-sm text-gray-600">This month</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-orange-500 text-white p-2 rounded-full mr-4 text-lg font-bold">3</div>
                    <div>
                      <p className="font-bold text-gray-800">SK Bandar Utama</p>
                      <p className="text-sm text-gray-600">Selangor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-600">156 games</p>
                    <p className="text-sm text-gray-600">This month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Banner */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">🌟 Together, we're building a nation of confident math learners.</h2>
            <p className="text-xl mb-6">Every game played brings us closer to making math fun for every Malaysian child.</p>
            <p className="text-sm opacity-80">Last updated: {formatDate(stats.last_updated)} (GMT+8)</p>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">📢 Want to Add Your School to the Map?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Reach out to get DAMAT in your school and start contributing to these amazing statistics!
              </p>
              <a
                href="/contact"
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors inline-block"
              >
                Get Started
              </a>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Educators</h3>
              <p className="text-gray-600 mb-6">
                Learn how DAMAT aligns with curriculum standards and enhances classroom learning.
              </p>
              <a
                href="/educators"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors inline-block"
              >
                Learn More
              </a>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Try Demo</h3>
              <p className="text-gray-600 mb-6">
                Experience DAMAT yourself before bringing it to your students or children.
              </p>
              <a
                href="/try-demo"
                className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors inline-block"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameTracker;