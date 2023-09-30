import { useLayoutEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "../ParentComponent/ParentComponent.css";

function MultiSelectDropdown(props) {
  const {
    label,
    dropdownOptions,
    selectedOptions,
    isSelectAllReq,
    updateSelectedOptions,
    disabled,
    isSearchReq,
    preSelectAll,
  } = props;

  const [options, setOptions] = useState([]);

  useLayoutEffect(() => {
    const updatedOptions = dropdownOptions.map((eachItem) => ({
      value: eachItem?.value,
      label: eachItem?.labelName,
    }));

    setOptions(updatedOptions);

    if (preSelectAll) {
      updateSelectedOptions(updatedOptions);
      // Function to render these options in UI
    }
  }, [dropdownOptions, preSelectAll]);

  return (
    <>
      <label className="form-label app-labels">
        Field Basic Attributes
      </label>
      <MultiSelect
        labelledBy={label}
        options={options}
        value={selectedOptions}
        hasSelectAll={isSelectAllReq}
        overrideStrings={{
          allItemsAreSelected: "All items are selected.",
          clearSearch: "Clear Search",
          clearSelected: "Clear Selected",
          noOptions: "No options",
          search: "Search...",
          selectAll: "Select All",
          selectAllFiltered: "Select All (Filtered)",
          selectSomeItems: "Select",
          create: "Create",
        }}
        filterOptions={(filterOptions, filter) => {
          // if (!filter) {
          //   return filtOptions;
          // }

          // return filtOptions.filter(eachItem => (modifyData(eachItem?.label).includes(modifyData(filter))));
        }}
        onChange={updateSelectedOptions}
        className="multi-select"
        disabled={disabled}
        disableSearch={!isSearchReq}
        // ClearIcon={'Custom Clear Icon for Search' - ReactNode}
        ClearSelectedIcon={null}
      />
    </>
  );
}

export default MultiSelectDropdown;
