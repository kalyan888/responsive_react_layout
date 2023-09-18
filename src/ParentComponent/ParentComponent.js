import React, { useEffect, useState } from 'react';
import UIComponent from './UIComponent/UIComponent';
import PreviewComponent from './PreviewComponent/PreviewComponent';

function ParentComponent() {
    const [codeSnippet, setCodeSnippet] = useState('');

    const [uiWidth, setUiWidth] = useState(500); // Initial width of UI screen
    const [previewWidth, setPreviewWidth] = useState(800); // Initial width of preview screen
    const [isResizing, setIsResizing] = useState(false);

    const handleGenerateClick = (fieldsData) => {
        const generatedCode =
            <div className="row d-flex align-items-end">
                {fieldsData.map((field, index) => {
                    let { elementType, labelName, eleClassName, elePlaceholder, eleStatus } = field;
                    return (
                        <div key={'col' + index} className="col-md-2">
                            <label className="form-label">{labelName}</label>
                            <input type={elementType} className={`form-control ${eleClassName}`} placeholder={elePlaceholder} disabled={eleStatus} />
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


{/* Your UI components */ }
{/* <div className="ui-screen" style={{ width: uiWidth }}>
<h1>Your UI Components</h1>
<input type="text" placeholder="Enter text" />
<button>Submit</button>
</div> */}

{/* Your preview components */ }
 // <div className="preview-screen" style={{ width: previewWidth }}>
//     <h1>Preview</h1>
//     <div className="preview-box">This is your preview content.</div>
// </div>