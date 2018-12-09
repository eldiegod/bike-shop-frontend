import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';
import {Link} from 'react-router-dom';

import BikeIcon from 'icons/BikeIcon';
import Underline from 'components/Underline';

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
  console.log(data);
  console.log(error);
  return (
    <React.Fragment>
      {error || !data.bike ? (
        <div className="mt-32 text-center">
          Bike not found 🙅‍♂🚧{' '}
          <Link className="text-blue" to="/">
            Go Back...?
          </Link>
        </div>
      ) : (
        <div>'ASFJASFJASKASD'</div>
      )}
    </React.Fragment>
  );
};

export default BikeDetails;
