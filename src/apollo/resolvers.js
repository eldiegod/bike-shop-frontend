import {gql} from 'apollo-boost';

export const defaults = {
  order: {
    customerEmail: '',
    customBikes: [],
    __typename: 'Order',
  },
};

export const resolvers = {
  Mutation: {
    updateOrder: (
      _,
      {customerEmail = null, customBikes = []},
      {cache},
    ) => {
      const query = gql`
        query GetOrder {
          order @client {
            customerEmail
            customBikes
          }
        }
      `;
      console.log('testing the apollo mutation');
      const previous = cache.readQuery({query});
      console.log(previous);
      const updatedOrder = {
        __typename: 'Order',
        customerEmail: customerEmail || previous.customerEmail,
        customBikes: customBikes || previous.customBikes,
      };
      const data = {order: updatedOrder};
      console.log(data);
      cache.writeQuery({query, data});
      return updatedOrder;
    },
  },
};
