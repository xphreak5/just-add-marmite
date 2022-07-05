import Router from 'next/router';
import React, { useEffect } from 'react';

const NotFound = () => {
  
  useEffect(() => {
    setTimeout(() => {
      Router.push("/")
    }, 3000)
  }, [])
  
  
  return (
    <div>
      <h3>Oops 404</h3>
      <p>I think you are on a not existing page</p>
      <h3>Redirecting to Homepage...</h3>
    </div>
  );
}

export default NotFound;
