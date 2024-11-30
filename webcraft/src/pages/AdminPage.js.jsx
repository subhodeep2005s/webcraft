import React, { useState } from 'react';
import { X, Plus, Check, AlertTriangle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [services, setServices] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);

  const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
  const [newPortfolioItem, setNewPortfolioItem] = useState({ title: '', description: '', image: '', demoLink: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
      setError('');
      toast.success('Successfully logged in');
    } else {
      setError('Invalid credentials');
      toast.error('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    toast.info('Logged out successfully');
  };

  const handleAddService = (e) => {
    e.preventDefault();
    setServices([...services, newService]);
    setNewService({ title: '', description: '', icon: '' });
    toast.success('Service added successfully');
  };

  const handleAddPortfolioItem = (e) => {
    e.preventDefault();
    setPortfolioItems([...portfolioItems, newPortfolioItem]);
    setNewPortfolioItem({ title: '', description: '', image: '', demoLink: '' });
    toast.success('Portfolio item added successfully');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 flex items-center"
              >
                <X className="mr-2" size={18} />
                Logout
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-bold flex items-center">
                  <Plus className="mr-2" size={24} />
                  Add Service
                </h2>
                <form onSubmit={handleAddService} className="space-y-4">
                  <div>
                    <label htmlFor="serviceTitle" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      id="serviceTitle"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={newService.title}
                      onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      id="serviceDescription"
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={newService.description}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="serviceIcon" className="block text-sm font-medium text-gray-700">Icon (SVG path)</label>
                    <input
                      type="text"
                      id="serviceIcon"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={newService.icon}
                      onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center">
                    <Check className="mr-2" size={18} />
                    Add Service
                  </button>
                </form>
              </div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-bold flex items-center">
                  <Plus className="mr-2" size={24} />
                  Add Portfolio Item
                </h2>
                <form onSubmit={handleAddPortfolioItem} className="space-y-4">
                  <div>
                    <label htmlFor="portfolioTitle" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      id="portfolioTitle"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={newPortfolioItem.title}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="portfolioDescription" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      id="portfolioDescription"
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={newPortfolioItem.description}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="portfolioImage" className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                      type="url"
                      id="portfolioImage"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={newPortfolioItem.image}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, image: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="portfolioDemoLink" className="block text-sm font-medium text-gray-700">Demo Link</label>
                    <input
                      type="url"
                      id="portfolioDemoLink"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={newPortfolioItem.demoLink}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, demoLink: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center">
                    <Check className="mr-2" size={18} />
                    Add Portfolio Item
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="mr-2" size={24} />
                Added Services
              </h2>
              <ul className="list-disc pl-5">
                {services.map((service, index) => (
                  <li key={index} className="mb-2">
                    <strong>{service.title}</strong>: {service.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="mr-2" size={24} />
                Added Portfolio Items
              </h2>
              <ul className="list-disc pl-5">
                {portfolioItems.map((item, index) => (
                  <li key={index} className="mb-2">
                    <strong>{item.title}</strong>: {item.description} (Demo: <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.demoLink}</a>)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;

