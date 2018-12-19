import React, {useRef, useMemo, useEffect} from 'react';
import {useStore} from 'hooks/storeHook';
import {Link} from 'react-router-dom';
import {gql} from 'apollo-boost';
import {useMutation} from 'react-apollo-hooks';

import {removeBikeFromOrder, updateCustomerEmailFromOrder} from 'reducer';

import Underline from 'components/Underline';
import {RegExp} from 'tcomb';

const CREATE_ORDER = gql`
  mutation createOrder($customer_email: String!, $custom_bikes: [CustomBike!]!) {
    createOrder(customer_email: $customer_email, custom_bikes: $custom_bikes) {
      total
      bikeOrders {
        bike {
          name
          price
        }
        options {
          name
          choice
        }
      }
      customer {
        email
      }
      id
    }
  }
`;

const Cart = () => {
  const emailInputEl = useRef(null);
  const [{order}, dispatch] = useStore();
  const createOrder = useMutation(CREATE_ORDER); // server request
  const canCheckout = useMemo(
    () =>
      // check if the email is valid and if there is atleast a bike in the order
      RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(
        order.customerEmail,
      ) && order.customBikes.length > 0,
    [order.customerEmail, order.customBikes],
  );

  const onInputChange = e => {
    dispatch(updateCustomerEmailFromOrder(e.target.value));
  };
  const onCheckout = () => {
    if (!canCheckout) return;
    createOrder({
      variables: {
        customer_email: emailInputEl.current.value,
        custom_bikes: order.customBikes.map(bike => ({
          bike_id: parseInt(bike.id),
          option_ids: bike.options.map(option => parseInt(option.id)),
        })),
      },
    });
  };
  // console.log(order);
  const addedPriceOfCustomization = customBike =>
    customBike.options.reduce((total, option) => total + option.price, 0);
  return (
    <div className=" mx-auto px-2 md:px-8">
      <div className="text-grey-darkest text-3xl font-bold text-sm">Your Order</div>
      <Underline color="yellow" />
      <div className="my-6">
        <label htmlFor="email">Enter your email:</label>
        <br />
        <input
          className="mt-1 p-1 border rounded-sm"
          placeholder="example@email.com"
          onChange={onInputChange}
          value={order.customerEmail}
          ref={emailInputEl}
          type="email"
          id="email"
          size="30"
          required
        />
      </div>
      {order.customBikes.length > 0 ? (
        order.customBikes.map((customBike, index) => (
          <div key={index} className="border-b-2 border-grey-darker pb-2 mb-4 leading-normal">
            <div className="inline-block sm:w-4/5 text-sm">
              {customBike.name + ' 🚲 '}- Base Price: {customBike.price + '€ - '}
              {customBike.options.map((option, index) => (
                <span key={index}>
                  {option.name}: {option.choice}(<b>{option.price}€</b>){' - '}
                </span>
              ))}
              <b>Total:</b> {customBike.price + addedPriceOfCustomization(customBike) + '€'}
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
      <Link to="/" className="mt-4 mr-4 sm:mr-8 inline-block text-blue">
        &larr; Continue Buying
      </Link>
      <button
        onClick={onCheckout}
        className={`mt-4 px-4 py-2 text-white font-bold inline-block bg-green rounded-sm ${!canCheckout &&
          'cursor-not-allowed opacity-50'}`}
      >
        Check Out
      </button>
    </div>
  );
};

export default Cart;
