import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    inquiry_type: 'general'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
          inquiry_type: 'general'
        });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappContacts = [
    { name: 'Maz', number: '60193575769', title: 'General Inquiries' },
    { name: 'Murni', number: '60194734736', title: 'School Partnerships' },
    { name: 'Shiha', number: '60133911839', title: 'Product Support' }
  ];

  const createWhatsAppLink = (number, message = '') => {
    const encodedMessage = encodeURIComponent(message || `Hi! I'm interested in learning more about DAMAT. Can you help me?`);
    return `https://wa.me/${number}?text=${encodedMessage}`;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-4xl font-bold text-green-600 mb-6">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your message has been received successfully. Our team will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSubmitted(false)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Send Another Message
              </button>
              <a
                href="/"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Back to Home
              </a>
            </div>
          </div>
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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">📞 Contact & Support</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have a question? Need help ordering? We're here for parents, teachers, and partners. 
              Get in touch with the DAMAT team today!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">📝 Send Us a Message</h2>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="012-345-6789"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    School/Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="School or organization name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Inquiry
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="parent">Parent/Home Use</option>
                  <option value="educator">Teacher/Educator</option>
                  <option value="institution">School/Institution</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  submitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <div className="spinner mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  '📧 Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">📱 Direct Contact</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href="mailto:mazjamilah@unimap.edu.my" className="text-blue-600 hover:text-blue-800">
                      mazjamilah@unimap.edu.my
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <span className="text-xl">🏫</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">University</p>
                    <p className="text-gray-600">Universiti Malaysia Perlis (UniMAP)</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">💬 WhatsApp Team</h3>
              <div className="space-y-3">
                {whatsappContacts.map((contact, index) => (
                  <a
                    key={index}
                    href={createWhatsAppLink(contact.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div className="bg-green-500 text-white p-3 rounded-full mr-4 group-hover:bg-green-600 transition-colors">
                      <span className="text-lg">💬</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.title}</p>
                      <p className="text-sm text-green-600">Click to chat on WhatsApp</p>
                    </div>
                    <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xl">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">❓ Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">How do I order DAMAT sets?</h4>
                  <p className="text-gray-600 text-sm">Contact us via WhatsApp, email, or this form. We'll guide you through the ordering process and available packages.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Do you offer bulk discounts for schools?</h4>
                  <p className="text-gray-600 text-sm">Yes! We have special institutional packages with training materials and ongoing support for schools and learning centers.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Is DAMAT suitable for my child's age?</h4>
                  <p className="text-gray-600 text-sm">DAMAT is designed for ages 6-12, covering Years 1-6 mathematics curriculum with progressive difficulty levels.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Can I try DAMAT before purchasing?</h4>
                  <p className="text-gray-600 text-sm">Absolutely! Try our online demo game to experience how DAMAT works, or contact us for a school demonstration.</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">🚀 Quick Actions</h2>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="/try-demo"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors flex items-center"
                >
                  <span className="text-2xl mr-3">🎮</span>
                  <div>
                    <p className="font-semibold">Try Demo Game</p>
                    <p className="text-sm opacity-80">Experience DAMAT online</p>
                  </div>
                </a>
                
                <a
                  href="/products"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors flex items-center"
                >
                  <span className="text-2xl mr-3">🛍️</span>
                  <div>
                    <p className="font-semibold">View Products</p>
                    <p className="text-sm opacity-80">See available game sets</p>
                  </div>
                </a>
                
                <a
                  href="/educators"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors flex items-center"
                >
                  <span className="text-2xl mr-3">🎓</span>
                  <div>
                    <p className="font-semibold">For Educators</p>
                    <p className="text-sm opacity-80">Curriculum & training info</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;