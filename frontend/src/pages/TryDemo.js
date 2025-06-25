import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TryDemo = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">🎮 Try DAMAT Now!</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Play a quick round of DAMAT and see how fun math can be! Experience the excitement of 
              learning arithmetic through gameplay.
            </p>
          </div>
        </div>
      </section>

      {/* Game Instructions */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📋 How to Play</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">🎲 Click to roll the die</h3>
                <p className="text-gray-600 text-sm">Start your turn by rolling to get your numbers</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                <div className="bg-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">➕ Solve the equation</h3>
                <p className="text-gray-600 text-sm">Use mental math to calculate the result</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">🚀 Move your token forward</h3>
                <p className="text-gray-600 text-sm">Advance on the board based on your answer</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">🎯 Reach the final square!</h3>
                <p className="text-gray-600 text-sm">First to finish wins the game</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Demo Section */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6">
              <h2 className="text-3xl font-bold text-center">🎲 DAMAT Demo Game</h2>
              <p className="text-center text-lg mt-2">Interactive Board Game Experience</p>
            </div>
            
            <div className="p-8">
              {!gameStarted ? (
                <div className="text-center py-12">
                  <div className="text-8xl mb-8">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Play?</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Click the button below to start the DAMAT demo game. You'll be able to experience 
                    the fun of learning math through interactive gameplay!
                  </p>
                  <button
                    onClick={() => setGameStarted(true)}
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    🎮 Start Demo Game
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="bg-gray-100 rounded-xl p-8 mb-6">
                    <p className="text-gray-600 mb-4">Loading DAMAT Interactive Demo...</p>
                    
                    {/* Game Iframe */}
                    <div className="relative w-full" style={{ paddingBottom: '75%', height: 0 }}>
                      <iframe
                        src="https://codepen.io/Damat-Build/pen/WbbEYRL"
                        title="DAMAT Demo Game"
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setGameStarted(false)}
                      className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
                    >
                      ↶ Back to Instructions
                    </button>
                    <button
                      onClick={() => window.open('https://codepen.io/Damat-Build/pen/WbbEYRL', '_blank')}
                      className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                    >
                      🔗 Open in New Tab
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">🌟 What Makes DAMAT Special?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mental Math Mastery</h3>
              <p className="text-gray-600">
                Builds quick calculation skills through repeated practice and pattern recognition
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Curriculum Aligned</h3>
              <p className="text-gray-600">
                Supports Malaysian KSSR mathematics objectives for primary school students
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Social Learning</h3>
              <p className="text-gray-600">
                Encourages peer interaction and collaborative problem-solving skills
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
              <div className="text-5xl mb-4">🎲</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Game-Based Learning</h3>
              <p className="text-gray-600">
                Makes mathematics enjoyable through strategic gameplay and competition
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Multiple Operations</h3>
              <p className="text-gray-600">
                Covers addition, subtraction, multiplication, and division in progressive levels
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Achievement System</h3>
              <p className="text-gray-600">
                Motivates students with clear goals and milestone celebrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold mb-6">You did it!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Great job trying out the DAMAT demo! Now you've experienced how fun and engaging math learning can be. 
            Ready to bring this excitement to your classroom or home?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
            >
              🛍️ Explore DAMAT Sets →
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 inline-flex items-center justify-center"
            >
              📦 Pre-Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">📖 Educational Research Behind DAMAT</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg"
                alt="Math equation on blackboard"
                className="rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🔬 Research-Based Design</h3>
                <p className="text-gray-600">
                  Developed by education researchers at Universiti Malaysia Perlis (UniMAP) based on 
                  proven pedagogical principles and local curriculum requirements.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-600 mb-3">📊 Proven Results</h3>
                <p className="text-gray-600">
                  Studies show that students using DAMAT improve their mental math speed by 45% 
                  and show increased enthusiasm for mathematics learning.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-600 mb-3">🎯 Curriculum Integration</h3>
                <p className="text-gray-600">
                  Seamlessly aligns with KSSR mathematics standards, making it easy for teachers 
                  to incorporate into existing lesson plans and assessment strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TryDemo;