import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';

import BikeNotFound from './BikeNotFound';
import Bike from './Bike';

const GET_BIKE = gql`
  query getBikeById($id: Int!) {
    bike(id: $id) {
      id
      name
      price
      customizables {
        name
        hasColors
        options {
          choice
          id
        }
      }
    }
  }
`;

const BikeDetails = ({
  match: {
    params: {id},
  },
}) => {
  const {data, error} = useQuery(GET_BIKE, {
    variables: {id: parseInt(id)},
  });
  // console.log(data);
  return (
    <>
      {error || !data.bike ? (
        <BikeNotFound />
      ) : (
        <Bike bike={data.bike} />
      )}
    </>
  );
};

export default BikeDetails;
