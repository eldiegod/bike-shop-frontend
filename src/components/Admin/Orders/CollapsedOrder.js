import React from 'react';

const ExpandedOrder = ({order, index, expand}) => {
  return (
    <tr className={`${index % 2 ? 'bg-grey-dark' : 'bg-grey'}`}>
      <td className="py-2 pl-4">
        <button onClick={expand} className="mr-3 text-white font-bold px-2 bg-green rounded-full shadow-md">
          +
        </button>
        {order.customer.email}
      </td>
      <td className="py-2">
        {' '}
        {order.bikeOrders.map(({bike, options}, index) => (
          <span key={index} className="">
            {bike.name},{' '}
          </span>
        ))}
        ...
      </td>
      {/* <td>{order.bikeOrders[0].bike.name}</td> */}
      <td className="py-2 pr-4 text-right">{order.total}€</td>
    </tr>
  );
};

export default ExpandedOrder;
