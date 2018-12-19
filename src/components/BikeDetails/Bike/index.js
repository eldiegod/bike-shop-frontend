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
  const [options, setOptions] = useState(() =>
    bike.customizables.map(customizable => ({
      name: customizable.name,
      choice: customizable.options[0].choice,
      id: customizable.options[0].id,
    })),
  );
  const [store, dispatch] = useStore();

  const getOptionByName = name => options.find(option => name === option.name);

  return (
    <div className="mt-16 pl-4 w-full shadow-md">
      <div className="px-3 pt-6 inline-block w-1/2 bg-white align-top">
        <div className="text-grey-darkest text-3xl font-bold text-sm ">
          {bike.name}
          <Underline color="red" />
        </div>
        <div className="mt-4 text-grey  text-lg">
          <div className="mt-8">High Quality Materials.</div>
          <div className="mt-8 text-md text-grey-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="mt-6 align-bottom">
            {bike.customizables.map(customizable => (
              <Customizable
                key={customizable.name}
                select={optionSelected => {
                  setOptions(
                    produce(options, draft => {
                      const index = draft.findIndex(option => optionSelected.name === option.name);
                      draft[index] = optionSelected;
                    }),
                  );
                }}
                selectedId={getOptionByName(customizable.name).id}
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
                      options: options,
                    }),
                  );
                }}
                className="px-8 py-3 tracking-wide font-bold bg-green text-white hover:underline rounded-sm float-right"
              >
                Get this 🚲 <span className="underline">from</span> {bike.price} €
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-grey-light inline-block w-1/2 h-128">
        <BikeIcon
          wheelsColor={getOptionByName('Wheels Color').choice}
          frameColor={getOptionByName('Rim Color').choice}
        />
      </div>
    </div>
  );
};

export default Bike;
