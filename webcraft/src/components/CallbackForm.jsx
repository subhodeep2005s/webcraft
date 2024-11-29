import React, { useState } from 'react';
import { X, Phone, User } from 'lucide-react';

const CallbackForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callbackTime, setCallbackTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const timeOptions = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM'
  ];

  const sendWhatsAppMessage = async (to, templateName, placeholders) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App d0c9d580c9e75d8d106046cd79bac360-6d1ea96f-d977-4ac0-b96e-f40d317fab2f");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    const raw = JSON.stringify({
      "messages": [
        {
          "from": "447860099299",
          "to": to,
          "messageId": `callback-${templateName}-${Date.now()}`,
          "content": {
            "templateName": templateName,
            "templateData": {
              "body": {
                "placeholders": placeholders
              }
            },
            "language": "en"
          }
        }
      ]
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://9k12r4.api.infobip.com/whatsapp/1/message/template", requestOptions);
      const result = await response.json();
      console.log('API Response:', JSON.stringify(result, null, 2));
      return { success: response.ok, data: result };
    } catch (error) {
      console.error('API Error:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Ensure phone number is in international format
    const formattedPhoneNumber = phoneNumber;

    console.log('Sending message to business...');
    const businessMessageResult = await sendWhatsAppMessage(
      "918597722752",
      "test_whatsapp_template_en",
      [`Callback request from ${name} (${formattedPhoneNumber}) at ${callbackTime}`]
    );

    console.log('Business Message Result:', businessMessageResult);

    if (businessMessageResult.success) {
      setSubmitMessage('Thank you! We have received your callback request and will contact you soon.');
    } else {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again later or contact us directly.');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Request a Callback</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="(123) 456-7890"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="callbackTime" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Callback Time
              </label>
              <select
                id="callbackTime"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={callbackTime}
                onChange={(e) => setCallbackTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Callback'}
            </button>
          </form>
          {submitMessage && (
            <p className="mt-4 text-sm text-center text-green-600">{submitMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;

