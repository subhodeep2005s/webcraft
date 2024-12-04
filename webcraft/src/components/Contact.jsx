import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const queryTypes = [
    "E-commerce Website",
    "Business Landing Page",
    "Portfolio Website",
    "Blog Website",
    "Gym/Fitness Website",
    "Restaurant Website",
    "Real Estate Website",
    "Educational Website",
    "Healthcare Website",
    "Travel Agency Website",
    "Photography Portfolio",
    "Non-Profit Organization Website",
    "Music/Entertainment Website",
    "Tech Startup Website",
    "Personal Blog"
  ];

  const sendWhatsAppMessage = async (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message);
    const apiKey = '7572720';
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to send WhatsApp message');
      }
      return true;
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const messageText = `
*New Website Inquiry*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.queryType}
Message: ${formData.message}
    `.trim();

    try {
      // Send to first number
      await sendWhatsAppMessage('+919851607357', messageText);
      // Send to second number
      
      await sendWhatsAppMessage('+917047671946', messageText);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        queryType: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#6366f1]">Touch</span>
          </h2>
          <p className="text-gray-600">Let's discuss your project and make it happen</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name*"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email*"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number*"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <select
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-colors"
              >
                <option value="" disabled>Select Query*</option>
                {queryTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Give us a small brief about your project*"
              rows={6}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-colors resize-none"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-[#6366f1] hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366f1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="-ml-1 mr-3 h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="text-green-600 text-center mt-4">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="text-red-600 text-center mt-4">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

