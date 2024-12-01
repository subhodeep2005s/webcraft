import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'http://localhost:8000/api';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [services, setServices] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);

  const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
  const [newPortfolioItem, setNewPortfolioItem] = useState({ title: '', description: '', image: '', demoLink: '' });
  const [newPricingPlan, setNewPricingPlan] = useState({ plan: '', price: '', features: [], examples: '', isPopular: false });

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

  useEffect(() => {
    if (isLoggedIn) {
      fetchServices();
      fetchPortfolioItems();
    }
  }, [isLoggedIn]);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_URL}/services`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Failed to fetch services');
    }
  };

  const fetchPortfolioItems = async () => {
    try {
      const response = await fetch(`${API_URL}/portfolio`);
      const data = await response.json();
      setPortfolioItems(data);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      toast.error('Failed to fetch portfolio items');
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newService),
      });
      const data = await response.json();
      setServices([...services, data]);
      setNewService({ title: '', description: '', icon: '' });
      toast.success('Service added successfully');
    } catch (error) {
      console.error('Error adding service:', error);
      toast.error('Failed to add service');
    }
  };

  const handleAddPortfolioItem = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/portfolio`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPortfolioItem),
      });
      const data = await response.json();
      setPortfolioItems([...portfolioItems, data]);
      setNewPortfolioItem({ title: '', description: '', image: '', demoLink: '' });
      toast.success('Portfolio item added successfully');
    } catch (error) {
      console.error('Error adding portfolio item:', error);
      toast.error('Failed to add portfolio item');
    }
  };

  const handleAddPricingPlan = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/pricing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPricingPlan),
      });
      const data = await response.json();
      setNewPricingPlan({ plan: '', price: '', features: [], examples: '', isPopular: false });
      toast.success('Pricing plan added successfully');
    } catch (error) {
      console.error('Error adding pricing plan:', error);
      toast.error('Failed to add pricing plan');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  if (!isLoggedIn) {
    return (
      <div style={{ maxWidth: '300px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px' }}>Admin Dashboard</h1>
        <button onClick={handleLogout} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Logout</button>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Add Service</h2>
        <form onSubmit={handleAddService}>
          <input
            type="text"
            placeholder="Title"
            value={newService.title}
            onChange={(e) => setNewService({ ...newService, title: e.target.value })}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Description"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            style={{ ...inputStyle, height: '100px' }}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Icon (SVG path)"
            value={newService.icon}
            onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Add Service</button>
        </form>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Add Portfolio Item</h2>
        <form onSubmit={handleAddPortfolioItem}>
          <input
            type="text"
            placeholder="Title"
            value={newPortfolioItem.title}
            onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Description"
            value={newPortfolioItem.description}
            onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })}
            style={{ ...inputStyle, height: '100px' }}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Image URL"
            value={newPortfolioItem.image}
            onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, image: e.target.value })}
            style={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="Demo Link"
            value={newPortfolioItem.demoLink}
            onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, demoLink: e.target.value })}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Add Portfolio Item</button>
        </form>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Add Pricing Plan</h2>
        <form onSubmit={handleAddPricingPlan}>
          <input
            type="text"
            placeholder="Plan Name"
            value={newPricingPlan.plan}
            onChange={(e) => setNewPricingPlan({ ...newPricingPlan, plan: e.target.value })}
            style={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="Price"
            value={newPricingPlan.price}
            onChange={(e) => setNewPricingPlan({ ...newPricingPlan, price: e.target.value })}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Features (one per line)"
            value={newPricingPlan.features.join('\n')}
            onChange={(e) => setNewPricingPlan({ ...newPricingPlan, features: e.target.value.split('\n').filter(f => f.trim() !== '') })}
            style={{ ...inputStyle, height: '100px' }}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Examples"
            value={newPricingPlan.examples}
            onChange={(e) => setNewPricingPlan({ ...newPricingPlan, examples: e.target.value })}
            style={inputStyle}
            required
          />
          <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={newPricingPlan.isPopular}
              onChange={(e) => setNewPricingPlan({ ...newPricingPlan, isPopular: e.target.checked })}
              style={{ marginRight: '10px' }}
            />
            Popular Plan
          </label>
          <button type="submit" style={buttonStyle}>Add Pricing Plan</button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminPage;

// some new code added