import React, { useContext }  from "react";
import AuthProvider, { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ allowedroles , children }) => {
    const {user} = useContext(AuthContext);
    console.log('User:', user);

    // Simulating a user object
    // In a real application, this would be fetched from an authentication service
    // const user = {
    //     isLoggedIn: true,
    //     //Change this value to guest to see acess denied message , since we are passing roles as ['admin', 'user'] form contact component.
    //     role: 'admin', // could be 'user', 'guest', etc.
    //   }
    
    // Check if user is  has an allowed role
    // If the user has a role that is included in the allowed roles, render the children components.
    // Otherwise, render an access denied message.
    //children is the special prop in react which holds jsx , so in this case it's holding <contact/>
    if(allowedroles.includes(user.role) ) return children;

      return (
        <div>
            <h2>Access Denied</h2>
            <p>You do not have permission to view this page.</p>
        </div>
      );
}
export default ProtectedRoute;