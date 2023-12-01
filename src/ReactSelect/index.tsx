import React, { FC } from "react";

import ReactSelect, { components } from "react-select";

import CustomClearIndicator, { CustomSearchIcon } from "./addSearch";

export interface SearchSelectProps {
  options: any;
  onChange?: (selectedOptions: any) => void;
  placeholder?: string;
  onInputChange?: any;
  menuIsOpen?: any;
  styles?: any;
  value?: any;
  className?: string;
  size?: "small" | "medium" | "large" | undefined;
}

const GroupHeading = (props: any) => <components.GroupHeading {...props} />;

const Control = ({ children, ...props }: any) => (
  <components.Control {...props}>
    <CustomSearchIcon data-testid="search-icon" />
    {children}
  </components.Control>
);

const SearchSelect: FC<SearchSelectProps> = ({
  options,
  onChange,
  placeholder,
  onInputChange,
  menuIsOpen,
  styles,
  value,
  size,
  className,
  ...props
}) => {
  const customFilterOption = (option: any, rawInput: any) => {
    return option.label.toLowerCase().includes(rawInput.toLowerCase());
  };

  const sizing = (size: "small" | "medium" | "large" | undefined) => {
    switch (size) {
      case "small":
        return "55px";
      case "medium":
        return "65px";
      default:
        return "75px";
    }
  };

  return (
    <ReactSelect
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Control,
        ClearIndicator: CustomClearIndicator,
        GroupHeading,
      }}
      {...props}
      filterOption={customFilterOption}
      isClearable
      isMulti
      className={className}
      isSearchable
      menuIsOpen={menuIsOpen}
      onChange={onChange}
      onInputChange={onInputChange}
      options={options}
      placeholder={placeholder}
      styles={{
        control: (provided) => ({
          ...provided,
          height: sizing(size),
          fontFamily: "Anek Latin, sans-serif",
        }),
      }}
      value={value}
    />
  );
};
export { SearchSelect };
