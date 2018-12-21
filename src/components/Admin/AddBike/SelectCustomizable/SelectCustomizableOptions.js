import React, {useMemo, useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery, useMutation} from 'react-apollo-hooks';
import produce from 'immer';
import CreatableSelect from 'react-select/lib/Creatable';

const CREATE_CUSTOMIZABLE = gql`
  mutation createCustomizable($name: String!) {
    createCustomizable(name: $name) {
      name
      id
    }
  }
`;

const SelectCustomizableOptions = ({options}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onChange = (options, action) => {
    // setCustomizableIds(options.map(option => option.value));
    setSelectedOptions(options);
    console.log(options), console.log(action);
  };
  console.log(options);
  const onCreateOption = async inputValue => {
    setIsLoading(true);
    // if checkout was succesful reset the store and redirect to the success page
    console.log(inputValue);
    // try {
    //   const {data} = await createCustomizable({
    //     variables: {
    //       name: inputValue,
    //     },
    //   });
    //   // Do this to check for unique names
    //   setAllCustomizables(
    //     produce(allCustomizables, draft => {
    //       draft.push(data.createCustomizable);
    //     }),
    //   );
    //   setSelectedOptions(
    //     produce(selectedOptions, draft => {
    //       draft.push(createOption(data.createCustomizable));
    //     }),
    //   );
    //   setCustomizableIds(selectedOptions.map(option => option.value));

    //   // console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }
    setIsLoading(false);
  };
  return (
    <CreatableSelect
      isClearable
      isMulti
      onChange={onChange}
      isDisabled={options === undefined}
      isLoading={isLoading}
      onCreateOption={onCreateOption}
      getOptionValue={option => option.id}
      getOptionLabel={option => option.choice}
      options={options}
      value={selectedOptions}
    />
  );
};

export default SelectCustomizableOptions;
