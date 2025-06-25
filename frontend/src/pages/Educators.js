import React from 'react';
import { Link } from 'react-router-dom';

const Educators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">🎓 Bring DAMAT to Your School</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DAMAT isn't just a game — it's a teaching tool. Developed in collaboration with Malaysian educators 
              and researchers, it helps reinforce mental math through active, hands-on learning.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwbWF0aHxlbnwwfHx8fDE3NTA4NzU3MjN8MA&ixlib=rb-4.1.0&q=85"
              alt="Teacher in classroom with math equations"
              className="rounded-2xl shadow-2xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Use DAMAT Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Use DAMAT in Class?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Supports KSSR Math Objectives</h3>
              <p className="text-gray-600">Aligns perfectly with Malaysian curriculum standards</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Engages Students with Kinetic Learning</h3>
              <p className="text-gray-600">Movement-based activities keep students actively involved</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Promotes Teamwork</h3>
              <p className="text-gray-600">Collaborative gameplay builds social and problem-solving skills</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy to Use</h3>
              <p className="text-gray-600">No technology required! Simple setup and clear instructions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Curriculum Highlights</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560785496-321917f24016?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxlZHVjYXRpb25hbCUyMG1hdGVyaWFsc3xlbnwwfHx8fDE3NTA4NzU3Mjh8MA&ixlib=rb-4.1.0&q=85"
                alt="Educational materials and worksheets"
                className="rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Level 1: Foundation Building</h3>
                <p className="text-gray-600 mb-4">Addition and Subtraction fundamentals</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Year 1</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Year 2</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-3">Levels 2–5: Advanced Operations</h3>
                <p className="text-gray-600 mb-4">+, –, ×, ÷ with progressive difficulty levels</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Year 3</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Year 4</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Year 5</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Year 6</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-3">📚 Suitable for Years 1 to 6</h3>
                <p className="text-lg">Complete coverage of primary mathematics curriculum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Backing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Research-Backed Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cognitive Development</h3>
              <p className="text-gray-600">
                Enhances mental math abilities through repetitive practice and pattern recognition
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Social Learning</h3>
              <p className="text-gray-600">
                Peer interaction and collaborative problem-solving improve retention rates
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Engagement Studies</h3>
              <p className="text-gray-600">
                Game-based learning increases student motivation and time-on-task by 40%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Packages */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Institutional Packages</h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer special licensing for schools, tuition centers, and educational agencies. 
              Bulk orders available with comprehensive classroom guides and teacher training materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">🏫 School Package</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 5+ Classroom Carpet Sets</li>
                <li>✓ Teacher training materials</li>
                <li>✓ Curriculum integration guide</li>
                <li>✓ Assessment tools</li>
                <li>✓ Ongoing support</li>
              </ul>
              <p className="text-sm text-gray-500">Perfect for primary schools</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">🎓 Tuition Center Package</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 3+ A2 Sets</li>
                <li>✓ Small group activity guides</li>
                <li>✓ Progress tracking sheets</li>
                <li>✓ Parent communication tools</li>
                <li>✓ Marketing materials</li>
              </ul>
              <p className="text-sm text-gray-500">Ideal for learning centers</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">🌟 Educational Agency Package</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Mixed set combinations</li>
                <li>✓ Train-the-trainer programs</li>
                <li>✓ Research collaboration</li>
                <li>✓ Custom materials</li>
                <li>✓ Partnership opportunities</li>
              </ul>
              <p className="text-sm text-gray-500">For educational organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads and Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Resources for Educators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">📄 Educator Brochure</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive guide covering curriculum alignment, lesson plans, and implementation strategies.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Download PDF
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-600 mb-4">📊 Sample Lesson Plans</h3>
              <p className="text-gray-600 mb-6">
                Ready-to-use lesson plans for different grade levels and curriculum topics.
              </p>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Download Bundle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Testimonials */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Teachers Are Saying</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-yellow-300 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-lg italic mb-6">
                "My students enjoy math time for the first time ever! DAMAT has completely transformed 
                our arithmetic lessons. The engagement level is incredible."
              </blockquote>
              <p className="font-semibold">Teacher Fatin</p>
              <p className="text-sm opacity-80">SK Taman Desa, Perlis</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-yellow-300 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-lg italic mb-6">
                "The kinetic learning approach really works! Students are moving, thinking, and 
                having fun while mastering their multiplication tables."
              </blockquote>
              <p className="font-semibold">Teacher Ahmad</p>
              <p className="text-sm opacity-80">SK Bukit Mertajam, Penang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Collaboration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DAMAT is open to partnerships with universities, education departments, and learning centers. 
              Let's work together to make math fun for Malaysian students!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
            >
              📨 Request a Quotation
            </Link>
            <Link
              to="/try-demo"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
            >
              🎮 Try Demo First
            </Link>
            <Link
              to="/game-tracker"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
            >
              📊 View Impact Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Educators;