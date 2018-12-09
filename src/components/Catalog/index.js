import React, {Suspense} from 'react';

import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';

import Item from './Item';

const GET_BIKES = gql`
  {
    allBikes {
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

const SuspenseCatalog = () => {
  return (
    //TODO: improve catalog loading view
    <Suspense
      fallback={
        <div className="text-blue-darker text-center">
          Loading page... 🚴‍♀
        </div>
      }
    >
      <Catalog />
    </Suspense>
  );
};

const Catalog = () => {
  const {data, error} = useQuery(GET_BIKES);
  console.log(data);
  return (
    <div className="">
      <span className="text-xl font-bold border-b-3 ">
        OUR BEST BIKES
      </span>
      <div className="mt-4 flex flex-wrap justify-between">
        {data.allBikes.map((bike, index) => (
          <Item
            key={index}
            item={bike}
            customizables={bike.customizables}
          />
        ))}
      </div>
    </div>
  );
};

export default SuspenseCatalog;
