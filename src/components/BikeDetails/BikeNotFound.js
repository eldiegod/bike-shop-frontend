import React from 'react';
import {Link} from 'react-router-dom';

const BikeNotFound = () => {
  return (
    <div className="mt-32 text-center">
      Bike not found 🙅‍♂🚧{' '}
      <Link className="text-blue" to="/">
        Go Back...?
      </Link>
    </div>
  );
};

export default BikeNotFound;
