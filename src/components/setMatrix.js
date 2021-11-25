import { InputGroup, FormControl } from 'react-bootstrap';


var SetMatrix = (params) => {
  return (
    <div className="submit-form">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            <div className="mb-12">
              <h2>Image Matrix Dimension</h2>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">Rows</InputGroup.Text>
              <FormControl
                aria-label="Rows"
                aria-describedby="inputGroup-sizing-default"
                onChange={params.customRows}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">Columns</InputGroup.Text>
              <FormControl
                aria-label="Columns"
                aria-describedby="inputGroup-sizing-default"
                onChange={params.customCols}
              />
            </InputGroup>
            <button onClick={() => params.setMatrix()} className="btn btn-primary align-self-start">Create Matrix</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetMatrix;