import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';


const Logout = () => {

//   const handleLogout = () => {
//     // Clear the login data from local storage
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userId');
//     // Navigate to the login page
//     // navigate('/');
//     window.location.href = '/';
//     Swal.fire("Are you sure you want to logout?", "Your file has been deleted.", "success");
//   };
// const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(true);
const handleLogout = () => {
    // Display a confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear the login data from local storage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        // Update login status in state
        setIsLoggedIn(false);
        // Navigate to the login page
        window.location.href = '/';
      }
    });
  };
  

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
