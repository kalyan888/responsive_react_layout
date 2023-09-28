import '../../ParentComponent/ParentComponent.css';

function PreviewComponent({ codeSnippet, screenWidth }) {
    return (
        // <pre>
        <div className="fluid-container preview-screen" style={{ width: screenWidth }}>
            Render the UI
            {codeSnippet}
        </div>
        // </pre>
    );
}

export default PreviewComponent;