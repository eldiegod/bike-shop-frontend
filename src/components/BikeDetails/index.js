import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';

import BikeNotFound from './BikeNotFound';
import Bike from './Bike';
import Error from 'components/Error';

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
          price
          not_allowed_combinations {
            name
            choice
            id
          }
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
  if (error) return <Error err={error} />;
  return <>{!data.bike ? <BikeNotFound /> : <Bike bike={data.bike} />}</>;
};

export default BikeDetails;
