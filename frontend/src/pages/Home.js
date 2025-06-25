import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stats, setStats] = useState({
    totalGames: 0,
    totalStudents: 0,
    totalSchools: 0
  });

  useEffect(() => {
    // Simulate some basic stats for now
    setStats({
      totalGames: 1250,
      totalStudents: 3500,
      totalSchools: 85
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl text-yellow-300 opacity-20 animate-bounce">+</div>
          <div className="absolute top-40 right-20 text-5xl text-blue-300 opacity-20 animate-pulse">×</div>
          <div className="absolute bottom-20 left-20 text-4xl text-red-300 opacity-20 animate-bounce">÷</div>
          <div className="absolute bottom-40 right-10 text-6xl text-green-300 opacity-20 animate-pulse">−</div>
          <div className="absolute top-1/3 left-1/3 text-3xl text-purple-300 opacity-20">123</div>
          <div className="absolute top-2/3 right-1/3 text-4xl text-orange-300 opacity-20">🎲</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                🎲 Turn Learning Into a{' '}
                <span className="text-red-600 bg-yellow-100 px-4 py-2 rounded-xl inline-block transform rotate-1">
                  Game
                </span>{' '}
                with DAMAT!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Malaysia's first arithmetic board game developed by a local university — 
                built to make math fun for kids aged 6 to 12.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/try-demo"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  🎮 Try a Demo Game
                </Link>
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  🛍️ Explore Products
                </Link>
                <Link
                  to="/educators"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"  
                >
                  🏫 For Educators
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/8923956/pexels-photo-8923956.jpeg"
                alt="Children learning math with colorful materials"
                className="rounded-2xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is DAMAT Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What is DAMAT?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DAMAT is a hands-on math game designed to build arithmetic skills through fun, dice-based gameplay. 
              Backed by educational research, DAMAT helps children master addition, subtraction, multiplication, 
              and division — while having a blast.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-400 to-red-600 text-white p-8 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
                <span className="text-6xl">🎲</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Roll the Dice</h3>
              <p className="text-gray-600">Start your math adventure by rolling the dice to get your numbers!</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-8 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
                <span className="text-6xl">➕</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Solve the Operation</h3>
              <p className="text-gray-600">Use addition, subtraction, multiplication, or division to solve the math problem!</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-8 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
                <span className="text-6xl">🏁</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Reach the Goal First!</h3>
              <p className="text-gray-600">Be the first to reach the finish line and win the game!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Explore Our Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A2 Set</h3>
              <p className="text-gray-600 mb-6">Perfect for home or tuition centers. Compact and easy to use!</p>
              <div className="bg-yellow-200 px-4 py-2 rounded-lg text-sm font-medium text-yellow-800 inline-block">
                Ages 6-12
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Classroom Carpet Set</h3>
              <p className="text-gray-600 mb-6">Built for school groups & math corners. Interactive floor play!</p>
              <div className="bg-green-200 px-4 py-2 rounded-lg text-sm font-medium text-green-800 inline-block">
                Up to 6 players
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Digital Edition</h3>
              <p className="text-gray-600 mb-6">On-the-go learning fun for modern families!</p>
              <div className="bg-blue-200 px-4 py-2 rounded-lg text-sm font-medium text-blue-800 inline-block">
                Coming Soon
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Parents & Teachers Love DAMAT */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Parents & Teachers Love DAMAT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Encourages Mental Math</h3>
              <p className="text-gray-600">Builds quick calculation skills through repeated practice</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Promotes Group Learning</h3>
              <p className="text-gray-600">Social interaction enhances the learning experience</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aligns with School Curriculum</h3>
              <p className="text-gray-600">Supports KSSR math objectives for Malaysian schools</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-red-400 to-red-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Child-Safe & Parent-Approved</h3>
              <p className="text-gray-600">Developed by education experts with safety in mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">DAMAT Impact Across Malaysia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">{stats.totalGames.toLocaleString()}+</div>
              <p className="text-xl text-gray-300">Games Played</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">{stats.totalStudents.toLocaleString()}+</div>
              <p className="text-xl text-gray-300">Students Engaged</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">{stats.totalSchools}+</div>
              <p className="text-xl text-gray-300">Schools Reached</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/game-tracker"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
            >
              View Live Dashboard →
            </Link>
          </div>
        </div>
      </section>

      {/* Try DAMAT Now Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Try DAMAT Now!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Want to see how it works? Try our quick demo game online and experience the fun of learning math!
          </p>
          <Link
            to="/try-demo"
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
          >
            🎮 Play Demo →
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Trusted by Schools Across Malaysia</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-2xl font-medium text-gray-800 mb-6 italic">
                "My students enjoy math time for the first time ever! DAMAT has transformed how we approach 
                arithmetic in our classroom. The kids are excited to learn and practice math skills."
              </blockquote>
              <p className="text-lg text-gray-600">
                <strong>Teacher Fatin</strong> - Primary School, Perlis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to bring DAMAT into your home or classroom?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of families and educators who are making math fun with DAMAT!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
            >
              📦 Pre-Order Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-200 inline-flex items-center justify-center"
            >
              📨 Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;