import React, { useEffect, useState } from 'react';
import PreviewComponent from './PreviewComponent/PreviewComponent';
import UIComponent from './UIComponent/UIComponent';
import './ParentComponent.css' 

function ParentComponent() {
    const [codeSnippet, setCodeSnippet] = useState(<></>);

    const [uiWidth, setUiWidth] = useState(900); // Initial width of UI screen
    const [previewWidth, setPreviewWidth] = useState(window.innerWidth); // Initial width of preview screen
    const [isResizing, setIsResizing] = useState(false);

    const handleGenerateClick = (fieldsData) => {
        const generatedCode =
            <div className="row d-flex align-items-end mt-3">
                {fieldsData.map((field, index) => {
                    let { elementType, labelName, eleStatus } = field;
                    return (
                        <div key={'col' + index} className="col-sm-12">
                            <label className="form-label">{labelName}</label>
                            <input type={elementType} className={`form-control`} disabled={eleStatus} />
                        </div>
                    );
                })}
            </div>;
        setCodeSnippet(generatedCode);
    };

    useEffect(() => {
        const handleResize = (e) => {
            if (isResizing) {
                setUiWidth(e.clientX);
                setPreviewWidth(window.innerWidth - e.clientX);
            }
        };

        const handleMouseUp = () => {
            if (isResizing) {
                setIsResizing(false);
                window.removeEventListener("mousemove", handleResize);
                window.removeEventListener("mouseup", handleMouseUp);
            }
        };

        if (isResizing) {
            window.addEventListener("mousemove", handleResize);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleResize);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsResizing(true);
    };

    return (
        <div>
            {/* <UIComponent handleGenerateClick={handleGenerateClick} /> */}
            <div className="main-container">
                <UIComponent handleGenerateClick={handleGenerateClick} screenWidth={uiWidth} />
                <div
                    className={`resize-handle ${isResizing ? "resizing" : ""}`}
                    onMouseDown={handleMouseDown}
                >
                </div>
                <PreviewComponent codeSnippet={codeSnippet} screenWidth={previewWidth} />
            </div>
        </div>
    );
}

export default ParentComponent;