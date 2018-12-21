import React from 'react';

const Text = ({children, isSelected, onClick}) => {
  const selectedClasses = isSelected ? 'underline font-bold' : 'hover:underline hover:font-bold';
  return (
    <span
      onClick={onClick}
      className={`pl-2 pt-1 cursor-pointer align-middle font-normal ${selectedClasses}`}
    >
      {children}
    </span>
  );
};

const Color = ({color, isSelected, onClick, isAllowed}) => {
  const disabledClasses = !isAllowed && 'cursor-not-allowed opacity-50';
  const selectedClasses = isSelected
    ? 'shadow-md rounded  '
    : 'hover:shadow-md rounded-full hover:rounded-sm';
  return (
    <div
      onClick={onClick}
      className={`ml-2 align-middle text-center text-red font-bold cursor-pointer inline-block w-5 h-5 bg-${color} bg-${color}-light shadow-lg  ${selectedClasses} ${disabledClasses}`}
    >
      {!isAllowed && 'x'}
    </div>
  );
};

const Customizable = ({customizable, selected, select, isAllowed}) => {
  const isSelected = id => selected.id === id;
  // console.log(selected);
  return (
    <div className="px-2 py-1 mt-1 bg-grey-lighter text-grey-darker shadow-sm">
      <span className="pt-1 align-middle">
        {customizable.name}(<b>+{selected.price || 0}€</b>):{' '}
      </span>
      {customizable.options.map((option, index) =>
        customizable.hasColors ? (
          <Color
            key={index}
            isSelected={selected.id === option.id}
            isAllowed={isAllowed(option)}
            onClick={() => {
              select({
                name: customizable.name,
                ...option,
              });
            }}
            color={option.choice}
          />
        ) : (
          <Text
            key={index}
            onClick={() => {
              select({
                name: customizable.name,
                ...option,
              });
            }}
            isAllowed={isAllowed(option)}
            isSelected={selected.id === option.id}
          >
            {option.choice}
          </Text>
        ),
      )}
    </div>
  );
};

export default Customizable;
