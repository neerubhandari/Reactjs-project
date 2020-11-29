import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorize = () => {
  return (
    <div className='container'>
      <div class="message">
        <h1>You need to first login</h1>
        <p>after login you can view the protected page</p>
      </div>
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default Unauthorize;