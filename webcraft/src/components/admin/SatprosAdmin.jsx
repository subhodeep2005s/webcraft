import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const SatprosAdmin = () => {
  const [wicds, setWicds] = useState([]);
  const [newWicd, setNewWicd] = useState({
    name: '',
    price: { monthly: 0, yearly: 0, permanent: 0 },
    description: '',
    features: [''],
    softwareUsed: [''],
    imageUrl: '',
  });

  useEffect(() => {
    fetchWicds();
  }, []);

  const fetchWicds = async () => {
    try {
      const response = await fetch('https://backend-agency.onrender.com/api/wicds');
      if (response.ok) {
        const data = await response.json();
        setWicds(data);
      } else {
        toast.error('Failed to fetch WICD items');
      }
    } catch (error) {
      console.error('Error fetching WICD items:', error);
      toast.error('Error fetching WICD items');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWicd(prev => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setNewWicd(prev => ({
      ...prev,
      price: { ...prev.price, [name]: parseInt(value) }
    }));
  };

  const handleArrayChange = (index, value, field) => {
    setNewWicd(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setNewWicd(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-agency.onrender.com/api/wicds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWicd),
      });
      if (response.ok) {
        toast.success('WICD item added successfully');
        fetchWicds();
        setNewWicd({
          name: '',
          price: { monthly: 0, yearly: 0, permanent: 0 },
          description: '',
          features: [''],
          softwareUsed: [''],
          imageUrl: '',
        });
      } else {
        toast.error('Failed to add WICD item');
      }
    } catch (error) {
      console.error('Error adding WICD item:', error);
      toast.error('Error adding WICD item');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Satpros WICD Items</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={newWicd.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              name="monthly"
              value={newWicd.price.monthly}
              onChange={handlePriceChange}
              placeholder="Monthly"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
            <input
              type="number"
              name="yearly"
              value={newWicd.price.yearly}
              onChange={handlePriceChange}
              placeholder="Yearly"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
            <input
              type="number"
              name="permanent"
              value={newWicd.price.permanent}
              onChange={handlePriceChange}
              placeholder="Permanent"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={newWicd.description}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Features</label>
          {newWicd.features.map((feature, index) => (
            <input
              key={index}
              type="text"
              value={feature}
              onChange={(e) => handleArrayChange(index, e.target.value, 'features')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          ))}
          <button type="button" onClick={() => addArrayItem('features')} className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Add Feature
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Software Used</label>
          {newWicd.softwareUsed.map((software, index) => (
            <input
              key={index}
              type="text"
              value={software}
              onChange={(e) => handleArrayChange(index, e.target.value, 'softwareUsed')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          ))}
          <button type="button" onClick={() => addArrayItem('softwareUsed')} className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Add Software
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={newWicd.imageUrl}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Add WICD Item
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Existing WICD Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wicds.map((wicd) => (
            <div key={wicd._id} className="border rounded-md p-4">
              <h4 className="font-bold">{wicd.name}</h4>
              <p>Monthly: ₹{wicd.price.monthly}</p>
              <p>Yearly: ₹{wicd.price.yearly}</p>
              <p>Permanent: ₹{wicd.price.permanent}</p>
              <p className="mt-2">{wicd.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatprosAdmin;

