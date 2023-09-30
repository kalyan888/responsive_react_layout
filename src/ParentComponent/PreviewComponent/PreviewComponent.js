import "../../ParentComponent/ParentComponent.css";

function PreviewComponent({ codeSnippet, screenWidth }) {
  return (
    // <pre>
    <div
      className="fluid-container preview-screen"
      style={{ width: screenWidth }}
    >
      <h3 className="preview-desc desc-headers">Render the Responsive UI here.</h3>
      {codeSnippet}
    </div>
    // </pre>
  );
}

export default PreviewComponent;

// .labels-dark-mode .fields-dark-mode
