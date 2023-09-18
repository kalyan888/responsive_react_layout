import { useEffect, useState } from "react";
import '../../ParentComponent/ParentComponent.css';
import returnObjToJsx from "../../commonFuntions/CommonFunctions";

const initialFields = {
    elementType: "",
    labelName: "",
    eleClassName: "",
    elePlaceholder: "",
    eleStatus: "",
}

function UIComponent( {handleGenerateClick, screenWidth} ) {
    const [uiCompFields, setUICompFields] = useState(initialFields);
    const [fieldsData, setFieldsData] = useState([])

    useEffect(() => {
        handleGenerateClick(fieldsData);
    }, [fieldsData, uiCompFields]);

    const onChangeSelectVal = (e) => {
        setUICompFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onClickRender = () => {
        setUICompFields(initialFields)
        returnObjToJsx(uiCompFields)
        // handleGenerateClick(fieldsData);
        setFieldsData((prevFieldData) => [...prevFieldData, uiCompFields])
    };

    const onClickGenerateCode = () => {
        // handleGenerateClick(fieldsData);
        console.log("Generates total code as JSX...");
    };

    const onClickClearCode = () => {
        setUICompFields(initialFields)
        setFieldsData([])
        handleGenerateClick([]);
    }
    
    const { elementType, labelName, eleClassName, elePlaceholder, eleStatus } = uiCompFields;

    return (
        <div className="fluid-container ui-screen" style={{width: screenWidth }}>
            <div className="row d-flex align-items-start justify-content-start">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <label htmlFor="basic-url" className="form-label">Element Type</label>
                    <select name="elementType" value={elementType} className="form-select" aria-label="Default select example" onChange={onChangeSelectVal}>
                        <option value="select">Select Element</option>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="select">Select</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <label htmlFor="basic-url" className="form-label">Label Name</label>
                    <input name="labelName" value={labelName} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={onChangeSelectVal} />
                </div>
                {/* <div className="col-sm-12 col-md-6 col-lg-4">
                    <label htmlFor="basic-url" className="form-label">ClassName</label>
                    <input name="eleClassName" value={eleClassName} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={onChangeSelectVal} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <label htmlFor="basic-url" className="form-label">PlaceHolder</label>
                    <input name="elePlaceholder" value={elePlaceholder} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={onChangeSelectVal} />
                </div> */}
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 pt-3 ps-3">
                    <div className="ui-disable-container">
                        <input name="eleStatus" value={eleStatus} className="form-check-input" type="checkbox" aria-label="Radio button htmlFor following text input" onChange={onChangeSelectVal} />
                        <label htmlFor="basic-url" className="form-label ms-2">Disable?</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div >
                        <button className="next-btn" onClick={onClickRender}>Next</button>
                        <button className="next-btn" onClick={onClickGenerateCode}>Generate</button>
                        <button className="next-btn" onClick={onClickClearCode}>Clear</button>
                    </div>
                </div>
            </div>
            <>
            </>
        </div>
    );
}

export default UIComponent;