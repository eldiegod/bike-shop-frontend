import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery, useMutation} from 'react-apollo-hooks';

import Underline from 'components/Underline';
import SelectCustomizable from './SelectCustomizable';

const GET_ALL_BIKES = gql`
  {
    allBikes {
      id
      name
      price
      customizables {
        id
        name
        options {
          choice
          price
        }
      }
    }
  }
`;

const CREATE_BIKE = gql`
  mutation createBike($name: String!, $price: Float!, $customizable_ids: [ID]) {
    createBike(name: $name, price: $price, customizable_ids: $customizable_ids) {
      name
      price
      id
    }
  }
`;

const AddBike = () => {
  const {
    data: {allBikes},
    error,
  } = useQuery(GET_ALL_BIKES);
  const createBike = useMutation(CREATE_BIKE);
  const [customizableIds, setCustomizableIds] = useState([]);
  const [bikeName, setBikeName] = useState('');
  const [bikePrice, setBikePrice] = useState(1);
  const [createdBike, setCreatedBike] = useState(null);

  const isBikeNameUnique = () => allBikes.find(bike => bike.name === bikeName) === undefined;
  const isFormValid = () => {
    return (
      bikeName &&
      bikePrice &&
      // check there is no other bike with the same name
      isBikeNameUnique()
    );
  };
  const onChangeName = ({target: {value}}) => setBikeName(value);
  const onChangePrice = ({target: {value}}) => setBikePrice(value);
  const onCreateBike = async () => {
    if (!isFormValid()) return;
    // if checkout was succesful reset the store and redirect to the success page
    try {
      const {data} = await createBike({
        variables: {
          name: bikeName,
          price: parseFloat(bikePrice),
          customizable_ids: customizableIds,
        },
      });
      // Do this to check for unique names
      allBikes.push(data.createBike);
      setCreatedBike(data.createBike);
      // reset bike name input value
      setBikeName('');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-8 mx-auto px-2 md:px-8">
      <div className="text-grey-darkest text-3xl font-bold text-sm">Add new Bike</div>
      <Underline color="yellow" />
      <div className="mb-6" />
      <div className="text-red">{!isBikeNameUnique() && '*Bike name already in use*'}</div>
      <div className="mb-6">
        <div className="inline-block">
          <label htmlFor="name">Name of the bike:</label>
          <br />
          <input
            className="mt-1 p-1 border rounded-sm"
            placeholder="Best Bike"
            onChange={onChangeName}
            type="text"
            id="name"
            size="20"
            value={bikeName}
            required
          />
        </div>
        <div className="mt-2 ml-2 inline-block">
          <label htmlFor="price">Price:</label>
          <br />
          <input
            className="mt-1 p-1 border rounded-sm"
            placeholder="199.99€"
            onChange={onChangePrice}
            type="number"
            id="price"
            size="20"
            min="1"
            value={bikePrice}
            required
          />
        </div>
        <div className="mt-2 mb-4">
          <label htmlFor="customizables">
            Choose or <span className="underline">Add</span> customizable parts:
          </label>
          <SelectCustomizable id="customizables" setCustomizableIds={setCustomizableIds} />
        </div>
        <div className="mb-2 text-green-dark font-semibold">
          {createdBike && `*Bike "${createdBike.name}" Created Succesfully*`}
        </div>
        <div>
          <button
            onClick={onCreateBike}
            className={`px-4 py-2 text-white font-bold inline-block bg-green rounded-sm ${!isFormValid() &&
              'cursor-not-allowed opacity-50'}`}
          >
            Create Bike ✚
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBike;
