import { useEffect, useState } from "react";
import returnObjToJsx from "../../commonFuntions/CommonFunctions";
import MultiSelectDropdown from "../../commonFuntions/MultiSearchSelect";
import "../ParentComponent.css";

const initialFields = {
  elementType: "",
  labelName: "",
  // eleClassName: "",
  // elePlaceholder: "",
  eleStatus: false,
};

let attributeOptions = [
  { value: "1", labelName: "Label Class Name" },
  { value: "2", labelName: "Field Class Name" },
  { value: "3", labelName: "Place Holder" },
  { value: "4", labelName: "Max Length" },
  { value: "5", labelName: "Disable ?" },
];

function UIComponent({ handleGenerateClick, screenWidth }) {
  const [uiCompFields, setUICompFields] = useState(initialFields);
  const [fieldsData, setFieldsData] = useState([]);
  
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  useEffect(() => {
    handleGenerateClick(fieldsData);
  }, [fieldsData, uiCompFields]);

  const onChangeSelectVal = (e) => {
    if (e.target.name === "eleStatus") {
      setUICompFields((prev) => ({ ...prev, eleStatus: e.target.checked }));
    }
    setUICompFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onClickRender = () => {
    setUICompFields(initialFields);
    returnObjToJsx(uiCompFields);
    // handleGenerateClick(fieldsData);
    setFieldsData((prevFieldData) => [...prevFieldData, uiCompFields]);
  };

  const onClickGenerateCode = () => {
    // handleGenerateClick(fieldsData);
    console.log("Generates total code as JSX...");
  };

  const onClickClearCode = () => {
    setUICompFields(initialFields);
    setFieldsData([]);
    handleGenerateClick([]);
  };

  const { elementType, labelName, eleStatus } = uiCompFields;

  return (
    <section
      className="fluid-container ui-screen"
      style={{ width: screenWidth }}
    >
      <div className="row mt-3">
        <header className="col-md-12">
          <h3 className="desc-headers">Render the element with a Name.</h3>
        </header>
        <div className="col-sm-12 col-md-6">
          <label htmlFor="elementType" className="form-label">
            Element Type
          </label>
          <select
            id="elementType"
            name="elementType"
            value={elementType}
            className="form-select"
            aria-label="Element Type"
            onChange={onChangeSelectVal}
          >
            <option value="select">Select Element</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="select">Select</option>
          </select>
        </div>
        <div className="col-sm-12 col-md-6">
          <label htmlFor="labelName" className="form-label">
            Label Name
          </label>
          <input
            id="labelName"
            name="labelName"
            value={labelName}
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            onChange={onChangeSelectVal}
          />
        </div>
      </div>
      <div className="row mt-5">
        <header className="col-md-12">
          <h3 className="desc-headers">Make it responsive with basic info.</h3>
        </header>
        <div className="col-sm-12 col-md-6 multi-select-div">
          <MultiSelectDropdown
            label="multiSelect"
            dropdownOptions={attributeOptions}
            selectedOptions={selectedAttributes}
            isSelectAllReq={true}
            updateSelectedOptions={setSelectedAttributes}
            disabled={false}
            isSearchReq={true}
            preSelectAll={false}
            filterOptions={attributeOptions}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div>
            <button className="next-btn" onClick={onClickRender}>
              Next
            </button>
            <button className="next-btn" onClick={onClickGenerateCode}>
              Generate
            </button>
            <button className="next-btn" onClick={onClickClearCode}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UIComponent;
