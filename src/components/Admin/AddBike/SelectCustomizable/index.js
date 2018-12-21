import React, {useMemo, useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery, useMutation} from 'react-apollo-hooks';
import produce from 'immer';
import CreatableSelect from 'react-select/lib/Creatable';

import SelectOptions from './SelectCustomizableOptions';

const GET_ALL_CUSTOMIZABLES = gql`
  query {
    allCustomizables {
      id
      name
      options {
        id
        choice
        price
        name
      }
    }
  }
`;

const CREATE_CUSTOMIZABLE = gql`
  mutation createCustomizable($name: String!) {
    createCustomizable(name: $name) {
      name
      id
    }
  }
`;
//WIP
//TODO: clean this file
const SelectCustomizable = ({setCustomizableIds}) => {
  const {data, error} = useQuery(GET_ALL_CUSTOMIZABLES);
  const [allCustomizables, setAllCustomizables] = useState(data.allCustomizables);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const createCustomizable = useMutation(CREATE_CUSTOMIZABLE);
  const selectableCustomizables = useMemo(
    () =>
      allCustomizables.map((customizable, index) => ({
        id: customizable.id,
        value: customizable.id,
        name: customizable.name,
        label: customizable.name,
        index,
      })),
    [allCustomizables],
  );
  // used for the child select component
  // const selectableCustomizableOptions = useMemo(
  //   () =>
  //     selectedOptions.length > 0
  //       ? allCustomizables[selectedOptions[selectedOptions.length - 1].index].options
  //       : undefined,
  //   [selectedOptions],
  // );
  const onChange = (options, action) => {
    setCustomizableIds(options.map(option => option.value));
    setSelectedOptions(options);
    // console.log(options), console.log(action);
  };
  const onCreateOption = async inputValue => {
    setIsLoading(true);
    // if checkout was succesful reset the store and redirect to the success page
    // console.log(inputValue);
    try {
      const {data} = await createCustomizable({
        variables: {
          name: inputValue,
        },
      });
      // Do this to check for unique names
      setAllCustomizables(
        produce(allCustomizables, draft => {
          draft.push(data.createCustomizable);
        }),
      );
      setSelectedOptions(
        produce(selectedOptions, draft => {
          draft.push({
            ...data.createCustomizable,
            value: data.createCustomizable.id,
            label: data.createCustomizable.name,
          });
        }),
      );
      setCustomizableIds(selectedOptions.map(option => option.value));

      // console.log(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  // console.log(allCustomizables);
  if (error) return 'Ooof';
  return (
    <>
      <div>
        <CreatableSelect
          isClearable
          isMulti
          onChange={onChange}
          isDisabled={selectableCustomizables === undefined}
          isLoading={isLoading}
          onCreateOption={onCreateOption}
          options={selectableCustomizables}
          value={selectedOptions}
        />
      </div>
      {/* <div className="pt-2">
        <SelectOptions options={selectableCustomizableOptions} />
      </div> */}
    </>
  );
};

export default SelectCustomizable;
