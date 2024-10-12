// src/hooks/useAuth.jsx
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status (this could be from local storage, API, etc.)
    const token = localStorage.getItem('token'); // Example: token stored in local storage
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated };
};

export default useAuth; // Make sure to export it this way
