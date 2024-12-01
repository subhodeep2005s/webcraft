import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const PricingAdmin = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({
    plan: '',
    price: '',
    features: [],
    examples: '',
    isPopular: false,
  });

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/pricing');
      if (response.ok) {
        const data = await response.json();
        setPlans(data);
      } else {
        toast.error('Failed to fetch pricing plans');
      }
    } catch (error) {
      toast.error('Error fetching pricing plans');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlan(prev => ({ ...prev, [name]: value }));
  };

  const handleFeaturesChange = (e) => {
    const features = e.target.value.split('\n').filter(feature => feature.trim() !== '');
    setNewPlan(prev => ({ ...prev, features }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlan),
      });
      if (response.ok) {
        toast.success('Pricing plan added successfully');
        fetchPlans();
        setNewPlan({
          plan: '',
          price: '',
          features: [],
          examples: '',
          isPopular: false,
        });
      } else {
        toast.error('Failed to add pricing plan');
      }
    } catch (error) {
      toast.error('Error adding pricing plan');
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

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Pricing Admin</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="plan">Plan Name</label>
          <input
            id="plan"
            name="plan"
            value={newPlan.plan}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            value={newPlan.price}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="features">Features (one per line)</label>
          <textarea
            id="features"
            name="features"
            value={newPlan.features.join('\n')}
            onChange={handleFeaturesChange}
            required
            style={{ ...inputStyle, height: '100px' }}
          />
        </div>
        <div>
          <label htmlFor="examples">Examples</label>
          <input
            id="examples"
            name="examples"
            value={newPlan.examples}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="isPopular"
              checked={newPlan.isPopular}
              onChange={(e) => setNewPlan(prev => ({ ...prev, isPopular: e.target.checked }))}
            />
            Popular Plan
          </label>
        </div>
        <button type="submit" style={buttonStyle}>Add Pricing Plan</button>
      </form>

      <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>Existing Plans</h2>
      <div>
        {plans.map((plan) => (
          <div key={plan.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
            <h3 style={{ fontWeight: 'bold' }}>{plan.plan}</h3>
            <p>Price: {plan.price}</p>
            <p>Features: {plan.features.join(', ')}</p>
            <p>Examples: {plan.examples}</p>
            <p>Popular: {plan.isPopular ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingAdmin;

