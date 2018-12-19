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

const Color = ({color, isSelected, onClick}) => {
  const selectedClasses = isSelected
    ? 'shadow-md rounded  '
    : 'hover:shadow-md rounded-full hover:rounded-sm';
  return (
    <div
      onClick={onClick}
      className={`ml-2 align-middle cursor-pointer inline-block w-5 h-5 bg-${color} bg-${color}-light shadow-lg  ${selectedClasses}`}
    />
  );
};

const Customizable = ({customizable, selected, select}) => {
  const isSelected = id => selected.id === id;
  // console.log(selected);
  return (
    <div className="px-2 py-1 mt-1 bg-grey-lighter text-grey-darker shadow-sm">
      <span className="pt-1 align-middle">
        {customizable.name}(<b>+{selected.price}€</b>):{' '}
      </span>
      {customizable.options.map((option, index) =>
        customizable.hasColors ? (
          <Color
            key={index}
            isSelected={selected.id === option.id}
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
            onClick={() => {
              select({
                name: customizable.name,
                ...option,
              });
            }}
            isSelected={selected.id === option.id}
            key={index}
          >
            {option.choice}
          </Text>
        ),
      )}
    </div>
  );
};

export default Customizable;
