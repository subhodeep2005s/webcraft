// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const API_URL = 'http://localhost:8000/api';

// const AdminPage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const [services, setServices] = useState([]);
//   const [portfolioItems, setPortfolioItems] = useState([]);

//   const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
//   const [newPortfolioItem, setNewPortfolioItem] = useState({ title: '', description: '', image: '', demoLink: '' });
//   const [newPricingPlan, setNewPricingPlan] = useState({ plan: '', price: '', features: [], examples: '', isPopular: false });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === '123') {
//       setIsLoggedIn(true);
//       setError('');
//       toast.success('Successfully logged in');
//     } else {
//       setError('Invalid credentials');
//       toast.error('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername('');
//     setPassword('');
//     toast.info('Logged out successfully');
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       fetchServices();
//       fetchPortfolioItems();
//     }
//   }, [isLoggedIn]);

//   const fetchServices = async () => {
//     try {
//       const response = await fetch(`${API_URL}/services`);
//       const data = await response.json();
//       setServices(data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//       toast.error('Failed to fetch services');
//     }
//   };

//   const fetchPortfolioItems = async () => {
//     try {
//       const response = await fetch(`${API_URL}/portfolio`);
//       const data = await response.json();
//       setPortfolioItems(data);
//     } catch (error) {
//       console.error('Error fetching portfolio items:', error);
//       toast.error('Failed to fetch portfolio items');
//     }
//   };

//   const handleAddService = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${API_URL}/services`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newService),
//       });
//       const data = await response.json();
//       setServices([...services, data]);
//       setNewService({ title: '', description: '', icon: '' });
//       toast.success('Service added successfully');
//     } catch (error) {
//       console.error('Error adding service:', error);
//       toast.error('Failed to add service');
//     }
//   };

//   const handleAddPortfolioItem = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${API_URL}/portfolio`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newPortfolioItem),
//       });
//       const data = await response.json();
//       setPortfolioItems([...portfolioItems, data]);
//       setNewPortfolioItem({ title: '', description: '', image: '', demoLink: '' });
//       toast.success('Portfolio item added successfully');
//     } catch (error) {
//       console.error('Error adding portfolio item:', error);
//       toast.error('Failed to add portfolio item');
//     }
//   };

//   const handleAddPricingPlan = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${API_URL}/pricing`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newPricingPlan),
//       });
//       const data = await response.json();
//       setNewPricingPlan({ plan: '', price: '', features: [], examples: '', isPopular: false });
//       toast.success('Pricing plan added successfully');
//     } catch (error) {
//       console.error('Error adding pricing plan:', error);
//       toast.error('Failed to add pricing plan');
//     }
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '8px',
//     marginBottom: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   };

//   const buttonStyle = {
//     backgroundColor: '#4CAF50',
//     border: 'none',
//     color: 'white',
//     padding: '10px 20px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontSize: '16px',
//     margin: '4px 2px',
//     cursor: 'pointer',
//     borderRadius: '4px',
//   };

//   if (!isLoggedIn) {
//     return (
//       <div style={{ maxWidth: '300px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h2>
//         <form className='mt-9' onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={inputStyle}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={inputStyle}
//             required
//           />
//           {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
//           <button type="submit" style={buttonStyle}>Login</button>
//         </form>
//         <ToastContainer />
//       </div>
//     );
//   }

//   return (
//     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
//         <h1 style={{ fontSize: '24px' }}>Admin Dashboard</h1>
//         <button className='mt-100'  onClick={handleLogout} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Logout</button>
//       </div>

//       <div style={{ marginBottom: '40px' }}>
//         <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Add Service</h2>
//         <form onSubmit={handleAddService}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={newService.title}
//             onChange={(e) => setNewService({ ...newService, title: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <textarea
//             placeholder="Description"
//             value={newService.description}
//             onChange={(e) => setNewService({ ...newService, description: e.target.value })}
//             style={{ ...inputStyle, height: '100px' }}
//             required
//           ></textarea>
//           <input
//             type="text"
//             placeholder="Icon (SVG path)"
//             value={newService.icon}
//             onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <button type="submit" style={buttonStyle}>Add Service</button>
//         </form>
//       </div>

//       <div style={{ marginBottom: '40px' }}>
//         <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Add Portfolio Item</h2>
//         <form onSubmit={handleAddPortfolioItem}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={newPortfolioItem.title}
//             onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <textarea
//             placeholder="Description"
//             value={newPortfolioItem.description}
//             onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })}
//             style={{ ...inputStyle, height: '100px' }}
//             required
//           ></textarea>
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newPortfolioItem.image}
//             onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, image: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Demo Link"
//             value={newPortfolioItem.demoLink}
//             onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, demoLink: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <button type="submit" style={buttonStyle}>Add Portfolio Item</button>
//         </form>
//       </div>

//       <div style={{ marginBottom: '40px' }}>
//         <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Add Pricing Plan</h2>
//         <form onSubmit={handleAddPricingPlan}>
//           <input
//             type="text"
//             placeholder="Plan Name"
//             value={newPricingPlan.plan}
//             onChange={(e) => setNewPricingPlan({ ...newPricingPlan, plan: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Price"
//             value={newPricingPlan.price}
//             onChange={(e) => setNewPricingPlan({ ...newPricingPlan, price: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <textarea
//             placeholder="Features (one per line)"
//             value={newPricingPlan.features.join('\n')}
//             onChange={(e) => setNewPricingPlan({ ...newPricingPlan, features: e.target.value.split('\n').filter(f => f.trim() !== '') })}
//             style={{ ...inputStyle, height: '100px' }}
//             required
//           ></textarea>
//           <input
//             type="text"
//             placeholder="Examples"
//             value={newPricingPlan.examples}
//             onChange={(e) => setNewPricingPlan({ ...newPricingPlan, examples: e.target.value })}
//             style={inputStyle}
//             required
//           />
//           <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//             <input
//               type="checkbox"
//               checked={newPricingPlan.isPopular}
//               onChange={(e) => setNewPricingPlan({ ...newPricingPlan, isPopular: e.target.checked })}
//               style={{ marginRight: '10px' }}
//             />
//             Popular Plan
//           </label>
//           <button type="submit" style={buttonStyle}>Add Pricing Plan</button>
//         </form>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminPage;

// // some new code added




import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'http://localhost:8000/api';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('services');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [services, setServices] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);

  const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
  const [newPortfolioItem, setNewPortfolioItem] = useState({ title: '', description: '', image: '', demoLink: '' });
  const [newPricingPlan, setNewPricingPlan] = useState({ plan: '', price: '', features: ['', '', '', '', '', '', '', ''], examples: '', isPopular: false });

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
    const filledFeatures = newPricingPlan.features.filter(feature => feature.trim() !== '');
    if (filledFeatures.length < 5) {
      toast.error('Please fill at least 5 features');
      return;
    }
    try {
      const response = await fetch(`${API_URL}/pricing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newPricingPlan,
          features: filledFeatures,
        }),
      });
      const data = await response.json();
      setNewPricingPlan({ plan: '', price: '', features: ['', '', '', '', '', '', '', ''], examples: '', isPopular: false });
      toast.success('Pricing plan added successfully');
    } catch (error) {
      console.error('Error adding pricing plan:', error);
      toast.error('Failed to add pricing plan');
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh',
      paddingTop: '60px',
      boxSizing: 'border-box',
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      padding: '10px 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: '0',
    },
    nav: {
      display: 'flex',
      gap: '10px',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        width: '100%',
        display: isMobileMenuOpen ? 'flex' : 'none',
      },
    },
    navButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.3s',
      '@media (max-width: 768px)': {
        width: '100%',
        marginBottom: '5px',
      },
    },
    mobileMenuButton: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'block',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
      },
    },
    content: {
      maxWidth: '800px',
      margin: '20px auto',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      '@media (max-width: 768px)': {
        margin: '20px 10px',
      },
    },
    form: {
      marginBottom: '30px',
    },
    formTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      minHeight: '100px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      width: '100%',
    },
    logoutButton: {
      backgroundColor: '#f44336',
    },
    loginContainer: {
      maxWidth: '300px',
      margin: '100px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    error: {
      color: '#f44336',
      marginBottom: '10px',
    },
    welcomeText: {
      fontSize: '18px',
      color: '#666',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
  };

  if (!isLoggedIn) {
    return (
      <div style={styles.container}>
        <div style={styles.loginContainer}>
          <h2 style={styles.formTitle}>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            {error && <p style={styles.error}>{error}</p>}
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={styles.mobileMenuButton}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
        <nav style={{
          ...styles.nav,
          display: isMobileMenuOpen ? 'flex' : styles.nav.display,
        }}>
          <button onClick={() => { setActiveSection('services'); setIsMobileMenuOpen(false); }} style={styles.navButton}>Services</button>
          <button onClick={() => { setActiveSection('portfolio'); setIsMobileMenuOpen(false); }} style={styles.navButton}>Portfolio</button>
          <button onClick={() => { setActiveSection('pricing'); setIsMobileMenuOpen(false); }} style={styles.navButton}>Pricing</button>
          <button onClick={handleLogout} style={{...styles.navButton, ...styles.logoutButton}}>Logout</button>
        </nav>
      </header>

      <div style={styles.content}>
        <p style={styles.welcomeText}>
          Welcome to the Admin Dashboard. Here you can manage your services, portfolio items, and pricing plans. 
          Use the navigation above to switch between sections and the forms below to add new content to your website.
        </p>

        {activeSection === 'services' && (
          <div style={styles.form}>
            <h2 style={styles.formTitle}>Add Service</h2>
            <form onSubmit={handleAddService}>
              <input
                type="text"
                placeholder="Title"
                value={newService.title}
                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                style={styles.input}
                required
              />
              <textarea
                placeholder="Description"
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                style={styles.textarea}
                required
              ></textarea>
              <input
                type="text"
                placeholder="Icon (SVG path)"
                value={newService.icon}
                onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>Add Service</button>
            </form>
          </div>
        )}

        {activeSection === 'portfolio' && (
          <div style={styles.form}>
            <h2 style={styles.formTitle}>Add Portfolio Item</h2>
            <form onSubmit={handleAddPortfolioItem}>
              <input
                type="text"
                placeholder="Title"
                value={newPortfolioItem.title}
                onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })}
                style={styles.input}
                required
              />
              <textarea
                placeholder="Description"
                value={newPortfolioItem.description}
                onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })}
                style={styles.textarea}
                required
              ></textarea>
              <input
                type="text"
                placeholder="Image URL"
                value={newPortfolioItem.image}
                onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, image: e.target.value })}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Demo Link"
                value={newPortfolioItem.demoLink}
                onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, demoLink: e.target.value })}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>Add Portfolio Item</button>
            </form>
          </div>
        )}

        {activeSection === 'pricing' && (
          <div style={styles.form}>
            <h2 style={styles.formTitle}>Add Pricing Plan</h2>
            <form onSubmit={handleAddPricingPlan}>
              <input
                type="text"
                placeholder="Plan Name"
                value={newPricingPlan.plan}
                onChange={(e) => setNewPricingPlan({ ...newPricingPlan, plan: e.target.value })}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Price"
                value={newPricingPlan.price}
                onChange={(e) => setNewPricingPlan({ ...newPricingPlan, price: e.target.value })}
                style={styles.input}
                required
              />
              <div>
                <label>Features (at least 5 required)</label>
                {[...Array(8)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Feature ${index + 1}${index < 5 ? ' (required)' : ''}`}
                    value={newPricingPlan.features[index] || ''}
                    onChange={(e) => {
                      const updatedFeatures = [...newPricingPlan.features];
                      updatedFeatures[index] = e.target.value;
                      setNewPricingPlan({ ...newPricingPlan, features: updatedFeatures });
                    }}
                    style={styles.input}
                    required={index < 5}
                  />
                ))}
              </div>
              <input
                type="text"
                placeholder="Examples"
                value={newPricingPlan.examples}
                onChange={(e) => setNewPricingPlan({ ...newPricingPlan, examples: e.target.value })}
                style={styles.input}
                required
              />
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <input
                  type="checkbox"
                  checked={newPricingPlan.isPopular}
                  onChange={(e) => setNewPricingPlan({ ...newPricingPlan, isPopular: e.target.checked })}
                  style={{ marginRight: '10px' }}
                />
                Popular Plan
              </label>
              <button type="submit" style={styles.button}>Add Pricing Plan</button>
            </form>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminPage;

