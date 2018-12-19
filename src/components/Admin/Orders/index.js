import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';
import produce from 'immer';

import Expanded from './ExpandedOrder';
import Collapsed from './CollapsedOrder';

const GET_ALL_ORDERS = gql`
  {
    allOrders {
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

const Orders = () => {
  const {
    data: {allOrders},
    error,
  } = useQuery(GET_ALL_ORDERS);
  // Used to expand the details of each order
  const [isExpandedArray, setIsExpandedArray] = useState(new Array(allOrders.length).fill(false));

  // collapses or expands an order
  const transform = (willExpand = true, index) => () => {
    setIsExpandedArray(
      produce(isExpandedArray, draft => {
        draft[index] = willExpand;
      }),
    );
  };

  // console.log(allOrders);
  // console.log(isExpandedArray);
  return (
    <div>
      <b>ALL ORDERS</b>
      <table className="w-full mt-4" style={{borderCollapse: 'collapse'}}>
        <thead className="">
          <tr className="text-left bg-grey-lighter rounded-sm">
            <th className="pl-4 py-4 border-b ">Customer Email</th>
            <th className="py-4 border-b ">Bikes and Customizations</th>
            <th className="pr-4 py-4 border-b  text-right">Total</th>
          </tr>
        </thead>
        <tbody className=" ">
          {allOrders.map((order, index) =>
            isExpandedArray[index] ? (
              <Expanded collapse={transform(false, index)} key={index} order={order} index={index} />
            ) : (
              <Collapsed expand={transform(true, index)} key={index} order={order} index={index} />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
