export const typeDefs = `
  type CustomBike {
    id: Int
    name: String
    price: Float
    optionIds: [Int]
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
