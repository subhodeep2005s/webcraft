import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const HeroAdmin = () => {
  const [heroData, setHeroData] = useState({
    mainTitle: '',
    ourStory: '',
    projects: '',
    experience: '',
    happyClients: '',
    imageUrl: ''
  });

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      // const response = await fetch('http://localhost:8000/api/hero');
      const response = await fetch('https://backend-agency.onrender.com/api/hero');
      if (response.ok) {
        const data = await response.json();
        setHeroData(data);
      } else {
        toast.error('Failed to fetch hero data');
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
      toast.error('Error fetching hero data');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHeroData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-agency.onrender.com/api/hero', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(heroData),
      });
      if (response.ok) {
        toast.success('Hero data updated successfully');
        fetchHeroData();
      } else {
        toast.error('Failed to update hero data');
      }
    } catch (error) {
      console.error('Error updating hero data:', error);
      toast.error('Error updating hero data');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Hero Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="mainTitle" className="block text-sm font-medium text-gray-700">Main Title</label>
          <input
            type="text"
            id="mainTitle"
            name="mainTitle"
            value={heroData.mainTitle}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="ourStory" className="block text-sm font-medium text-gray-700">Our Story</label>
          <textarea
            id="ourStory"
            name="ourStory"
            value={heroData.ourStory}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="projects" className="block text-sm font-medium text-gray-700">Projects</label>
          <input
            type="number"
            id="projects"
            name="projects"
            value={heroData.projects}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (years)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={heroData.experience}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="happyClients" className="block text-sm font-medium text-gray-700">Happy Clients</label>
          <input
            type="number"
            id="happyClients"
            name="happyClients"
            value={heroData.happyClients}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={heroData.imageUrl}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Hero Section
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroAdmin;

