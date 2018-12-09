export const typeDefs = `
  type CustomBike {
    bikeId: Int
    optionIds: [Int]
  }

  type Order {
    customerEmail: String
    customBikes: [CustomBike]
  }

  type Mutation {
    
  }

  type Query {
    currentOrder: Order
  }
`;
