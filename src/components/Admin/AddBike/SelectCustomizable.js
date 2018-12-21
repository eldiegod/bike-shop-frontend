import React from 'react';
import Select from 'react-select';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import CreatableSelect from 'react-select/lib/Creatable';

const createOption = label => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [createOption('One'), createOption('Two'), createOption('Three')];

const SelectCustomizable = () => {
  return (
    <CreatableSelect
      isClearable
      // isDisabled={isLoading}
      // isLoading={isLoading}
      // onChange={this.handleChange}
      // onCreateOption={this.handleCreate}
      options={defaultOptions}
      // value={value}
    />
  );
};

export default SelectCustomizable;
