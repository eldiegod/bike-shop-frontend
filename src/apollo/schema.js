export const typeDefs = `
  type CustomBike {
    id: ID
    name: String
    price: Float
    optionIds: [ID]
  }

  type Order {
    customerEmail: String
    customBikes: [CustomBike]
  }

  type Mutation {
    updateOrder(customerEmail: String, customBikes: [CustomBike]): Order
  }

  type Query {
    order: Order
  }
`;
