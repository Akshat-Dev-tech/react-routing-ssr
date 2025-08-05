import React from "react";
import { createContext } from "react";
// Create an AuthContext to manage authentication state
export const AuthContext = createContext();

// AuthProvider component to provide authentication state to the app

const AuthProvider = ({ children }) => {  
  // Simulating a user object
  // In a real application, this would be fetched from an authentication service
  const user = {
    isLoggedIn: true,
    role: 'user', // could be 'user', 'guest', etc.
  };

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}
// Export the AuthContext and AuthProvider for use in other components
export default AuthProvider;
// Usage in components: 
// import { useContext } from 'react';
// import { AuthContext } from './path/to/AuthContext';
// const { user } = useContext(AuthContext);
// Now you can access the user object in any component wrapped by AuthProvider
// This allows components to access the authentication state and user role
// without having to pass props down through every level of the component tree.
// This is useful for managing user authentication and authorization in a React application.
// The AuthProvider component wraps the entire application, allowing any component
// within the app to access the authentication state via the AuthContext.