import React from 'react';

const ExpandedOrder = ({order, index, collapse}) => {
  // console.log(order.bikeOrders);
  return (
    <tr className={`${index % 2 ? 'bg-grey-dark' : 'bg-grey'}`}>
      <td className="py-2 pl-4 align-text-top font-bold">
        <button
          onClick={collapse}
          className="mr-3 text-white font-bold px-2 bg-red rounded-full shadow-md text-lg"
        >
          -
        </button>
        {order.customer.email}
      </td>
      <td className="py-2">
        {order.bikeOrders.map(({bike, options}, index) => (
          <p key={index} className="mt-1">
            <b>{index}</b>- {bike.name} (<b className="text-sm">{bike.price}€</b>)
            {options.map(({name, choice, price = 0}) => (
              <span key={name}>
                {' '}
                + {name}: {choice} (<b>{price}€</b>)
              </span>
            ))}
          </p>
        ))}
      </td>
      {/* <td>{order.bikeOrders[0].bike.name}</td> */}
      <td className="py-2 pr-4 text-right align-text-top font-bold">{order.total}€</td>
    </tr>
  );
};

export default ExpandedOrder;
