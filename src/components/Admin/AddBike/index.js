import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';

import Underline from 'components/Underline';
import SelectCustomizable from './SelectCustomizable';

const GET_ALL_BIKES = gql`
  {
    allBikes {
      id
      name
      price
      customizables {
        id
        name
        options {
          choice
          price
        }
      }
    }
  }
`;

const AddBike = () => {
  const {
    data: {allBikes},
    error,
  } = useQuery(GET_ALL_BIKES);
  return (
    <div className="mt-8 mx-auto px-2 md:px-8">
      <div className="text-grey-darkest text-3xl font-bold text-sm">Add new Bike</div>
      <Underline color="yellow" />
      <div className="my-6">
        <div className="inline-block">
          <label htmlFor="name">Name of the bike:</label>
          <br />
          <input
            className="mt-1 p-1 border rounded-sm"
            placeholder="Best Bike"
            // ref={emailInputEl}
            type="text"
            id="name"
            size="20"
            required
          />
        </div>
        <div className="mt-2 ml-2 inline-block">
          <label htmlFor="price">Price:</label>
          <br />
          <input
            className="mt-1 p-1 border rounded-sm"
            placeholder="199.99€"
            // ref={emailInputEl}
            type="number"
            id="price"
            size="20"
            min="1"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="customizables">Choose or add customizable parts:</label>
          <SelectCustomizable id="customizables" />
        </div>
      </div>
    </div>
  );
};

export default AddBike;
