import React from 'react';
import { Route, Routes } from 'react-router-dom';  
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NestedComp1 from './components/NestedComp1';
import NestedComp2 from './components/NestedComp2';
import Products from './components/Products';
import ProtectedRoute from './RBAC/ProtectedRoute';
import AuthProvider from './RBAC/AuthContext';
import GetData from './components/GetData';

function App() {
  return (
    // Main app container
    <AuthProvider>
    {/* AuthProvider - Provides authentication context to the entire app */}
      <div className="App">
        {/* Browser Router - Provides routing context for the entire app */}

          {/* What is Router Context?
          Think of it as a "communication system"
          Stores and provides routing information
          Like a central navigation control system
          Why is it needed?
          Link components need to know:
          Current URL
          How to change URLs
          How to update browser history
          Routes need to know:
          Which component to show
          What URL parameters exist
          Current location */}

          {/* Navigation component containing Link elements */}
          <Navigation />

          {/* Routes - Container that renders the first matching Route */}
          <Routes>
            {/* Route components define URL paths and their corresponding elements */}
            {/* path="/" represents the home page */}
            <Route path="/" element={<Home/>} />
            
            {/* Route for About page - accessible at /about */}
            <Route path="/about" >
              {/* Nested routes can go here */}
              <Route index element={<About/>} />
              <Route path="nested1" element={<NestedComp1 />} />
              <Route path="nested2" element={<NestedComp2 />} />
            </Route>
            
            {/* Route for Contact page - accessible at /contact */}
              <Route path="/contact" element={
                <ProtectedRoute allowedroles={['admin', 'user']}>
                  <Contact/>
                </ProtectedRoute>
                } />

            {/* in case if you want to redirect to product page , we can use this  */}
            {/* <Route path="/products" element={<div>In the Product pages</div>} /> */}
            
            {/* Route for Users page with route parmeters - accessible at /users */}
            <Route path="/products/:name" element={<Products/>} />
            <Route path="/getdata" element={<GetData/>} />
          </Routes>

      </div>
    </AuthProvider>
  );
}

export default App;

