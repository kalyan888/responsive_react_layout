function returnObjToJsx(fieldData) {
    const { elementType, labelName, eleClassName, elePlaceholder, eleStatus } = fieldData;
    if (fieldData.elementType === 'text') {
        return (
            <>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <label htmlFor="basic-url" className={`'form-label' ${eleClassName}`}>{labelName}</label>
                    <input type={elementType} className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={elePlaceholder} disabled={eleStatus} />
                </div>
            </>
        );
    } else {
        <div className="col-sm-12 col-md-6 col-lg-3">
            Hiiiiiiiiiiii
        </div>;
    }
}

export default returnObjToJsx;