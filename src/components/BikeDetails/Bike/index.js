import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import produce from 'immer';
import {useStore} from 'hooks/storeHook';
import {addBikeToOrder} from 'reducer';

// components
import BikeIcon from 'icons/BikeIcon';
import Underline from 'components/Underline';
import Customizable from './Customizable';

const Bike = ({bike}) => {
  // Handles the state for selected customizable options
  const [selectedOptions, setSelectedOptions] = useState(() =>
    bike.customizables.map(customizable => ({
      name: customizable.name,
      ...customizable.options[0],
    })),
  );
  const [store, dispatch] = useStore();

  const selectedOptionsAddedPrice = selectedOptions.reduce((total, option) => total + option.price, 0);
  const getOptionByName = name => selectedOptions.find(option => name === option.name);
  // can this :option be selected or is there a constrain?
  const isOptionAllowed = option => {
    return (
      option &&
      selectedOptions.find(({not_allowed_combinations}) =>
        not_allowed_combinations.find(({id}) => id === option.id),
      ) === undefined
    );
  };
  const selectOption = optionSelected => {
    if (!isOptionAllowed(optionSelected)) return;
    setSelectedOptions(
      produce(selectedOptions, draft => {
        const index = draft.findIndex(option => optionSelected.name === option.name);
        draft[index] = optionSelected;
      }),
    );
  };
  // console.log(selectedOptions);
  // console.log(selectedOptionsAddedPrice);
  return (
    <div className="mt-16 pl-4 w-full shadow-md">
      <div className="px-3 pt-6 inline-block lg:w-1/2 bg-white align-top">
        <div className="text-grey-darkest text-3xl font-bold text-sm ">
          {bike.name}
          <Underline color="red" />
        </div>
        <div className="mt-4 text-grey  text-lg">
          <div className="mt-8">High Quality Materials.</div>
          <div className="inline-block sm:w-1/2 px-4 lg:px-0 lg:w-full lg:block mt-8 text-md text-justify text-grey-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="inline-block align-baseline mt-4 w-full sm:mt-0 sm:w-1/2 lg:hidd bg-grey-light ">
            <BikeIcon
              wheelsColor={getOptionByName('Wheels Color').choice}
              frameColor={getOptionByName('Rim Color').choice}
            />
          </div>
          <div className="mt-6 align-bottom">
            {bike.customizables.map(customizable => (
              <Customizable
                key={customizable.name}
                isAllowed={isOptionAllowed}
                select={selectOption}
                selected={getOptionByName(customizable.name)}
                customizable={customizable}
              />
            ))}
          </div>
          <div className="mt-10">
            <div className="mt-3 inline-block">
              <Link to="/" className="mr-4 pt-3 text-blue">
                &larr; Go Back..?
              </Link>
            </div>
            <Link to="/my-cart">
              <button
                onClick={() => {
                  dispatch(
                    addBikeToOrder({
                      id: bike.id,
                      name: bike.name,
                      price: bike.price,
                      options: selectedOptions,
                    }),
                  );
                }}
                className="px-8 py-3 tracking-wide font-bold bg-green text-white hover:underline rounded-sm float-right mb-4 lg:mb-2"
              >
                Add 🚲 to Cart <span className="underline">for</span> {bike.price + selectedOptionsAddedPrice}
                €
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidd lg:inline-block bg-grey-light inline-block w-1/2 h-128">
        <BikeIcon
          wheelsColor={getOptionByName('Wheels Color').choice}
          frameColor={getOptionByName('Rim Color').choice}
        />
      </div>
    </div>
  );
};

export default Bike;
