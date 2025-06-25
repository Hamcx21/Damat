import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">🧩 DAMAT Game Sets</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the right DAMAT set for your child, classroom, or learning center. 
              Every set includes a colorful game board, tokens, dice, and a user-friendly manual.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* A2 Set */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 text-white">
                <div className="text-6xl mb-4">📋</div>
                <h2 className="text-3xl font-bold mb-2">DAMAT Genius Math</h2>
                <p className="text-xl">A2 Set</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Perfect for: Parents, tutors, or small groups
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    A2-size game board (42 x 59cm)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    6 colorful game tokens
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    1 die
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Printed instruction manual
                  </li>
                </ul>
                
                <div className="border-t pt-6 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-600">Suitable for:</p>
                      <p className="text-gray-800">Ages 6–12</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Covers:</p>
                      <p className="text-gray-800">+, –, ×, ÷</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <p className="text-gray-600 text-sm">
                    Builds core math skills with repeat play. Perfect for home learning and small group activities.
                  </p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  📧 Pre-Order Now
                </button>
              </div>
            </div>

            {/* Classroom Set */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 text-white">
                <div className="text-6xl mb-4">🏫</div>
                <h2 className="text-3xl font-bold mb-2">DAMAT Classroom Set</h2>
                <p className="text-xl">Carpet Edition</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Perfect for: Schools and math corners
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Large-format game carpet
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    6 jumbo game tokens
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Durable oversized dice
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Classroom activity manual
                  </li>
                </ul>
                
                <div className="border-t pt-6 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-600">Group size:</p>
                      <p className="text-gray-800">Up to 6 players</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Age range:</p>
                      <p className="text-gray-800">6–12 years</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <p className="text-gray-600 text-sm">
                    Designed for high interaction & movement-based learning. Perfect for classroom engagement.
                  </p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  📧 Pre-Order Now
                </button>
              </div>
            </div>

            {/* Digital Edition */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                <div className="text-6xl mb-4">💻</div>
                <h2 className="text-3xl font-bold mb-2">DAMAT Digital</h2>
                <p className="text-xl">Online Edition</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Perfect for: On-the-go learning
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Features:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3">⚡</span>
                    Interactive digital game board
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3">⚡</span>
                    Multi-device compatibility
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3">⚡</span>
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3">⚡</span>
                    Online multiplayer support
                  </li>
                </ul>
                
                <div className="border-t pt-6 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-600">Platform:</p>
                      <p className="text-gray-800">Web & Mobile</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Availability:</p>
                      <p className="text-gray-800">Q2 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect for:</h4>
                  <p className="text-gray-600 text-sm">
                    Road trips, camps, and after-school play. Learn math anywhere, anytime!
                  </p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg opacity-75 cursor-not-allowed">
                  🔔 Notify Me When Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Compare Our Products</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-yellow-600">A2 Set</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Classroom Set</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Digital Edition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">Age Range</td>
                  <td className="px-6 py-4 text-center">6-12 years</td>
                  <td className="px-6 py-4 text-center">6-12 years</td>
                  <td className="px-6 py-4 text-center">6+ years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">Max Players</td>
                  <td className="px-6 py-4 text-center">2-4</td>
                  <td className="px-6 py-4 text-center">2-6</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">Setup Time</td>
                  <td className="px-6 py-4 text-center">2 minutes</td>
                  <td className="px-6 py-4 text-center">5 minutes</td>
                  <td className="px-6 py-4 text-center">Instant</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">Portability</td>
                  <td className="px-6 py-4 text-center">High</td>
                  <td className="px-6 py-4 text-center">Low</td>
                  <td className="px-6 py-4 text-center">Very High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">Best For</td>
                  <td className="px-6 py-4 text-center text-sm">Home learning</td>
                  <td className="px-6 py-4 text-center text-sm">Classroom use</td>
                  <td className="px-6 py-4 text-center text-sm">Remote learning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the DAMAT set that's perfect for your learning environment and start making math fun today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
            >
              📧 Contact for Bulk Orders
            </Link>
            <Link
              to="/try-demo"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-200 inline-flex items-center justify-center"
            >
              🎮 Try Demo First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;