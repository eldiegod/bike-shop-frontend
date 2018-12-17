import React from 'react';
import {useStore} from 'hooks/storeHook';
import {Link} from 'react-router-dom';

import {removeBikeFromOrder} from 'reducer';

import Underline from 'components/Underline';

const Cart = () => {
  const [{order}, dispatch] = useStore();
  console.log(order);
  return (
    <div className=" mx-auto px-2 md:px-8">
      <div className="text-grey-darkest text-3xl font-bold text-sm">
        Your Order
      </div>
      <Underline color="yellow" />
      <div className="my-6">
        <label for="email">Enter your email:</label>
        <br />
        <input
          className="mt-1 p-1 border rounded-sm"
          type="email"
          id="email"
          size="30"
          required
        />
      </div>
      {order.customBikes.length > 0 ? (
        order.customBikes.map((customBike, index) => (
          <div
            key={index}
            className="border-b-2 border-grey-darker pb-2 mb-4 leading-normal"
          >
            <div className="inline-block w-4/5">
              {customBike.name + ' 🚲 '}- Base Price:{' '}
              {customBike.price + '€ - '}
              {customBike.options.map((option, index) => (
                <span key={index}>
                  {option.name}: {option.choice}
                  {' - '}
                </span>
              ))}
              <b>Total:</b> {customBike.price + '€'}
            </div>
            <button
              onClick={() => dispatch(removeBikeFromOrder(index))}
              className="align-bottom text-sm px-2 py-1 text-white font-bold inline-block bg-red rounded-sm"
            >
              Remove Item
            </button>
          </div>
        ))
      ) : (
        <div>No bikes selected...</div>
      )}
      <Link
        to="/"
        className="mt-4 mr-4 sm:mr-8 inline-block text-blue"
      >
        &larr; Continue Buying
      </Link>
      <button className="mt-4 px-4 py-2 text-white font-bold inline-block bg-green rounded-sm">
        Check Out
      </button>
    </div>
  );
};

export default Cart;
