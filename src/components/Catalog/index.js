import React from 'react';

import Item from './Item';

const Catalog = () => {
  return (
    <div className="">
      <p>OUR BEST BIKES</p>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bike, index) => (
          <Item key={index} frameColor />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
